import Image
from "next/image";

import type {
  Metadata,
} from "next";

import {
  notFound,
} from "next/navigation";

import {
  getProductBySlug,
} from "@/lib/getProductBySlug";

import ProductInquiryDrawer
from "@/components/products/ProductInquiryDrawer";

import ProductTabs
from "@/components/products/ProductTabs";

import ProductGallery
from "@/components/products/ProductGallery";

import ProductQuickInfo
from "@/components/products/ProductQuickInfo";

import ProductCTA
from "@/components/products/ProductCTA";

import RelatedProducts
from "@/components/products/RelatedProducts";

import Breadcrumb
from "@/components/ui/Breadcrumb";

type Props = {

  params: {

    slug: string;
    locale: string;
  };
};

export async function generateMetadata({

  params,

}: Props): Promise<
  Metadata
> {

  const product =
    await getProductBySlug(
      params.slug
    );

  if (!product) {

    return {

      title:
        "Product Not Found",
    };
  }

  return {

    title:
      `${product.title} | Vietnam Clothing`,

    description:
      product.description,

    openGraph: {

      title:
        product.title,

      description:
        product.description,

      images: [

        {
          url:
            product.image,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({

  params,

}: Props) {

  const product =
    await getProductBySlug(
      params.slug
    );

  if (!product) {

    notFound();
  }

  const jsonLd = {

    "@context":
      "https://schema.org",

    "@type":
      "Product",

    name:
      product.title,

    description:
      product.description,

    image: [

      product.image,

      ...(product.gallery || []),
    ],

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
  };

  const faqJsonLd =

    product.faq?.length > 0

      ? {

          "@context":
            "https://schema.org",

          "@type":
            "FAQPage",

          mainEntity:

            product.faq.map(
              (
                item: any
              ) => ({

                "@type":
                  "Question",

                name:
                  item.question,

                acceptedAnswer: {

                  "@type":
                    "Answer",

                  text:
                    item.answer,
                },
              })
            ),
        }

      : null;

  return (

    <main
      className="
        bg-white
        pb-24
        text-black
      "
    >

      <script
        type="
          application/ld+json
        "
        dangerouslySetInnerHTML={{

          __html:
            JSON.stringify(
              jsonLd
            ),
        }}
      />

      {
        faqJsonLd && (

          <script
            type="
              application/ld+json
            "
            dangerouslySetInnerHTML={{

              __html:
                JSON.stringify(
                  faqJsonLd
                ),
            }}
          />
        )
      }

      <section
        className="
          pb-24
          pt-40
        "
      >

        <div
          className="
            mx-auto
            max-w-7xl
            px-6
          "
        >

          <Breadcrumb
            items={[

              {
                label:
                  "Products",

                href:
                  "/en/products",
              },

              {
                label:
                  product.title,

                href:
                  `/en/products/${product.slug}`,
              },
            ]}
          />

        </div>

        <div
          className="
            mx-auto
            mt-10
            grid
            max-w-7xl
            gap-20
            px-6
            lg:grid-cols-2
          "
        >

          <div
            className="
              grid
              gap-6
            "
          >

            <div
              className="
                overflow-hidden
                rounded-[40px]
                border
                border-black/10
              "
            >

              <Image
                src={
                  product.image
                }
                alt={
                  product.title
                }
                width={1600}
                height={1800}
                className="
                  aspect-[4/5]
                  w-full
                  object-cover
                "
              />

            </div>

            {
              product.gallery?.length > 0 && (

                <ProductGallery

                  images={
                    product.gallery
                  }

                  title={
                    product.title
                  }
                />
              )
            }

          </div>

          <div>

            <div
              className="
                text-sm
                uppercase
                tracking-[0.3em]
                text-black/40
              "
            >

              {
                product.category
              }

            </div>

            <h1
              className="
                mt-6
                text-6xl
                font-bold
                tracking-tight
              "
            >

              {
                product.title
              }

            </h1>

            <p
              className="
                mt-8
                text-lg
                leading-8
                text-black/60
              "
            >

              {
                product.description
              }

            </p>

            <div
              className="
                mt-10
              "
            >

              <ProductInquiryDrawer
                product={
                  product
                }
              />

            </div>

          </div>

        </div>

      </section>

      {
        product.features?.length > 0 && (

          <section
            className="
              py-24
            "
          >

            <div
              className="
                mx-auto
                max-w-7xl
                px-6
              "
            >

              <div
                className="
                  max-w-3xl
                "
              >

                <div
                  className="
                    text-sm
                    uppercase
                    tracking-[0.3em]
                    text-black/40
                  "
                >

                  Features

                </div>

                <h2
                  className="
                    mt-6
                    text-5xl
                    font-bold
                    tracking-tight
                  "
                >

                  Product Highlights

                </h2>

              </div>

              <div
                className="
                  mt-12
                  grid
                  gap-4
                  md:grid-cols-2
                "
              >

                {
                  product.features.map(
                    (
                      feature: string,
                      index: number
                    ) => (

                      <div
                        key={index}
                        className="
                          rounded-[24px]
                          border
                          border-black/10
                          p-8
                        "
                      >

                        <div
                          className="
                            text-lg
                            font-medium
                          "
                        >

                          {
                            feature
                          }

                        </div>

                      </div>
                    )
                  )
                }

              </div>

            </div>

          </section>
        )
      }

      <ProductTabs
        description={
          product.description
        }
        specifications={
          product.specifications
        }
        faq={
          product.faq
        }
      />

      <ProductQuickInfo
        product={product}
      />

      {
        product.content && (

          <section
            className="
              py-24
            "
          >

            <div
              className="
                mx-auto
                max-w-4xl
                px-6
              "
            >

              <div
                className="
                  prose
                  prose-neutral
                  max-w-none
                  prose-img:rounded-[32px]
                "

                dangerouslySetInnerHTML={{

                  __html:
                    product.content,
                }}
              />

            </div>

          </section>
        )
      }

      <ProductCTA
        product={product}
      />

      <RelatedProducts
        currentSlug={
          product.slug || ""
        }
      />

    </main>
  );
}