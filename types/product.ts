export type ProductSection = {

    type:
      | "hero"
      | "stats"
      | "features"
      | "content"
      | "specs"
      | "faq"
      | "oem"
      | "cta";
  
    variant?: string;
  
    theme?: string;
  
    enabled?: boolean;
  };
  
  export type ProductSpecification = {
  
    label: string;
  
    value: string;
  };
  
  export type ProductFaq = {
  
    question: string;
  
    answer: string;
  };
  
  export type ProductCTA = {
  
    title: string;
  
    description: string;
  
    button: string;
  };
  
  export type ContentBlock = {
  
    type:
      | "heading"
      | "paragraph"
      | "image"
      | "quote"
      | "checklist"
      | "stats"
      | "gallery"
      | "cta";
  
    content?: string;
  
    image?: string;
  
    variant?: string;
  
    theme?: string;
  
    items?: string[];
  
    stats?: {
      label: string;
      value: string;
    }[];
  
    images?: string[];
  
    button?: string;
  
    link?: string;
  };
  
  export type Product = {
  
    slug: string;
  
    category: string;
  
    title: string;
  
    seoTitle: string;
  
    seoDescription: string;
  
    keywords: string[];
  
    description: string;
  
    image: string;
  
    gallery: string[];
  
    sections:
      ProductSection[];
  
    features: string[];
  
    materials: string[];
  
    specifications:
      ProductSpecification[];
  
    faq:
      ProductFaq[];
  
    cta:
      ProductCTA;
  
    contentBlocks?:
      ContentBlock[];
  };
  
  export type CollectionSection = {
  
    type:
      | "hero"
      | "products"
      | "cta";
  
    variant?: string;
  
    theme?: string;
  
    enabled?: boolean;
  };
  
  export type Collection = {
  
    title: string;
  
    seoTitle: string;
  
    seoDescription: string;
  
    description: string;
  
    heroImage: string;
  
    products: string[];
  
    sections:
      CollectionSection[];
  };
  
  export type ProductSectionProps = {
  
    product: Product;
  
    section?: ProductSection;
  };
  
  export type CollectionSectionProps = {
  
    collection: Collection;
  
    section?: CollectionSection;
  };