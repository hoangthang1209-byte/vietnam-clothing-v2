import type {
  Product,
} from "@/types/product";

export const products:
  Record<string, Product> = {

  "t-shirts": {

    slug:
      "t-shirts",

    title:
      "Premium T-Shirts",

    category:
      "Apparel Manufacturing",

    description:
      "Premium OEM & ODM t-shirt manufacturing solutions for fashion brands, uniforms and merchandise projects worldwide.",

    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1600&auto=format&fit=crop",

    gallery: [

      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1600&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1600&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1600&auto=format&fit=crop",
    ],

    features: [

      "Premium Cotton Fabrics",

      "OEM & ODM Manufacturing",

      "Silkscreen & DTG Printing",

      "Global Export Standards",

      "Custom Packaging Solutions",
    ],

    specifications: [

      {
        label:
          "MOQ",

        value:
          "100 pcs",
      },

      {
        label:
          "Lead Time",

        value:
          "7 - 14 Days",
      },

      {
        label:
          "Material",

        value:
          "100% Cotton",
      },

      {
        label:
          "Printing",

        value:
          "Screen / DTG / Embroidery",
      },
    ],

    faq: [

      {
        question:
          "What is the minimum order quantity?",

        answer:
          "Our MOQ starts from 100 pieces depending on product specifications.",
      },

      {
        question:
          "Do you provide OEM manufacturing?",

        answer:
          "Yes. We provide full OEM & ODM apparel manufacturing services.",
      },

      {
        question:
          "Can you export internationally?",

        answer:
          "Yes. We export apparel products worldwide.",
      },
    ],

    seoTitle:
      "Premium T-Shirt Manufacturing Vietnam",

    seoDescription:
      "OEM & ODM premium t-shirt manufacturing solutions from Vietnam Clothing.",
  },

  "hoodies": {

    slug:
      "hoodies",

    title:
      "Custom Hoodies",

    category:
      "OEM Manufacturing",

    description:
      "Premium hoodie manufacturing for fashion brands and merchandise collections.",

    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1600&auto=format&fit=crop",

    gallery: [

      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1600&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600&auto=format&fit=crop",
    ],

    features: [

      "Heavyweight Fabric",

      "Streetwear Quality",

      "Custom Labels",

      "Premium Embroidery",
    ],

    specifications: [

      {
        label:
          "MOQ",

        value:
          "80 pcs",
      },

      {
        label:
          "Lead Time",

        value:
          "10 - 18 Days",
      },
    ],

    faq: [

      {
        question:
          "Can you produce oversized hoodies?",

        answer:
          "Yes. We support oversized and streetwear fits.",
      },
    ],

    seoTitle:
      "Custom Hoodie Manufacturing Vietnam",

    seoDescription:
      "OEM hoodie manufacturing solutions from Vietnam Clothing.",
  },
};