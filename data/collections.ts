import type {
  Collection,
} from "@/types/collection";

import {
  products,
} from "./products";

export const collections:
  Record<
    string,
    Collection
  > = {

  streetwear: {

    slug:
      "streetwear",

    title:
      "Streetwear Manufacturing",

    description:
      "Premium OEM & ODM streetwear manufacturing solutions including oversized apparel, hoodies and fashion essentials.",

    seoTitle:
      "Streetwear Manufacturing | Vietnam Clothing",

    seoDescription:
      "OEM & ODM streetwear manufacturing partner in Vietnam.",

    heroImage:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=2000&auto=format&fit=crop",

    products: [

      products[
        "oversized-t-shirt"
      ],

      products[
        "heavyweight-hoodie"
      ],
    ],

    faq: [

      {
        question:
          "What is your MOQ?",

        answer:
          "Our MOQ depends on the apparel category and customization requirements.",
      },

      {
        question:
          "Do you provide OEM & ODM services?",

        answer:
          "Yes. Vietnam Clothing provides full OEM & ODM apparel manufacturing solutions.",
      },

      {
        question:
          "Can you help with sampling?",

        answer:
          "Yes. We provide product sampling and development before bulk production.",
      },
    ],

    sections: [

      {
        type:
          "hero",
      },

      {
        type:
          "products",
      },

      {
        type:
          "faq",
      },

      {
        type:
          "cta",
      },
    ],
  },

  corporate: {

    slug:
      "corporate",

    title:
      "Corporate Uniform Manufacturing",

    description:
      "OEM corporate uniform manufacturing for companies, hotels, retail brands and enterprises.",

    seoTitle:
      "Corporate Uniform Manufacturing | Vietnam Clothing",

    seoDescription:
      "Premium corporate uniform manufacturing partner in Vietnam.",

    heroImage:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2000&auto=format&fit=crop",

    products: [

      products[
        "corporate-polo-shirt"
      ],
    ],

    faq: [

      {
        question:
          "Do you manufacture uniforms for enterprises?",

        answer:
          "Yes. We manufacture uniforms for corporations, hospitality groups and retail chains.",
      },

      {
        question:
          "Can you customize logos and branding?",

        answer:
          "Yes. We provide embroidery, printing and custom branding solutions.",
      },
    ],

    sections: [

      {
        type:
          "hero",
      },

      {
        type:
          "products",
      },

      {
        type:
          "faq",
      },

      {
        type:
          "cta",
      },
    ],
  },
};