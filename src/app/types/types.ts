export interface Article {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  publishedAt: string;
  readTime?: string;
  content?: string;
  imageUrl?: string;
  source: string;
  sourceLink?: string;
}

export type Params = Record<string, string | number | boolean | undefined>;