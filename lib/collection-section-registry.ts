import type {
    CollectionSection,
    CollectionSectionProps,
  }
  from "@/types/product";
  
  import CollectionHero
  from "@/sections/collections/CollectionHero";
  
  import CollectionProducts
  from "@/sections/collections/CollectionProducts";
  
  import CollectionCTA
  from "@/sections/collections/CollectionCTA";
  
  export const collectionSectionRegistry:
  Record<
    CollectionSection["type"],
    React.ComponentType<
      CollectionSectionProps
    >
  > = {
  
    hero:
      CollectionHero,
  
    products:
      CollectionProducts,
  
    cta:
      CollectionCTA,
  };