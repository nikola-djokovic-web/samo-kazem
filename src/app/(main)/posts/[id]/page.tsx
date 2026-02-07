import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPost, getComments, getUser } from '@/lib/placeholder-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { LikeButton } from '@/components/blog/LikeButton';
import { FavoriteButton } from '@/components/blog/FavoriteButton';
import { PostComment } from '@/components/blog/PostComment';
import { CommentForm } from '@/components/blog/CommentForm';
import { Clock } from 'lucide-react';

const renderContent = (paragraph: string) => {
    const parts = paragraph.split(/(\*\*.*?\*\*|\*.*?\*)/g);
    return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('*') && part.endsWith('*')) {
            return <em key={i}>{part.slice(1, -1)}</em>;
        }
        return part;
    });
};

export default async function SinglePostPage({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);
  
  if (!post) {
    notFound();
  }
  
  const comments = await getComments(params.id);
  // Mock logged in user to check for favorites
  const user = await getUser('1'); 
  const isFavorited = user?.favorites.includes(post.id) ?? false;

  return (
    <article className="container max-w-4xl mx-auto py-8 md:py-16">
      <header className="mb-8">
        {post.featured && (
          <Badge className="mb-4 bg-accent text-accent-foreground">Featured</Badge>
        )}
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground text-sm">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={post.author.avatarUrl} alt={post.author.name} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span>{post.author.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <time dateTime={post.createdAt}>
              {new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
          </div>
        </div>
      </header>

      <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8 shadow-lg">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover"
          priority
          data-ai-hint={post.imageHint}
        />
      </div>

      <div className="space-y-6 text-lg text-foreground/90 font-body leading-relaxed mb-12">
        {post.content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{renderContent(paragraph)}</p>
        ))}
      </div>

      <div className="flex items-center gap-4 mb-12">
        <LikeButton initialLikes={post.likes} />
        <FavoriteButton isInitiallyFavorited={isFavorited} />
      </div>

      <Separator className="mb-12" />

      <section className="space-y-8">
        <h2 className="font-headline text-3xl font-bold">Comments ({comments.length})</h2>
        {/* For now, comment form is open for guests. In a real app, you would check for authentication. */}
        <CommentForm postId={post.id} />
        
        <div className="space-y-6">
            {comments.length > 0 ? (
                comments.map((comment) => (
                    <PostComment key={comment.id} comment={comment} />
                ))
            ) : (
                <div className="border-2 border-dashed rounded-lg py-12">
                    <p className="text-muted-foreground text-center">No comments yet. Be the first to share your thoughts!</p>
                </div>
            )}
        </div>
      </section>
    </article>
  );
}
