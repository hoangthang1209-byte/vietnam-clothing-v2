import type {
    Product,
  } from "./product";
  
  export type CollectionSection = {
  
    type:
      | "hero"
      | "content"
      | "products"
      | "faq"
      | "cta";
  
    title?:
      string;
  
    content?:
      string;
  };
  
  export type CollectionFaq = {
  
    question:
      string;
  
    answer:
      string;
  };
  
  export type Collection = {
  
    slug:
      string;
  
    title:
      string;
  
    description:
      string;
  
    seoTitle:
      string;
  
    seoDescription:
      string;
  
    heroImage:
      string;
  
    products:
      Product[];
  
    faq?:
      CollectionFaq[];
  
    sections:
      CollectionSection[];
  };