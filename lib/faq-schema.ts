import { Product }
from "@/types/product";

export function generateFaqSchema(
  product: Product
) {

  return {

    "@context":
      "https://schema.org",

    "@type":
      "FAQPage",

    mainEntity:
      product.faq.map(
        (faq) => ({

          "@type":
            "Question",

          name:
            faq.question,

          acceptedAnswer: {

            "@type":
              "Answer",

            text:
              faq.answer,
          },
        })
      ),
  };
}