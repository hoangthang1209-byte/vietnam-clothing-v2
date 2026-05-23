import type {
  ProductSectionProps,
}
from "@/types/product";

export default function ProductFeatures({
  product,
  section,
}: ProductSectionProps) {

  const variant =
    section?.variant ||
    "minimal";

  if (
    variant ===
    "cards"
  ) {

    return (

      <section className="py-24">

        <div className="mb-16">

          <div className="text-sm uppercase tracking-[0.3em] text-black/40">

            Features

          </div>

          <h2 className="mt-6 text-5xl font-semibold">

            Manufacturing Capabilities

          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {
            product.features.map(
              (
                feature
              ) => (

                <div
                  key={feature}
                  className="
                    rounded-[40px]
                    border border-black/10
                    p-10
                  "
                >

                  <div className="text-5xl">

                    ✦

                  </div>

                  <h3 className="mt-10 text-3xl font-semibold">

                    {feature}

                  </h3>

                </div>
              )
            )
          }

        </div>

      </section>
    );
  }

  return (

    <section className="py-24">

      <div className="mb-16">

        <div className="text-sm uppercase tracking-[0.3em] text-black/40">

          Features

        </div>

        <h2 className="mt-6 text-5xl font-semibold">

          Manufacturing Capabilities

        </h2>

      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        {
          product.features.map(
            (
              feature
            ) => (

              <div
                key={feature}
                className="
                  rounded-[32px]
                  border border-black/10
                  p-8
                "
              >

                <div className="text-black/40">

                  01

                </div>

                <h3 className="mt-6 text-2xl font-semibold leading-snug">

                  {feature}

                </h3>

              </div>
            )
          )
        }

      </div>

    </section>
  );
}