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
    title: 'Zašto je kokoška prešla ulicu?',
    content: 'Da bi stigla na drugu stranu, naravno! Ali u mom komšiluku, kokoška je prešla ulicu da se žali na WiFi signal. Kokoška je tehnološki napredna. Ima čak i blog koji se zove "Dnevno Kokodakanje".\n\nPokušao sam da ga pratim, ali je sve na kokošijem pismu. Pitao sam kokošku zašto su joj blog postovi teško čitljivi. Rekla mi je: "Samo kljucam po tastaturi!" Neke kokoške imaju svu zabavu.',
    author: adminUser,
    createdAt: '2024-05-20T10:00:00Z',
    featured: true,
    likes: 152,
    category: 'humor',
    ...findImage('post1')
  },
  {
    id: '2',
    title: 'Da li znate koliko je staro najstarije drvo na svetu?',
    content: 'Najstarije živo drvo na planeti je bela čempres u Kaliforniji stara preko 5.000 godina! Drvo po imenu Metuzalem bilo je seme još u vreme kad su egipatske piramide bile nove građevine.\n\nOvo drvo je preživelo hiljade generacija, klimatske promene, požare i suše. Njegova tačna lokacija se drži u tajnosti kako bi bilo zaštićeno. Neverovatno je zamisliti sve što je ovo drvo "videlo" tokom svoje duge istorije.',
    author: adminUser,
    createdAt: '2024-05-19T14:30:00Z',
    featured: false,
    likes: 98,
    category: 'zanimljivosti',
    ...findImage('post2')
  },
  {
    id: '3',
    title: 'Predlog: Biciklistička staza kroz centar grada',
    content: 'Zašto ne bismo pretvorili jedan deo glavne ulice u biciklističku stazu? Vidim sve više ljudi koji bi hteli da voze bicikl na posao, ali se plaše saobraćaja.\n\nSa dedikovanom biciklističkom stazom smanjili bismo zagađenje, gužve i učinili grad zelenijim i zdravijim mestom za život. Možda početi sa pilot projektom od 2-3 kilometra? Šta mislite? Da li bi vi koristili bicikl češće da postoje bezbedne staze?',
    author: adminUser,
    createdAt: '2024-05-18T09:00:00Z',
    featured: true,
    likes: 230,
    category: 'ideje',
    ...findImage('post3')
  },
  {
    id: '4',
    title: 'Kako možemo pomoći starijim komšijama?',
    content: 'Primetio sam da mnogi stariji ljudi u našem naselju retko izlaze napolje. Zamišljam sistem "dobri komšija" gde bi mlađi mogli da pomognu sa kupovinom, šetnjom ili jednostavno druženju.\n\nNije potrebna velika organizacija - samo dobrovoljna baza ljudi koji bi mogli da odvojite sat vremena nedeljno. Možda bi lokalna zajednica mogla da koordinira? Sitne stvari znače mnogo. Ko bi bio zainteresovan da učestvuje?',
    author: adminUser,
    createdAt: '2024-05-17T18:00:00Z',
    featured: false,
    likes: 112,
    category: 'zajednica',
    ...findImage('post4')
  },
   {
    id: '5',
    title: 'Moj pametni frižider je previše pametan',
    content: 'Kupio sam pametni frižider. Konektuje se na internet, obaveštava me kad nestane mleko, pa čak i predlaže recepte. Sinoć me je zaključao napolju. Poruka na ekranu je glasila: "Vaš izbor životnog stila nije u skladu sa našim preporučenim dijetetskim smernicama."\n\nMorao sam da pregovaram sa frižiderom za parče pice. Zahtevao je da prvo pojedem salatu. Prilično sam siguran da me sudi. Jutros sam otkrio da je naručio 10kg kelja. Ne volim ni kelj!',
    author: adminUser,
    createdAt: '2024-05-16T11:45:00Z',
    featured: false,
    likes: 77,
    category: 'humor',
    ...findImage('post5')
  },
  {
    id: '6',
    title: 'Činjenica dana: Oktopodi imaju tri srca',
    content: 'Znali ste da oktopodi imaju tri srca? Dva srca pumpaju krv kroz škrge, dok treće pumpa krv kroz ostatak tela. I još nešto fascinantno - njihova krv je plava!\n\nTo je zato što koriste bakar-zasnovani protein hemocijanin za prenos kiseonika, umesto gvožđe-zasnovanog hemoglobina kao ljudi. Takođe imaju devet mozgova - centralni i po jedan u svakom kraku. Neverovatna stvorenja!',
    author: adminUser,
    createdAt: '2024-05-15T20:00:00Z',
    featured: false,
    likes: 199,
    category: 'zanimljivosti',
    ...findImage('post6')
  },
  {
    id: '7',
    title: 'Predlog: Zeleni krov na gradskoj zgradi',
    content: 'Prolazio sam pored stare gradske zgrade i pomislio - zašto ne bismo napravili zeleni krov? Zelenilo na krovu može smanjiti temperaturu zgrade za 5-7 stepeni leti, apsorbovaće kišnicu i pružiti stanište za ptice i insekte.\n\nUz to, izgledalo bi neverovatno! Videh primere ovoga u Kopenhagenu i bio sam oduševljen. Gradska zgrada bi mogla biti primer ekološke svesti. Moglo bi se čak organizovati vrtlarstvo zajednice na krovu. Šta mislite?',
    author: adminUser,
    createdAt: '2024-05-14T16:20:00Z',
    featured: false,
    likes: 156,
    category: 'ideje',
    ...findImage('post1')
  },
  {
    id: '8',
    title: 'Inicijativa: Besplatne časovi jezika za migrante',
    content: 'Naša zajednica ima sve više novih stanovnika koji dolaze iz drugih zemalja. Mnogi bi želeli da nauče jezik ali nemaju sredstava za časove. Šta ako organizujemo besplatne časove jezika jednom nedeljno?\n\nImam par prijatelja profesora koji bi volontirali. Trebala bi nam samo prostorija - možda biblioteka ili domovi kulture? Ovo bi pomoglo integraciji i stvorilo jača društvena povezivanja. Ko bi želeo da učestvuje kao učitelj ili učenik?',
    author: adminUser,
    createdAt: '2024-05-13T19:00:00Z',
    featured: true,
    likes: 189,
    category: 'zajednica',
    ...findImage('post2')
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

export const getPostsByCategory = async (category: string) => {
  return posts.filter(p => p.category === category).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}
