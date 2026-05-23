import type {
  Metadata,
} from "next";

import {
  notFound,
} from "next/navigation";

import {
  products,
} from "@/data/products";

import Breadcrumb
from "@/components/navigation/Breadcrumb";

import ProductPageClient
from "@/components/products/ProductPageClient";

type Props = {

  params:
    Promise<{
      locale: string;
      slug: string;
    }>;
};

export async function generateStaticParams() {

  return Object.keys(
    products
  ).map(
    (
      slug
    ) => ({

      slug,
    })
  );
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {

  const {
    slug,
  } = await params;

  const product =
    products[
      slug
    ];

  if (
    !product
  ) {

    return {};
  }

  return {

    title:
      product.seoTitle,

    description:
      product.seoDescription,

    openGraph: {

      title:
        product.seoTitle,

      description:
        product.seoDescription,

      images: [
        product.image,
      ],
    },
  };
}

export default async function ProductPage({
  params,
}: Props) {

  const {
    slug,
  } = await params;

  const product =
    products[
      slug
    ];

  if (
    !product
  ) {

    notFound();
  }

  return (

    <main className="bg-white text-black">

      <section className="pt-32">

        <div className="mx-auto max-w-7xl px-6">

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

      </section>

      <ProductPageClient
        product={product}
      />

    </main>
  );
}