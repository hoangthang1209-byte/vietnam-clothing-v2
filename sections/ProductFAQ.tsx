import type {
    ProductSectionProps,
  }
  from "@/types/product";
  
  export default function ProductFAQ({
    product,
  }: ProductSectionProps) {
  
    return (
  
      <section className="py-24">
  
        <div className="mb-16">
  
          <div className="text-sm uppercase tracking-[0.3em] text-black/40">
  
            FAQ
  
          </div>
  
          <h2 className="mt-6 text-5xl font-semibold">
  
            Frequently Asked Questions
  
          </h2>
  
        </div>
  
        <div className="space-y-6">
  
          {
            product.faq.map(
              (
                item
              ) => (
  
                <div
                  key={item.question}
                  className="
                    rounded-[32px]
                    border border-black/10
                    p-10
                  "
                >
  
                  <h3 className="text-2xl font-semibold">
  
                    {item.question}
  
                  </h3>
  
                  <p className="mt-4 max-w-3xl text-lg leading-relaxed text-black/60">
  
                    {item.answer}
  
                  </p>
  
                </div>
              )
            )
          }
  
        </div>
  
      </section>
    );
  }