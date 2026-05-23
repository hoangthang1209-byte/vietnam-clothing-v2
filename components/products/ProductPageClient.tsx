"use client";

import {
  useState,
} from "react";

import type {
  Product,
} from "@/types/product";

import Reveal
from "@/components/animation/Reveal";

import BackgroundGlow
from "@/components/ui/BackgroundGlow";

import ProductHero
from "@/components/products/ProductHero";

import ProductSocialProof
from "@/components/products/ProductSocialProof";

import ProductSpecs
from "@/components/products/ProductSpecs";

import ProductTabs
from "@/components/products/ProductTabs";

import ProductReviews
from "@/components/products/ProductReviews";

import ProductCTASection
from "@/components/products/ProductCTASection";

import ProductStickyCTA
from "@/components/products/ProductStickyCTA";

import ProductInquiryDrawer
from "@/components/products/ProductInquiryDrawer";

import ProductFullscreenModal
from "@/components/products/ProductFullscreenModal";

import ProductSectionRenderer
from "@/components/products/ProductSectionRenderer";

import RelatedProducts
from "@/components/products/RelatedProducts";

import FAQSection
from "@/components/seo/FAQSection";

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

    <>

      <BackgroundGlow />

      <ProductHero
        product={product}
        activeImage={
          activeImage
        }
        setActiveImage={
          setActiveImage
        }
        setIsFullscreen={
          setIsFullscreen
        }
        setIsInquiryOpen={
          setIsInquiryOpen
        }
      />

      <Reveal>

        <ProductSocialProof />

      </Reveal>

      <Reveal delay={0.1}>

        <ProductSpecs
          product={product}
        />

      </Reveal>

      <Reveal delay={0.15}>

        <ProductTabs
          product={product}
        />

      </Reveal>

      <Reveal delay={0.2}>

        <ProductReviews />

      </Reveal>

      <Reveal delay={0.25}>

        <ProductCTASection
          product={product}
          setIsInquiryOpen={
            setIsInquiryOpen
          }
        />

      </Reveal>

      {
        product.sections.map(
          (
            section,
            index
          ) => (

            <Reveal
              key={index}
              delay={
                index * 0.05
              }
            >

              <ProductSectionRenderer
                product={product}
                section={section}
              />

            </Reveal>
          )
        )
      }

      <Reveal delay={0.3}>

        <FAQSection
          items={
            product.faq
          }
        />

      </Reveal>

      <Reveal delay={0}>

        <RelatedProducts
          currentSlug={
            product.slug
          }
          category={
            product.category
          }
        />

      </Reveal>

      <ProductStickyCTA
        product={product}
        setIsInquiryOpen={
          setIsInquiryOpen
        }
      />

      <ProductInquiryDrawer
        product={product}
        isOpen={
          isInquiryOpen
        }
        setIsOpen={
          setIsInquiryOpen
        }
      />

      <ProductFullscreenModal
        image={
          activeImage
        }
        title={
          product.title
        }
        isOpen={
          isFullscreen
        }
        setIsOpen={
          setIsFullscreen
        }
      />

    </>
  );
}