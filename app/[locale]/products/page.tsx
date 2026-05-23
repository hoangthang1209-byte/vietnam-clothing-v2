import Image
from "next/image";

import Link
from "next/link";

import {
  products,
} from "@/data/products";

export default function ProductsPage() {

  return (

    <main
      className="
        bg-white
        text-black
      "
    >

      <section
        className="
          border-b
          border-black/5
          pb-24
          pt-56
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

            <h1
              className="
                mt-6
                text-6xl
                font-bold
                tracking-tight
                md:text-7xl
              "
            >

              Premium Apparel
              Manufacturing

            </h1>

            <p
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-8
                text-black/60
              "
            >

              OEM & ODM apparel
              manufacturing solutions
              for fashion brands,
              uniforms and merchandise
              projects worldwide.

            </p>

          </div>

        </div>

      </section>

      <section
        className="
          py-24
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
              grid
              gap-8
              md:grid-cols-2
            "
          >

            {
              Object.values(
                products
              ).map(
                (
                  product
                ) => (

                  <Link
                    key={
                      product.slug
                    }
                    href={`/en/products/${product.slug}`}
                    className="
                      group
                      block
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
                        p-10
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

                      <h2
                        className="
                          mt-5
                          text-4xl
                          font-bold
                          tracking-tight
                        "
                      >

                        {
                          product.title
                        }

                      </h2>

                      <p
                        className="
                          mt-5
                          leading-8
                          text-black/60
                        "
                      >

                        {
                          product.description
                        }

                      </p>

                      <div
                        className="
                          mt-10
                          inline-flex
                          items-center
                          gap-3
                          rounded-full
                          border
                          border-black/10
                          px-6
                          py-3
                          text-sm
                          transition
                          group-hover:bg-black
                          group-hover:text-white
                        "
                      >

                        Explore Product

                        <span
                          className="
                            transition
                            group-hover:translate-x-1
                          "
                        >

                          →

                        </span>

                      </div>

                    </div>

                  </Link>
                )
              )
            }

          </div>

        </div>

      </section>

    </main>
  );
}