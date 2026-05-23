"use client";

import {
  useState,
} from "react";

import type {
  Product,
} from "@/types/product";

import ProductHero
from "./ProductHero";

import ProductTabs
from "./ProductTabs";

import RelatedProducts
from "./RelatedProducts";

import ProductFullscreenModal
from "./ProductFullscreenModal";

type Props = {

  product: Product;
};

export default function ProductPageClient({
  product,
}: Props) {

  const [
    activeImage,
    setActiveImage,
  ] = useState(
    product.image
  );

  const [
    isFullscreen,
    setIsFullscreen,
  ] = useState(
    false
  );

  const [
    isInquiryOpen,
    setIsInquiryOpen,
  ] = useState(
    false
  );

  return (

    <main
      className="
        bg-white
        text-black
      "
    >

      <ProductHero
        product={product}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
        setIsFullscreen={setIsFullscreen}
        setIsInquiryOpen={setIsInquiryOpen}
      />

      <ProductTabs
        product={product}
      />

      <RelatedProducts
        currentSlug={product.slug}
        category={product.category}
      />

      <ProductFullscreenModal
        image={activeImage}
        isOpen={isFullscreen}
        onClose={() =>
          setIsFullscreen(
            false
          )
        }
      />

    </main>
  );
}