import Link from "next/link";
import { products } from "../../../data/products";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white pt-40 text-black">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20">

          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Product Categories
          </p>

          <h1 className="text-6xl font-bold tracking-tight">
            Products
          </h1>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {Object.entries(products).map(
            ([slug, product]) => (
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

                  <h2 className="text-3xl font-bold">
                    {product.title}
                  </h2>

                  <p className="mt-4 leading-7 text-neutral-600">
                    {product.description}
                  </p>

                </div>

              </Link>
            )
          )}

        </div>

      </div>

    </main>
  );
}