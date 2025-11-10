export interface IArticle {
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

