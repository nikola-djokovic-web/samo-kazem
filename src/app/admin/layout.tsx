"use client";

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
  useSidebar,
} from '@/components/ui/sidebar';
import { Home, Newspaper, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { AdminAuthProvider, useAdminAuth } from '@/components/admin/AdminAuthProvider';
import { usePathname } from 'next/navigation';
import AdminLoginPage from './login/page';
import { cn } from '@/lib/utils';

function AdminUserMenu() {
    const auth = useAdminAuth();
    const { state } = useSidebar();
    
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                 <Button variant="ghost" className={cn("w-full justify-start text-left", state === 'collapsed' ? 'p-2 justify-center' : 'p-2 gap-3')}>
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="https://picsum.photos/seed/103/100/100" alt="Mare NajCar" data-ai-hint="man portrait" />
                        <AvatarFallback>M</AvatarFallback>
                    </Avatar>
                    <div className={cn("flex flex-col", state === 'collapsed' && 'hidden')}>
                        <p className="text-sm font-medium leading-none text-sidebar-foreground">Mare NajCar</p>
                        <p className="text-xs leading-none text-muted-foreground">
                            admin@example.com
                        </p>
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">Mare NajCar</p>
                        <p className="text-xs leading-none text-muted-foreground">
                            admin@example.com
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link href="/" className="w-full">Go to Site</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => auth.logout()}>Log out</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

function AdminAppLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const auth = useAdminAuth();

    if (!auth.isAuthenticated) {
        return <AdminLoginPage />;
    }

    return (
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader>
            <Link href="/admin" className="flex items-center gap-2">
              <LayoutDashboard className="w-6 h-6 text-primary" />
              <span className="font-headline text-lg text-sidebar-foreground">Admin Panel</span>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Dashboard" isActive={pathname === '/admin'}>
                  <Link href="/admin"><Home /><span>Dashboard</span></Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Posts" isActive={pathname.startsWith('/admin/posts')}>
                  <Link href="/admin/posts"><Newspaper /><span>Posts</span></Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <AdminUserMenu />
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:h-[60px] lg:px-6 sticky top-0 z-30">
              <SidebarTrigger />
              <div className="w-full flex-1">
                  {/* Can add search here */}
              </div>
          </header>
          <main className="flex-1 p-4 lg:p-6">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    )
}


export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <AdminAuthProvider>
            <AdminAppLayout>{children}</AdminAppLayout>
        </AdminAuthProvider>
    );
}
