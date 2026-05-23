import type {
  MetadataRoute,
} from "next";

import {
  getProducts,
} from "@/lib/getProducts";

export default async function sitemap():
Promise<MetadataRoute.Sitemap> {

  const products =
    await getProducts();

  const productUrls =
    products.map(
      (
        product: any
      ) => ({

        url:
          `https://vietnamclothing.com/en/products/${product.slug}`,

        lastModified:
          new Date(),

        changeFrequency:
          "weekly" as const,

        priority:
          0.8,
      })
    );

  return [

    {
      url:
        "https://vietnamclothing.com/en",

      lastModified:
        new Date(),

      changeFrequency:
        "weekly",

      priority:
        1,
    },

    {
      url:
        "https://vietnamclothing.com/en/products",

      lastModified:
        new Date(),

      changeFrequency:
        "weekly",

      priority:
        0.9,
    },

    {
      url:
        "https://vietnamclothing.com/en/about",

      lastModified:
        new Date(),

      changeFrequency:
        "monthly",

      priority:
        0.7,
    },

    {
      url:
        "https://vietnamclothing.com/en/contact",

      lastModified:
        new Date(),

      changeFrequency:
        "monthly",

      priority:
        0.7,
    },

    ...productUrls,
  ];
}