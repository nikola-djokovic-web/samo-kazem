import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import { ArrowLeft, Upload } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea";

export default function NewPostPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" className="h-7 w-7" asChild>
                    <Link href="/admin/posts">
                        <ArrowLeft className="h-4 w-4" />
                        <span className="sr-only">Back</span>
                    </Link>
                </Button>
                <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                    Create New Post
                </h1>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Post Details</CardTitle>
                    <CardDescription>Fill out the form below to create a new blog post.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                            <div className="lg:col-span-2 space-y-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="title">Title</Label>
                                    <Input id="title" type="text" className="w-full" placeholder="Why did the chicken..." />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="content">Content</Label>
                                    <Textarea id="content" placeholder="The chicken crossed the road..." rows={15} />
                                </div>
                            </div>
                            <div className="lg:col-span-1 space-y-6">
                                <div className="grid gap-3">
                                    <Label>Image</Label>
                                    <Tabs defaultValue="url" className="w-full">
                                        <TabsList className="grid w-full grid-cols-2">
                                            <TabsTrigger value="url">URL</TabsTrigger>
                                            <TabsTrigger value="upload">Upload</TabsTrigger>
                                        </TabsList>
                                        <TabsContent value="url">
                                            <Input id="imageUrl" type="text" placeholder="https://..." />
                                        </TabsContent>
                                        <TabsContent value="upload">
                                            <div className="flex w-full items-center justify-center">
                                                <Label htmlFor="picture" className="flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-background hover:bg-muted">
                                                    <div className="flex flex-col items-center justify-center pb-6 pt-5">
                                                        <Upload className="mb-3 h-8 w-8 text-muted-foreground" />
                                                        <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                        <p className="text-xs text-muted-foreground">SVG, PNG, JPG or GIF</p>
                                                    </div>
                                                    <Input id="picture" type="file" className="hidden" />
                                                </Label>
                                            </div>
                                        </TabsContent>
                                    </Tabs>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Switch id="featured" />
                                    <Label htmlFor="featured">Featured Post</Label>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end gap-2">
                            <Button variant="outline" asChild>
                                <Link href="/admin/posts">Cancel</Link>
                            </Button>
                            <Button type="submit">Save Post</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
