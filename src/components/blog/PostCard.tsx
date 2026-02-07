import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, Smile, Sparkles, Lightbulb, Heart as HeartIcon } from 'lucide-react';
import type { Post } from '@/lib/definitions';
import { Badge } from '@/components/ui/badge';

const categoryConfig = {
  humor: { label: 'Humor', icon: Smile, color: 'bg-blue-500/10 text-blue-600 hover:bg-blue-500/20' },
  zanimljivosti: { label: 'Zanimljivosti', icon: Sparkles, color: 'bg-purple-500/10 text-purple-600 hover:bg-purple-500/20' },
  ideje: { label: 'Ideje', icon: Lightbulb, color: 'bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20' },
  zajednica: { label: 'Zajednica', icon: HeartIcon, color: 'bg-pink-500/10 text-pink-600 hover:bg-pink-500/20' },
};

type PostCardProps = {
  post: Post;
  priority?: boolean;
};

export function PostCard({ post, priority = false }: PostCardProps) {
  const categoryInfo = categoryConfig[post.category];
  const CategoryIcon = categoryInfo.icon;

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link href={`/posts/${post.id}`} className="block group flex-grow">
        <CardHeader className="p-0">
          <div className="relative h-56 w-full overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority={priority}
              data-ai-hint={post.imageHint}
            />
            <div className="absolute top-4 right-4 flex gap-2">
              {post.featured && <Badge className="bg-accent text-accent-foreground">Istaknuto</Badge>}
              <Badge className={`flex items-center gap-1 ${categoryInfo.color}`}>
                <CategoryIcon className="h-3 w-3" />
                {categoryInfo.label}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 flex-1">
          <CardTitle className="font-headline text-xl leading-snug mb-2 group-hover:text-primary transition-colors">
            {post.title}
          </CardTitle>
          <p className="text-muted-foreground line-clamp-3 text-sm">
            {post.content}
          </p>
        </CardContent>
      </Link>
      <CardFooter className="p-6 pt-0 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={post.author.avatarUrl} alt={post.author.name} />
            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium leading-none">{post.author.name}</p>
            <p className="text-xs text-muted-foreground">
              {new Date(post.createdAt).toLocaleDateString('sr-RS', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-1">
            <Heart className="h-4 w-4" />
            <span className="text-xs">{post.likes}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
