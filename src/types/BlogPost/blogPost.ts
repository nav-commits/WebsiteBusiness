import type { PortableTextBlock } from '@portabletext/types';

export interface BlogPost {
    content?: PortableTextBlock[];
    _id: string;
    title: string;
    author: string;
    publishedAt: string;
    category: string;
    excerpt: string;
    slug: string;
  }
