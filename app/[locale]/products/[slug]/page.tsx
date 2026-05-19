import { Metadata }
from "next";

import { notFound }
from "next/navigation";

import { products }
from "@/data/products";

import FactoryProcess
from "@/sections/FactoryProcess";

import InquiryCTA
from "@/components/InquiryCTA";

import InquiryForm
from "@/components/InquiryForm";

import RelatedProducts
from "@/components/RelatedProducts";

import ProductHero
from "@/sections/ProductHero";

import ProductStats
from "@/sections/ProductStats";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {

  const { slug } =
    await params;

  const product =
    products[
      slug as keyof typeof products
    ];

  if (!product) {

    return {
      title:
        "Product Not Found",
    };
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

  const { slug } =
    await params;

  const product =
    products[
      slug as keyof typeof products
    ];

  if (!product) {
    return notFound();
  }

  return (

    <main className="min-h-screen bg-white pt-40 text-black">

      <div className="mx-auto max-w-7xl px-6">

        <ProductHero
          product={product}
        />

        <ProductStats
          product={product}
        />

        <FactoryProcess />

        <InquiryCTA />

        <InquiryForm />

        <RelatedProducts
          currentSlug={slug}
        />

      </div>

    </main>
  );
}