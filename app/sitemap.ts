import type {
  MetadataRoute,
} from "next";

export default function sitemap():
MetadataRoute.Sitemap {

  const baseUrl =
    "https://vietnamclothing.com";

  return [

    {
      url:
        `${baseUrl}/en`,

      lastModified:
        new Date(),

      changeFrequency:
        "weekly",

      priority:
        1,
    },

    {
      url:
        `${baseUrl}/en/products`,

      lastModified:
        new Date(),

      changeFrequency:
        "weekly",

      priority:
        0.9,
    },

    {
      url:
        `${baseUrl}/en/factory`,

      lastModified:
        new Date(),

      changeFrequency:
        "monthly",

      priority:
        0.8,
    },

    {
      url:
        `${baseUrl}/en/about`,

      lastModified:
        new Date(),

      changeFrequency:
        "monthly",

      priority:
        0.7,
    },

    {
      url:
        `${baseUrl}/en/contact`,

      lastModified:
        new Date(),

      changeFrequency:
        "monthly",

      priority:
        0.7,
    },
  ];
}