import type {
    Product,
  } from "@/types/product";
  
  type Props = {
  
    product: Product;
  };
  
  export default function ProductSpecs({
    product,
  }: Props) {
  
    return (
  
      <section className="py-32">
  
        <div className="mx-auto max-w-7xl px-6">
  
          <div
            className="
              mb-16
              max-w-3xl
            "
          >
  
            <div
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-black/40
              "
            >
  
              Production Specs
  
            </div>
  
            <h2
              className="
                mt-6
                text-5xl
                font-bold
                tracking-tight
              "
            >
  
              Built For Modern
              Manufacturing
  
            </h2>
  
            <p
              className="
                mt-8
                text-lg
                leading-8
                text-black/60
              "
            >
  
              Premium apparel production
              infrastructure designed for
              scalable manufacturing,
              customization, and modern
              brand development.
  
            </p>
  
          </div>
  
          <div
            className="
              grid
              gap-6
              md:grid-cols-2
              lg:grid-cols-4
            "
          >
  
            {
              product.specifications.map(
                (
                  spec,
                  index
                ) => (
  
                  <div
                    key={index}
                    className="
                      rounded-[32px]
                      border
                      border-black/5
                      bg-neutral-50
                      p-8
                    "
                  >
  
                    <div
                      className="
                        text-xs
                        uppercase
                        tracking-[0.2em]
                        text-black/40
                      "
                    >
  
                      {
                        spec.label
                      }
  
                    </div>
  
                    <div
                      className="
                        mt-4
                        text-2xl
                        font-bold
                      "
                    >
  
                      {
                        spec.value
                      }
  
                    </div>
  
                  </div>
                )
              )
            }
  
          </div>
  
        </div>
  
      </section>
    );
  }