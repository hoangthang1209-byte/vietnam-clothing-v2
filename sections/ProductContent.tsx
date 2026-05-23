import type {
    ProductSectionProps,
  }
  from "@/types/product";
  
  import ContentRenderer
  from "@/components/content/ContentRenderer";
  
  export default function ProductContent({
    product,
  }: ProductSectionProps) {
  
    if (
      !product.contentBlocks ||
      product.contentBlocks.length === 0
    ) {
      return null;
    }
  
    return (
  
      <section className="py-24">
  
        <div className="mx-auto max-w-4xl">
  
          <ContentRenderer
            blocks={
              product.contentBlocks
            }
          />
  
        </div>
  
      </section>
    );
  }