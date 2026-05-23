import { Product }
from "@/types/product";

export function generateProductSchema(
  product: Product
) {

  return {

    "@context":
      "https://schema.org",

    "@type":
      "Product",

    name:
      product.title,

    description:
      product.description,

    image:
      product.gallery,

    brand: {

      "@type":
        "Brand",

      name:
        "Vietnam Clothing",
    },

    manufacturer: {

      "@type":
        "Organization",

      name:
        "Vietnam Clothing",
    },

    category:
      product.category,

    material:
      product.materials.join(", "),

    keywords:
      product.keywords.join(", "),

    additionalProperty:
      product.specifications.map(
        (spec) => ({

          "@type":
            "PropertyValue",

          name:
            spec.label,

          value:
            spec.value,
        })
      ),
  };
}