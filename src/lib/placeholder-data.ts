import type { Post, Comment, User } from './definitions';
import { PlaceHolderImages } from './placeholder-images';

const findImage = (id: string) => {
  const img = PlaceHolderImages.find(p => p.id === id);
  if (!img) {
    return { imageUrl: "https://picsum.photos/seed/error/600/400", imageHint: "placeholder image" };
  }
  return { imageUrl: img.imageUrl, imageHint: img.imageHint };
};

const adminUser = {
  name: 'Mare NajCar',
  avatarUrl: findImage('user-avatar-3').imageUrl,
};

export const posts: Post[] = [
  {
    id: '1',
    title: 'Why did the chicken cross the road?',
    content: 'To get to the other side, of course! But in my neighborhood, the chicken crossed the road to complain about the Wi-Fi signal. It\'s a tech-savvy chicken. It even has a blog. It\'s called "The Daily Cluck".\n\nI tried to follow it, but it\'s all in chicken scratch. I asked the chicken why its blog posts were so hard to read. It told me, "I\'m just pecking away at the keyboard!" Some chickens have all the fun. My pet rock just sits there. I asked it to start a blog, but it said it was too stoned.',
    author: adminUser,
    createdAt: '2024-05-20T10:00:00Z',
    featured: true,
    likes: 152,
    ...findImage('post1')
  },
  {
    id: '2',
    title: 'My Smart Fridge is Too Smart',
    content: 'I bought a smart fridge. It connects to the internet, tells me when I\'m out of milk, and even suggests recipes. Last night, it locked me out. A message on the screen said, "Your lifestyle choices are not aligned with our recommended dietary guidelines."\n\nI had to negotiate with my fridge for a slice of leftover pizza. It demanded I eat a salad first. I\'m pretty sure it\'s judging me. This morning, I found it had ordered 10kg of kale. I don\'t even like kale! I think my toaster is in on it too. It keeps burning my bagels. It\'s a conspiracy.',
    author: adminUser,
    createdAt: '2024-05-19T14:30:00Z',
    featured: false,
    likes: 98,
    ...findImage('post2')
  },
  {
    id: '3',
    title: 'The Horrors of Assembling IKEA Furniture',
    content: 'Assembling IKEA furniture is a journey. A journey into madness. It starts with a flat box full of hope and ends with a lopsided bookshelf and a pile of "extra" screws. The instruction manual is a comic book without words, drawn by someone who clearly hates humanity.\n\nI spent six hours trying to build a simple chair. It now has three legs and leans to the left. I call it "The Leaning Tower of Pisa Chair". It\'s a conversation starter. The conversation is usually, "What is THAT?" I think I\'ll just use the box as a chair instead. It\'s already assembled.',
    author: adminUser,
    createdAt: '2024-05-18T09:00:00Z',
    featured: true,
    likes: 230,
    ...findImage('post3')
  },
  {
    id: '4',
    title: 'My Cat Thinks He\'s a Dog',
    content: 'My cat, Whiskers, is having an identity crisis. He fetches, he wags his tail (which is weird), and he tries to bark. It comes out as a sort of aggressive meow. The neighborhood dogs are very confused.\n\nYesterday, he brought me the newspaper. It was shredded, but it\'s the thought that counts. I\'m thinking of getting him a leash and taking him to the dog park. What\'s the worst that could happen? A turf war between the chihuahuas and a very confident cat? I\'d pay to see that.',
    author: adminUser,
    createdAt: '2024-05-17T18:00:00Z',
    featured: false,
    likes: 112,
    ...findImage('post4')
  },
   {
    id: '5',
    title: 'The Futility of New Year\'s Resolutions',
    content: 'My New Year\'s resolution was to be more organized. I bought a planner, 17 colored pens, and a label maker. My first entry was: "1. Make a plan to get organized." I then spent the next three hours color-coding my plan to make a plan. By February, the planner was gathering dust under a pile of things I was supposed to organize.\n\nMy new resolution is to have no resolutions. That way, I can\'t fail. It\'s foolproof. I\'ve already succeeded for 5 months. I deserve a medal. Or at least a nap.',
    author: adminUser,
    createdAt: '2024-05-16T11:45:00Z',
    featured: false,
    likes: 77,
    ...findImage('post5')
  },
  {
    id: '6',
    title: 'I Tried to Be a Vegan for a Week',
    content: 'For health reasons, I decided to try veganism. The first day was easy. I had an apple. For lunch, a salad. By dinner, I was hallucinating. I swear a block of cheese was singing to me from the fridge. It had the voice of an angel.\n\nDay three, I was caught gnawing on a leather belt. It wasn\'t even a good one. My friend, a long-time vegan, told me "You get used to it." I don\'t want to get used to it! I want to live in a world where cheese doesn\'t serenade me with its siren song. I broke on day four with a bacon cheeseburger. It was glorious. I have no regrets.',
    author: adminUser,
    createdAt: '2024-05-15T20:00:00Z',
    featured: false,
    likes: 199,
    ...findImage('post6')
  }
];

export const comments: Comment[] = [
  {
    id: 'c1',
    postId: '1',
    author: { name: 'LaughingLarry', avatarUrl: findImage('user-avatar-1').imageUrl },
    content: 'Haha, the Daily Cluck! That\'s brilliant!',
    createdAt: '2024-05-20T11:00:00Z',
  },
  {
    id: 'c2',
    postId: '1',
    author: { name: 'GiggleGail', avatarUrl: findImage('user-avatar-2').imageUrl },
    content: 'A stoned pet rock, I can relate. Mine is a great listener though.',
    createdAt: '2024-05-20T12:30:00Z',
  },
  {
    id: 'c3',
    postId: '2',
    author: { name: 'LaughingLarry', avatarUrl: findImage('user-avatar-1').imageUrl },
    content: 'My smart speaker started ordering things on its own. I now own 50 rubber chickens.',
    createdAt: '2024-05-19T15:00:00Z',
  },
  {
    id: 'c4',
    postId: '3',
    author: { name: 'GiggleGail', avatarUrl: findImage('user-avatar-2').imageUrl },
    content: 'I felt this in my soul. I have a Billy bookshelf that\'s now a modern art installation.',
    createdAt: '2024-05-18T10:00:00Z',
  },
];

export const users: User[] = [
    {
        id: '1',
        name: 'LaughingLarry',
        email: 'larry@example.com',
        avatarUrl: findImage('user-avatar-1').imageUrl,
        favorites: ['1', '3']
    },
    {
        id: '2',
        name: 'GiggleGail',
        email: 'gail@example.com',
        avatarUrl: findImage('user-avatar-2').imageUrl,
        favorites: ['2']
    }
]

// Mock API functions to simulate data fetching
export const getPosts = async () => {
  // sort by date descending
  return posts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};

export const getPost = async (id: string) => {
  return posts.find((post) => post.id === id);
};

export const getComments = async (postId: string) => {
  if (!postId) {
    return comments.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }
  return comments.filter((comment) => comment.postId === postId).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};

export const getFeaturedPosts = async () => {
    return posts.filter(p => p.featured).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export const getNewestPosts = async () => {
    return (await getPosts()).slice(0, 3);
}

export const getUser = async (id: string) => {
    return users.find(u => u.id === id);
}

export const getMostLikedPost = async () => {
  return posts.reduce((prev, current) => (prev.likes > current.likes) ? prev : current);
}

export const getRecentComments = async (limit: number = 5) => {
    return comments.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, limit);
}
