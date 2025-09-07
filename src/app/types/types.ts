export interface Article {
  id: string;
  title: string;
  category: string;
  description: string;
  author: string;
  publishedAt: string;
  readTime: string;
  content: string;
  imageUrl?: string;
  source?: string;
  sourceLink?: string;
}

export type Params = Record<string, string | number | boolean | undefined>;