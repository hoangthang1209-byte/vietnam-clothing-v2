import type {
    MetadataRoute,
  } from "next";
  
  import {
    products,
  } from "@/data/products";
  
  import {
    collections,
  } from "@/data/collections";
  
  import {
    blogPosts,
  } from "@/data/blog";
  
  const BASE_URL =
    "https://vietnamclothing.com";
  
  export default function sitemap():
    MetadataRoute.Sitemap {
  
    const productUrls =
      Object.values(
        products
      ).map(
        (
          product
        ) => ({
  
          url:
            `${BASE_URL}/en/products/${product.slug}`,
  
          lastModified:
            new Date(),
        })
      );
  
    const collectionUrls =
      Object.values(
        collections
      ).map(
        (
          collection
        ) => ({
  
          url:
            `${BASE_URL}/en/collections/${collection.slug}`,
  
          lastModified:
            new Date(),
        })
      );
  
    const blogUrls =
      Object.values(
        blogPosts
      ).map(
        (
          post
        ) => ({
  
          url:
            `${BASE_URL}/en/blog/${post.slug}`,
  
          lastModified:
            new Date(
              post.publishedAt
            ),
        })
      );
  
    return [
  
      {
        url:
          `${BASE_URL}/en`,
  
        lastModified:
          new Date(),
      },
  
      {
        url:
          `${BASE_URL}/en/blog`,
  
        lastModified:
          new Date(),
      },
  
      {
        url:
          `${BASE_URL}/en/collections`,
  
        lastModified:
          new Date(),
      },
  
      ...productUrls,
  
      ...collectionUrls,
  
      ...blogUrls,
    ];
  }