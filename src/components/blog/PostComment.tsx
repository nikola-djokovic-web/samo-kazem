import type { Comment } from '@/lib/definitions';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function PostComment({ comment }: { comment: Comment }) {
  return (
    <div className="flex gap-4 py-6 border-b">
      <Avatar>
        <AvatarImage src={comment.author.avatarUrl} alt={comment.author.name} />
        <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <p className="font-semibold">{comment.author.name}</p>
          <p className="text-xs text-muted-foreground">
            {new Date(comment.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
        <p className="mt-2 text-foreground/90">
          {comment.content}
        </p>
      </div>
    </div>
  );
}
