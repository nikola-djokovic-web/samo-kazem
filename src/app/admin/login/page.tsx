"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useAdminAuth } from "@/components/admin/AdminAuthProvider";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  const auth = useAdminAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth.login(username, password)) {
        toast({
            variant: "destructive",
            title: "Login Failed",
            description: "Invalid credentials. Use admin/admin to login.",
        });
    } else {
         toast({ title: "Login Successful", description: "Welcome back!" });
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background p-4">
        <form onSubmit={handleLogin}>
            <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl font-headline">Admin Login</CardTitle>
                <CardDescription>
                Enter your credentials to access the admin panel.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                    id="username"
                    type="text"
                    placeholder="admin"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                </div>
                <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                    id="password"
                    type="password"
                    placeholder="admin"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full" type="submit">
                Sign in
                </Button>
            </CardFooter>
            </Card>
        </form>
    </div>
  );
}
