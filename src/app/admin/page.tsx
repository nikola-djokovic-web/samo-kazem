import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { getComments, getPosts, getMostLikedPost, getRecentComments } from "@/lib/placeholder-data";
import { Newspaper, MessageCircle, Heart, Users, BarChart, TrendingUp, Eye } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default async function AdminDashboardPage() {
    const posts = await getPosts();
    const allComments = await getComments('');
    const totalLikes = posts.reduce((acc, post) => acc + post.likes, 0);
    const mostLikedPost = await getMostLikedPost();
    const recentComments = await getRecentComments(5);
    const totalUsers = 2; // Mock data
    const dailyViews = 1250; // Mock data
    const monthlyViews = 32800; // Mock data

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold mb-6 font-headline">Dashboard</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
                        <Newspaper className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{posts.length}</div>
                        <p className="text-xs text-muted-foreground">
                            posts currently published
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Comments</CardTitle>
                        <MessageCircle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{allComments.length}</div>
                        <p className="text-xs text-muted-foreground">
                            across all posts
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Likes</CardTitle>
                        <Heart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{totalLikes.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground">
                            cumulative likes on all posts
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+{totalUsers}</div>
                        <p className="text-xs text-muted-foreground">
                            mocked user data
                        </p>
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="lg:col-span-4">
                    <CardHeader>
                        <CardTitle>Recent Comments</CardTitle>
                        <CardDescription>The latest thoughts from your readers.</CardDescription>
                    </CardHeader>
                    <CardContent>
                         <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Author</TableHead>
                                    <TableHead>Comment</TableHead>
                                    <TableHead className="text-right">Post</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {recentComments.map(comment => (
                                    <TableRow key={comment.id}>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <Avatar className="h-6 w-6">
                                                    <AvatarImage src={comment.author.avatarUrl} />
                                                    <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
                                                </Avatar>
                                                <span className="text-xs font-medium">{comment.author.name}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-xs text-muted-foreground max-w-xs truncate">{comment.content}</TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="icon" asChild>
                                                <Link href={`/posts/${comment.postId}`} target="_blank">
                                                    <Eye className="h-4 w-4" />
                                                </Link>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                         </Table>
                    </CardContent>
                </Card>
                <Card className="lg:col-span-3">
                     <CardHeader>
                        <CardTitle>Top Content & Stats</CardTitle>
                        <CardDescription>Your highest performing content and traffic.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-muted-foreground">Most Liked Post</p>
                            <div className="flex items-center gap-2">
                                <Link href={`/posts/${mostLikedPost.id}`} className="text-sm font-bold hover:underline" target="_blank">{mostLikedPost.title}</Link>
                                <Badge variant="destructive" className="flex items-center gap-1">
                                    <Heart className="h-3 w-3" />
                                    {mostLikedPost.likes}
                                </Badge>
                            </div>
                        </div>
                         <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-muted-foreground flex items-center gap-2"><BarChart className="h-4 w-4" /> Daily Views</p>
                            <p className="text-sm font-bold">{dailyViews.toLocaleString()}</p>
                        </div>
                         <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-muted-foreground flex items-center gap-2"><TrendingUp className="h-4 w-4" /> Monthly Views</p>
                            <p className="text-sm font-bold">{monthlyViews.toLocaleString()}</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
