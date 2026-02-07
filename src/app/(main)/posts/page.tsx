import { PostCard } from '@/components/blog/PostCard';
import { getPosts, getPostsByCategory } from '@/lib/placeholder-data';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Smile, Sparkles, Lightbulb, Heart } from 'lucide-react';

const categoryConfig = {
  humor: {
    title: 'Humor',
    description: 'Tekstovi koji vas razveseljavaju',
    icon: Smile,
  },
  zanimljivosti: {
    title: 'Zanimljivosti',
    description: 'Dnevna znanja i činjenice',
    icon: Sparkles,
  },
  ideje: {
    title: 'Ideje',
    description: 'Predlozi za unapređenje života',
    icon: Lightbulb,
  },
  zajednica: {
    title: 'Zajednica',
    description: 'Podsticaji i diskusije',
    icon: Heart,
  },
};

export default async function AllPostsPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const category = searchParams.category;
  const posts = category 
    ? await getPostsByCategory(category)
    : await getPosts();

  const categoryInfo = category && categoryConfig[category as keyof typeof categoryConfig];
  const Icon = categoryInfo?.icon;

  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        {categoryInfo ? (
          <>
            <div className="flex items-center justify-center gap-3 mb-4">
              {Icon && <Icon className="h-12 w-12 text-primary" />}
              <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
                {categoryInfo.title}
              </h1>
            </div>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              {categoryInfo.description}
            </p>
            <Link 
              href="/posts" 
              className="text-sm text-muted-foreground hover:text-primary mt-4 inline-block"
            >
              ← Nazad na sve objave
            </Link>
          </>
        ) : (
          <>
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
              Sve Objave
            </h1>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Istraži sve teme - od humora i zanimljivosti do ideja za bolji život.
            </p>
          </>
        )}
      </div>

      {!category && (
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          <Link href="/posts?category=humor">
            <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              Humor
            </Badge>
          </Link>
          <Link href="/posts?category=zanimljivosti">
            <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              Zanimljivosti
            </Badge>
          </Link>
          <Link href="/posts?category=ideje">
            <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              Ideje
            </Badge>
          </Link>
          <Link href="/posts?category=zajednica">
            <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              Zajednica
            </Badge>
          </Link>
        </div>
      )}

      <Separator className="mb-12" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <PostCard key={post.id} post={post} priority={index < 6} />
        ))}
      </div>
    </div>
  );
}
