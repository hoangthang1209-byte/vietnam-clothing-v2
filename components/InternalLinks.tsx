import Link
from "next/link";

import { products }
from "@/data/products";

type Props = {
  currentSlug?: string;
};

export default function InternalLinks({
  currentSlug,
}: Props) {

  const relatedProducts =
    Object.entries(products)
      .filter(
        ([slug]) =>
          slug !== currentSlug
      )
      .slice(0, 4);

  return (

    <section className="mx-auto max-w-7xl px-6 py-24">

      <div className="mb-16">

        <div className="text-sm uppercase tracking-[0.3em] text-black/40">
          Explore More
        </div>

        <h2 className="mt-6 text-5xl font-semibold">

          Related Manufacturing Solutions

        </h2>

      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        {
          relatedProducts.map(
            ([
              slug,
              product,
            ]: any) => (

              <Link
                key={slug}
                href={`/products/${slug}`}
                className="
                  rounded-[32px]
                  border border-black/10
                  p-8
                  transition
                  hover:border-black
                "
              >

                <h3 className="text-2xl font-semibold">

                  {product.title}

                </h3>

                <p className="mt-4 text-black/60">

                  {product.description}

                </p>

              </Link>
            )
          )
        }

      </div>

    </section>
  );
}