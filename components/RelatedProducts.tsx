import Link from "next/link";
import { products } from "../data/products";

type Props = {
  currentSlug: string;
};

export default function RelatedProducts({
  currentSlug,
}: Props) {
  const related = Object.entries(products).filter(
    ([slug]) => slug !== currentSlug
  );

  return (
    <section className="mt-32">

      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
        Related Products
      </p>

      <h2 className="mb-12 text-5xl font-bold">
        Explore More Categories
      </h2>

      <div className="grid gap-8 md:grid-cols-2">

        {related.map(([slug, product]) => (
          <Link
            key={slug}
            href={`/en/products/${slug}`}
            className="group overflow-hidden rounded-[32px] bg-neutral-100"
          >

            <div className="aspect-[4/3] overflow-hidden">

              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

            </div>

            <div className="p-8">

              <h3 className="text-3xl font-bold">
                {product.title}
              </h3>

              <p className="mt-4 leading-7 text-neutral-600">
                {product.description}
              </p>

            </div>

          </Link>
        ))}

      </div>

    </section>
  );
}