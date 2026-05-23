import Link
from "next/link";

import {
  getProducts,
} from "@/lib/getProducts";

export default async function InternalLinks() {

  const products =
    await getProducts();

  if (
    !products?.length
  ) {

    return null;
  }

  return (

    <section
      className="
        border-t
        border-black/5
        py-20
      "
    >

      <div
        className="
          mx-auto
          max-w-7xl
          px-6
        "
      >

        <div
          className="
            mb-10
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

            Explore More

          </div>

          <h2
            className="
              mt-5
              text-4xl
              font-bold
              tracking-tight
            "
          >

            Related Product
            Categories

          </h2>

        </div>

        <div
          className="
            flex
            flex-wrap
            gap-4
          "
        >

          {
            products.map(
              (
                product: any
              ) => (

                <Link
                  key={
                    product.id
                  }
                  href={
                    `/en/products/${product.slug}`
                  }
                  className="
                    rounded-full
                    border
                    border-black/10
                    px-6
                    py-3
                    text-sm
                    transition
                    hover:bg-black
                    hover:text-white
                  "
                >

                  {
                    product.title
                  }

                </Link>
              )
            )
          }

        </div>

      </div>

    </section>
  );
}