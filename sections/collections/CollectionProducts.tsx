import { products }
from "@/data/products";

import type {
  Collection,
  CollectionSection,
}
from "@/types/product";

type Props = {
  collection: Collection;
  section?: CollectionSection;
};

export default function CollectionProducts({
  collection,
  section,
}: Props) {

  const variant =
    section?.variant ||
    "grid";

  if (
    variant ===
    "minimal"
  ) {

    return (

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="mb-16">

          <div className="text-sm uppercase tracking-[0.3em] text-black/40">
            Products
          </div>

          <h2 className="mt-6 text-5xl font-semibold">

            Collection Products

          </h2>

        </div>

        <div className="space-y-6">

          {
            collection.products.map(
              (
                slug: string
              ) => {

                const product =
                  products[slug];

                if (!product) {
                  return null;
                }

                return (

                  <a
                    key={slug}
                    href={`/products/${slug}`}
                    className="
                      flex items-center justify-between
                      border-b border-black/10
                      pb-6
                    "
                  >

                    <div>

                      <h3 className="text-3xl font-semibold">

                        {product.title}

                      </h3>

                      <p className="mt-2 text-black/60">

                        {product.description}

                      </p>

                    </div>

                    <div className="text-black/40">
                      →
                    </div>

                  </a>
                );
              }
            )
          }

        </div>

      </section>
    );
  }

  return (

    <section className="mx-auto max-w-7xl px-6 py-24">

      <div className="mb-16">

        <div className="text-sm uppercase tracking-[0.3em] text-black/40">
          Products
        </div>

        <h2 className="mt-6 text-5xl font-semibold">

          Collection Products

        </h2>

      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

        {
          collection.products.map(
            (
              slug: string
            ) => {

              const product =
                products[slug];

              if (!product) {
                return null;
              }

              return (

                <a
                  key={slug}
                  href={`/products/${slug}`}
                  className="
                    group overflow-hidden
                    rounded-[40px]
                    border border-black/10
                  "
                >

                  <div className="aspect-[4/5] overflow-hidden">

                    <img
                      src={product.image}
                      alt={product.title}
                      className="
                        h-full w-full object-cover
                        transition duration-700
                        group-hover:scale-105
                      "
                    />

                  </div>

                  <div className="p-8">

                    <h3 className="text-3xl font-semibold">

                      {product.title}

                    </h3>

                    <p className="mt-4 text-black/60">

                      {product.description}

                    </p>

                  </div>

                </a>
              );
            }
          )
        }

      </div>

    </section>
  );
}