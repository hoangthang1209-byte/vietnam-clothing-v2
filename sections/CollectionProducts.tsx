import Link
from "next/link";

import Image
from "next/image";

import {
  getProducts,
} from "@/lib/getProducts";

export default async function CollectionProducts() {

  const products =
    await getProducts();

  return (

    <section
      className="
        py-32
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
            mb-20
            flex
            flex-col
            justify-between
            gap-10
            lg:flex-row
            lg:items-end
          "
        >

          <div
            className="
              max-w-4xl
            "
          >

            <div
              className="
                text-sm
                uppercase
                tracking-[0.3em]
                text-black/40
              "
            >

              Product Collections

            </div>

            <h2
              className="
                mt-6
                text-6xl
                font-bold
                tracking-tight
              "
            >

              Explore
              Our Products

            </h2>

          </div>

        </div>

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
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
                    group
                    overflow-hidden
                    rounded-[40px]
                    border
                    border-black/5
                    bg-white
                    transition
                    hover:-translate-y-1
                    hover:shadow-2xl
                  "
                >

                  <div
                    className="
                      overflow-hidden
                    "
                  >

                    <Image
                      src={
                        product.image
                      }
                      alt={
                        product.title
                      }
                      width={1600}
                      height={2000}
                      className="
                        aspect-[4/5]
                        h-full
                        w-full
                        object-cover
                        transition
                        duration-700
                        group-hover:scale-105
                      "
                    />

                  </div>

                  <div
                    className="
                      p-8
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

                      {
                        product.category
                      }

                    </div>

                    <h3
                      className="
                        mt-5
                        text-3xl
                        font-bold
                        tracking-tight
                      "
                    >

                      {
                        product.title
                      }

                    </h3>

                  </div>

                </Link>
              )
            )
          }

        </div>

      </div>

    </section>
  );
}