"use client";

import { useState, useTransition } from 'react';
import { Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function FavoriteButton({ isInitiallyFavorited }: { isInitiallyFavorited: boolean }) {
  const [isPending, startTransition] = useTransition();
  const [isFavorited, setIsFavorited] = useState(isInitiallyFavorited);

  const handleFavorite = () => {
    // In a real app, this would be a server action to update user's favorites
    startTransition(() => {
        setIsFavorited(f => !f);
    });
  };

  return (
    <Button variant="outline" size="lg" onClick={handleFavorite} disabled={isPending} aria-label="Save to favorites">
      <Bookmark className={cn("mr-2 h-5 w-5 transition-colors", isFavorited ? 'fill-primary text-primary' : 'text-muted-foreground')} />
      <span>{isFavorited ? 'Saved' : 'Save'}</span>
    </Button>
  );
}
