"use client";

import { useState, useTransition } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function LikeButton({ initialLikes }: { initialLikes: number }) {
  const [isPending, startTransition] = useTransition();
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    // In a real app, this would be a server action.
    startTransition(() => {
        if (isLiked) {
            setLikes(l => l - 1);
        } else {
            setLikes(l => l + 1);
        }
        setIsLiked(l => !l);
    });
  };

  return (
    <Button variant="outline" size="lg" onClick={handleLike} disabled={isPending}>
      <Heart className={cn("mr-2 h-5 w-5 transition-colors", isLiked ? 'fill-accent text-accent' : 'text-muted-foreground')} />
      <span>{likes}</span>
    </Button>
  );
}
