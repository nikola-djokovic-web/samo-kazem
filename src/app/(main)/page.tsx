import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PostCard } from '@/components/blog/PostCard';
import { getFeaturedPosts, getNewestPosts } from '@/lib/placeholder-data';
import { ArrowRight } from 'lucide-react';

export default async function HomePage() {
  const newestPosts = await getNewestPosts();
  const featuredPosts = await getFeaturedPosts();

  return (
    <div className="container mx-auto">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Life is better when you're laughing.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Welcome to <span className="font-bold text-primary">Samo Kažem</span>, your daily dose of comedy. Freshly brewed texts to make you smile, chuckle, or even LOL.
        </p>
        <Button size="lg" asChild>
          <Link href="/posts">
            Explore All Posts <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12">
          <h2 className="font-headline text-3xl font-bold mb-8 text-center">Featured Funnies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <PostCard key={post.id} post={post} priority={index < 2} />
            ))}
          </div>
        </section>
      )}

      {/* Newest Posts */}
      <section className="py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-headline text-3xl font-bold">Fresh Off the Keyboard</h2>
          <Button variant="link" asChild>
            <Link href="/posts">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {newestPosts.map((post, index) => (
            <PostCard key={post.id} post={post} priority={index < 3} />
          ))}
        </div>
      </section>
    </div>
  );
}
