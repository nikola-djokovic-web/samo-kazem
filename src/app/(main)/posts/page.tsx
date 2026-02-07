import { PostCard } from '@/components/blog/PostCard';
import { getPosts } from '@/lib/placeholder-data';
import { Separator } from '@/components/ui/separator';

export default async function AllPostsPage() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
          The Comedy Archive
        </h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
          Every joke, every story, every poorly-advised life decision we've shared. Dive in.
        </p>
      </div>
      <Separator className="mb-12" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <PostCard key={post.id} post={post} priority={index < 6} />
        ))}
      </div>
    </div>
  );
}
