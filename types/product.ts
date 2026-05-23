export type ProductSpecification = {

  label: string;

  value: string;
};

export type ProductFAQ = {

  question: string;

  answer: string;
};

export type Product = {

  slug: string;

  title: string;

  category: string;

  description: string;

  image: string;

  gallery: string[];

  features: string[];

  specifications: ProductSpecification[];

  faq: ProductFAQ[];

  seoTitle?: string;

  seoDescription?: string;
};