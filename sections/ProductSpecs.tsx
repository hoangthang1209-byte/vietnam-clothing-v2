import type {
    ProductSectionProps,
  }
  from "@/types/product";
  
  export default function ProductSpecs({
    product,
  }: ProductSectionProps) {
  
    return (
  
      <section className="py-24">
  
        <div className="mb-16">
  
          <div className="text-sm uppercase tracking-[0.3em] text-black/40">
  
            Specifications
  
          </div>
  
          <h2 className="mt-6 text-5xl font-semibold">
  
            Production Specifications
  
          </h2>
  
        </div>
  
        <div className="overflow-hidden rounded-[40px] border border-black/10">
  
          {
            product.specifications.map(
              (
                spec,
                index
              ) => (
  
                <div
                  key={spec.label}
                  className={`
                    flex items-center justify-between
                    px-8 py-6
                    ${
                      index !==
                      product.specifications.length - 1
                        ? "border-b border-black/10"
                        : ""
                    }
                  `}
                >
  
                  <div className="text-black/50">
  
                    {spec.label}
  
                  </div>
  
                  <div className="text-lg font-semibold">
  
                    {spec.value}
  
                  </div>
  
                </div>
              )
            )
          }
  
        </div>
  
      </section>
    );
  }