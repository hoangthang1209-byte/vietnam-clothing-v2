import type {
    ProductSection,
    ProductSectionProps,
  }
  from "@/types/product";
  
  import ProductHero
  from "@/sections/ProductHero";
  
  import ProductStats
  from "@/sections/ProductStats";
  
  import ProductFeatures
  from "@/sections/ProductFeatures";
  
  import ProductContent
  from "@/sections/ProductContent";
  
  import ProductSpecs
  from "@/sections/ProductSpecs";
  
  import ProductFAQ
  from "@/sections/ProductFAQ";
  
  import ProductOEM
  from "@/sections/ProductOEM";
  
  import ProductCTA
  from "@/sections/ProductCTA";
  
  export const productSectionRegistry:
  Record<
    ProductSection["type"],
    React.ComponentType<
      ProductSectionProps
    >
  > = {
  
    hero:
      ProductHero,
  
    stats:
      ProductStats,
  
    features:
      ProductFeatures,
  
    content:
      ProductContent,
  
    specs:
      ProductSpecs,
  
    faq:
      ProductFAQ,
  
    oem:
      ProductOEM,
  
    cta:
      ProductCTA,
  };