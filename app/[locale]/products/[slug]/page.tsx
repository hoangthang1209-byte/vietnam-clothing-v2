import {
  notFound,
} from "next/navigation";

import type {
  Metadata,
} from "next";

import {
  products,
} from "@/data/products";

import ProductPageClient
from "@/components/products/ProductPageClient";

type Props = {

  params:
    Promise<{
      slug: string;
    }>;
};

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
      product.title,

    description:
      product.description,

    openGraph: {

      title:
        product.title,

      description:
        product.description,

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

    <ProductPageClient
      product={product}
    />
  );
}