export function generateCollectionSchema(
    collection: any
  ) {
  
    return {
  
      "@context":
        "https://schema.org",
  
      "@type":
        "CollectionPage",
  
      name:
        collection.title,
  
      description:
        collection.seoDescription,
  
      url:
        `https://vietnamclothing.com/collections/${collection.slug}`,
  
      image:
        collection.heroImage,
  
      publisher: {
  
        "@type":
          "Organization",
  
        name:
          "Vietnam Clothing",
      },
  
      mainEntity: {
  
        "@type":
          "ItemList",
  
        itemListElement:
  
          collection.products.map(
            (
              productSlug: string,
              index: number
            ) => ({
  
              "@type":
                "ListItem",
  
              position:
                index + 1,
  
              url:
                `https://vietnamclothing.com/products/${productSlug}`,
            })
          ),
      },
    };
  }