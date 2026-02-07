import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { PlusCircle, Eye, Pencil, Trash2 } from "lucide-react";
import { getPosts } from "@/lib/placeholder-data";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


export default async function AdminPostsPage() {
    const posts = await getPosts();
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle>Posts</CardTitle>
                    <CardDescription>Manage your comedy blog posts.</CardDescription>
                </div>
                <Button asChild size="sm" className="gap-1">
                    <Link href="/admin/posts/new">
                        <PlusCircle className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add Post</span>
                    </Link>
                </Button>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead className="hidden md:table-cell">Status</TableHead>
                            <TableHead className="hidden md:table-cell">Created at</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {posts.map(post => (
                            <TableRow key={post.id}>
                                <TableCell className="font-medium max-w-xs truncate">{post.title}</TableCell>
                                <TableCell className="hidden md:table-cell">
                                    {post.featured ? <Badge>Featured</Badge> : <Badge variant="outline">Standard</Badge>}
                                </TableCell>
                                <TableCell className="hidden md:table-cell">
                                    {new Date(post.createdAt).toLocaleDateString()}
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center justify-end gap-2">
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button aria-haspopup="true" size="icon" variant="ghost" asChild>
                                                        <Link href={`/posts/${post.id}`} target="_blank"><Eye className="h-4 w-4" /></Link>
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent><p>View Post</p></TooltipContent>
                                            </Tooltip>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button aria-haspopup="true" size="icon" variant="ghost" asChild>
                                                        <Link href={`/admin/posts/${post.id}/edit`}><Pencil className="h-4 w-4" /></Link>
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent><p>Edit Post</p></TooltipContent>
                                            </Tooltip>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button aria-haspopup="true" size="icon" variant="ghost" className="text-destructive hover:text-destructive">
                                                        <Trash2 className="h-4 w-4" />
                                                        <span className="sr-only">Delete</span>
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent><p>Delete Post</p></TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
