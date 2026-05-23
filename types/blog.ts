import type {
    ContentBlock,
  } from "./product";
  
  export type BlogPost = {
  
    slug: string;
  
    title: string;
  
    excerpt: string;
  
    seoTitle: string;
  
    seoDescription: string;
  
    coverImage: string;
  
    category: string;
  
    publishedAt: string;
  
    author: string;
  
    tags: string[];
  
    content:
      ContentBlock[];
  };