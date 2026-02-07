import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PostCard } from '@/components/blog/PostCard';
import { getFeaturedPosts, getNewestPosts } from '@/lib/placeholder-data';
import { ArrowRight, Lightbulb, Heart, Smile, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default async function HomePage() {
  const newestPosts = await getNewestPosts();
  const featuredPosts = await getFeaturedPosts();

  return (
    <div className="container mx-auto">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Samo Kažem
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          Vaša doza dnevnih inspiracija, zanimljivosti i misli koje pokreću diskusiju.
        </p>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-8">
          Od humora i zabave, preko zanimljivih činjenica, do lokalnih ideja i predloga za bolji život u zajednici.
        </p>
        <Button size="lg" asChild>
          <Link href="/posts">
            Istraži Sadržaj <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </section>

      {/* Content Categories Info */}
      <section className="py-8 mb-8">
        <div className="grid md:grid-cols-4 gap-6">
          <Link href="/posts?category=humor" className="text-center p-6 rounded-lg bg-card border hover:border-primary hover:shadow-lg transition-all">
            <Smile className="h-10 w-10 mx-auto mb-3 text-primary" />
            <h3 className="font-semibold mb-2">Humor</h3>
            <p className="text-sm text-muted-foreground">Teksti koji vas rasveseljavaju</p>
          </Link>
          <Link href="/posts?category=zanimljivosti" className="text-center p-6 rounded-lg bg-card border hover:border-primary hover:shadow-lg transition-all">
            <Sparkles className="h-10 w-10 mx-auto mb-3 text-primary" />
            <h3 className="font-semibold mb-2">Zanimljivosti</h3>
            <p className="text-sm text-muted-foreground">Dnevna znanja i činjenice</p>
          </Link>
          <Link href="/posts?category=ideje" className="text-center p-6 rounded-lg bg-card border hover:border-primary hover:shadow-lg transition-all">
            <Lightbulb className="h-10 w-10 mx-auto mb-3 text-primary" />
            <h3 className="font-semibold mb-2">Ideje</h3>
            <p className="text-sm text-muted-foreground">Predlozi za unapređenje života</p>
          </Link>
          <Link href="/posts?category=zajednica" className="text-center p-6 rounded-lg bg-card border hover:border-primary hover:shadow-lg transition-all">
            <Heart className="h-10 w-10 mx-auto mb-3 text-primary" />
            <h3 className="font-semibold mb-2">Zajednica</h3>
            <p className="text-sm text-muted-foreground">Podsticaji i diskusije</p>
          </Link>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12">
          <h2 className="font-headline text-3xl font-bold mb-8 text-center">Istaknuto</h2>
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
          <h2 className="font-headline text-3xl font-bold">Najnoviji Sadržaj</h2>
          <Button variant="link" asChild>
            <Link href="/posts">
              Sve Objave <ArrowRight className="ml-1 h-4 w-4" />
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
