export type Post = {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
    avatarUrl: string;
  };
  createdAt: string;
  featured: boolean;
  likes: number;
  imageUrl: string;
  imageHint: string;
};

export type Comment = {
  id: string;
  postId: string;
  author: {
    name: string;
    avatarUrl: string;
  };
  content: string;
  createdAt: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  favorites: string[]; // array of post IDs
};
