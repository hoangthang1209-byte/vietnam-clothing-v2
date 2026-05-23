import type {
    Product,
    ProductSection,
  } from "@/types/product";
  
  type Props = {
  
    product:
      Product;
  
    section:
      ProductSection;
  };
  
  export default function ProductSectionRenderer({
    product,
    section,
  }: Props) {
  
    if (
      section.type ===
      "features"
    ) {
  
      return (
  
        <section className="py-24">
  
          <div className="mx-auto max-w-5xl px-6">
  
            <div
              className="
                text-sm
                uppercase
                tracking-[0.3em]
                text-black/40
              "
            >
  
              Features
  
            </div>
  
            <h2
              className="
                mt-4
                text-5xl
                font-semibold
                tracking-tight
              "
            >
  
              Built For
              Premium Apparel
              Production
  
            </h2>
  
            <div className="mt-12 grid gap-6 md:grid-cols-2">
  
              {
                product.features.map(
                  (
                    feature
                  ) => (
  
                    <div
                      key={feature}
                      className="
                        rounded-[24px]
                        border border-black/10
                        p-6
                      "
                    >
  
                      {feature}
  
                    </div>
                  )
                )
              }
  
            </div>
  
          </div>
  
        </section>
      );
    }
  
    if (
      section.type ===
      "specs"
    ) {
  
      return (
  
        <section className="py-24">
  
          <div className="mx-auto max-w-5xl px-6">
  
            <div
              className="
                text-sm
                uppercase
                tracking-[0.3em]
                text-black/40
              "
            >
  
              Specifications
  
            </div>
  
            <div className="mt-12 space-y-6">
  
              {
                product.specifications.map(
                  (
                    spec
                  ) => (
  
                    <div
                      key={spec.label}
                      className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-black/10
                        pb-6
                      "
                    >
  
                      <div className="text-black/50">
  
                        {spec.label}
  
                      </div>
  
                      <div className="font-medium">
  
                        {spec.value}
  
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
  
    if (
      section.type ===
      "faq"
    ) {
  
      return (
  
        <section className="py-24">
  
          <div className="mx-auto max-w-5xl px-6">
  
            <div
              className="
                text-sm
                uppercase
                tracking-[0.3em]
                text-black/40
              "
            >
  
              FAQ
  
            </div>
  
            <div className="mt-12 space-y-8">
  
              {
                product.faq.map(
                  (
                    item
                  ) => (
  
                    <div
                      key={
                        item.question
                      }
                      className="
                        border-b
                        border-black/10
                        pb-8
                      "
                    >
  
                      <div
                        className="
                          text-2xl
                          font-semibold
                        "
                      >
  
                        {
                          item.question
                        }
  
                      </div>
  
                      <div
                        className="
                          mt-4
                          text-black/70
                          leading-relaxed
                        "
                      >
  
                        {
                          item.answer
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
  
    if (
      section.type ===
      "content"
    ) {
  
      return (
  
        <section className="py-24">
  
          <div className="mx-auto max-w-5xl px-6">
  
            <div
              className="
                text-sm
                uppercase
                tracking-[0.3em]
                text-black/40
              "
            >
  
              Manufacturing
  
            </div>
  
            <h2
              className="
                mt-4
                text-5xl
                font-semibold
                tracking-tight
                leading-none
              "
            >
  
              OEM & ODM
              Apparel
              Manufacturing
  
            </h2>
  
            <p
              className="
                mt-8
                text-xl
                leading-relaxed
                text-black/70
              "
            >
  
              Vietnam Clothing delivers
              scalable OEM & ODM apparel
              manufacturing solutions for
              fashion brands, corporate
              clients and global merchandise
              programs.
  
            </p>
  
          </div>
  
        </section>
      );
    }
  
    if (
      section.type ===
      "stats"
    ) {
  
      return (
  
        <section className="py-24">
  
          <div className="mx-auto max-w-6xl px-6">
  
            <div className="grid gap-6 md:grid-cols-4">
  
              <div
                className="
                  rounded-[32px]
                  border border-black/10
                  p-8
                "
              >
  
                <div
                  className="
                    text-sm
                    uppercase
                    tracking-[0.2em]
                    text-black/40
                  "
                >
  
                  MOQ
  
                </div>
  
                <div
                  className="
                    mt-4
                    text-4xl
                    font-semibold
                  "
                >
  
                  100 pcs
  
                </div>
  
              </div>
  
              <div
                className="
                  rounded-[32px]
                  border border-black/10
                  p-8
                "
              >
  
                <div
                  className="
                    text-sm
                    uppercase
                    tracking-[0.2em]
                    text-black/40
                  "
                >
  
                  Lead Time
  
                </div>
  
                <div
                  className="
                    mt-4
                    text-4xl
                    font-semibold
                  "
                >
  
                  15–30 Days
  
                </div>
  
              </div>
  
              <div
                className="
                  rounded-[32px]
                  border border-black/10
                  p-8
                "
              >
  
                <div
                  className="
                    text-sm
                    uppercase
                    tracking-[0.2em]
                    text-black/40
                  "
                >
  
                  Capacity
  
                </div>
  
                <div
                  className="
                    mt-4
                    text-4xl
                    font-semibold
                  "
                >
  
                  50K+/Month
  
                </div>
  
              </div>
  
              <div
                className="
                  rounded-[32px]
                  border border-black/10
                  p-8
                "
              >
  
                <div
                  className="
                    text-sm
                    uppercase
                    tracking-[0.2em]
                    text-black/40
                  "
                >
  
                  Export
  
                </div>
  
                <div
                  className="
                    mt-4
                    text-4xl
                    font-semibold
                  "
                >
  
                  Global
  
                </div>
  
              </div>
  
            </div>
  
          </div>
  
        </section>
      );
    }
  
    if (
      section.type ===
      "cta"
    ) {
  
      return (
  
        <section className="bg-black py-32 text-white">
  
          <div className="mx-auto max-w-5xl px-6 text-center">
  
            <h2
              className="
                text-6xl
                font-semibold
                leading-none
                tracking-tight
              "
            >
  
              Start Your
              Apparel
              Project
  
            </h2>
  
            <p
              className="
                mx-auto
                mt-8
                max-w-2xl
                text-xl
                leading-relaxed
                text-white/70
              "
            >
  
              Work with Vietnam Clothing
              for scalable OEM & ODM
              apparel manufacturing.
  
            </p>
  
            <a
              href="/en/contact"
              className="
                mt-10
                inline-flex
                rounded-full
                bg-white
                px-8
                py-4
                text-black
              "
            >
  
              Request Quotation
  
            </a>
  
          </div>
  
        </section>
      );
    }
  
    return null;
  }