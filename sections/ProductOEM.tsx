import type {
    ProductSectionProps,
  }
  from "@/types/product";
  
  export default function ProductOEM({
    product,
  }: ProductSectionProps) {
  
    return (
  
      <section className="py-24">
  
        <div className="grid gap-20 lg:grid-cols-2">
  
          <div>
  
            <div className="text-sm uppercase tracking-[0.3em] text-black/40">
  
              OEM / ODM
  
            </div>
  
            <h2 className="mt-6 text-6xl font-semibold tracking-tight leading-none">
  
              Full-Service
              Manufacturing Partner
  
            </h2>
  
          </div>
  
          <div>
  
            <p className="text-xl leading-relaxed text-black/60">
  
              Vietnam Clothing provides scalable
              OEM & ODM apparel manufacturing
              solutions for fashion brands,
              corporate uniforms and global
              merchandise projects.
  
            </p>
  
            <div className="mt-12 grid gap-6 md:grid-cols-2">
  
              {
                product.materials.map(
                  (
                    material
                  ) => (
  
                    <div
                      key={material}
                      className="
                        rounded-[32px]
                        border border-black/10
                        p-8
                      "
                    >
  
                      <div className="text-sm uppercase tracking-[0.2em] text-black/40">
  
                        Material
  
                      </div>
  
                      <div className="mt-4 text-2xl font-semibold">
  
                        {material}
  
                      </div>
  
                    </div>
                  )
                )
              }
  
            </div>
  
          </div>
  
        </div>
  
      </section>
    );
  }