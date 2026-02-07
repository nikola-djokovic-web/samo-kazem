import { PostCard } from '@/components/blog/PostCard';
import { getPosts, getUser } from '@/lib/placeholder-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Heart } from 'lucide-react';

export default async function FavoritesPage() {
  const allPosts = await getPosts();
  // Mock logged in user and their favorites
  const user = await getUser('1');
  const isLoggedIn = !!user;

  if (!isLoggedIn) {
    return (
      <div className="container mx-auto py-20 text-center">
        <Heart className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h1 className="font-headline text-3xl font-bold mb-2">Login to see your favorites</h1>
        <p className="text-muted-foreground mb-6">You need to be logged in to view your saved posts.</p>
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
      </div>
    );
  }

  const favoritePosts = allPosts.filter(post => user.favorites.includes(post.id));

  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
          Your Favorite Funnies
        </h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
          The posts you couldn't resist saving. Good taste!
        </p>
      </div>
      {favoritePosts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favoritePosts.map((post, index) => (
            <PostCard key={post.id} post={post} priority={index < 3} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border-2 border-dashed rounded-lg">
          <h2 className="text-xl font-semibold">No favorites yet!</h2>
          <p className="text-muted-foreground mt-2">Start exploring and save the posts you love.</p>
          <Button asChild className="mt-6">
            <Link href="/posts">Explore Posts</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
