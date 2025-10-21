export interface Article {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  publishedAt: string;
  readTime?: string;
  imageUrl?: string;
  source: string;
  sourceLink?: string;
  tags?: string[];
  views?: number;
}

export type Params = Record<string, string | number | boolean | undefined>;

export type Newspaper = {
  id: string;
  name: string;
  headline: string;
  imageUrl: string;
  link: string;
  date: string;
};
