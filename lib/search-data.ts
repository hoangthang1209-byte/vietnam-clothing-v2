import {
    products,
  } from "@/data/products";
  
  import {
    collections,
  } from "@/data/collections";
  
  import {
    blogPosts,
  } from "@/data/blog";
  
  export const searchData = [
  
    ...Object.values(
      products
    ).map(
      (
        product
      ) => ({
  
        type:
          "product",
  
        slug:
          product.slug,
  
        title:
          product.title,
  
        description:
          product.description,
  
        image:
          product.image,
      })
    ),
  
    ...Object.values(
      collections
    ).map(
      (
        collection
      ) => ({
  
        type:
          "collection",
  
        slug:
          collection.slug,
  
        title:
          collection.title,
  
        description:
          collection.description,
  
        image:
          collection.heroImage,
      })
    ),
  
    ...Object.values(
      blogPosts
    ).map(
      (
        post
      ) => ({
  
        type:
          "blog",
  
        slug:
          post.slug,
  
        title:
          post.title,
  
        description:
          post.excerpt,
  
        image:
          post.coverImage,
      })
    ),
  ];