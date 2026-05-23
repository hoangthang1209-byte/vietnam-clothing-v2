import Link from "next/link";

import Image from "next/image";

import type {
  Metadata,
} from "next";

import Container
from "@/components/ui/Container";

import Reveal
from "@/components/animation/Reveal";

import {
  products,
} from "@/data/products";

export const metadata:
  Metadata = {

  title:
    "Products",

  description:
    "Premium OEM & ODM apparel manufacturing solutions from Vietnam Clothing.",
};

export default function ProductsPage() {

  return (

    <main
      className="
        bg-white
        pt-40
        pb-32
        text-black
      "
    >

      <Container>

        <div
          className="
            mb-20
            flex
            flex-col
            gap-8
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >

          <div
            className="
              max-w-4xl
            "
          >

            <p
              className="
                mb-5
                text-sm
                uppercase
                tracking-[0.3em]
                text-neutral-500
              "
            >

              Products

            </p>

            <h1
              className="
                text-5xl
                font-bold
                leading-tight
                tracking-tight
                lg:text-7xl
              "
            >

              Premium Apparel

              <br />

              Manufacturing Solutions

            </h1>

          </div>

          <p
            className="
              max-w-xl
              text-lg
              leading-8
              text-black/60
            "
          >

            Explore our OEM & ODM
            apparel manufacturing
            capabilities for modern
            global brands.

          </p>

        </div>

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >

          {
            Object.values(
              products
            ).map(
              (
                product
              ) => (

                <Reveal
                  key={
                    product.slug
                  }
                >

                  <Link
                    href={`/en/products/${product.slug}`}
                    className="
                      group
                      block
                      overflow-hidden
                      rounded-[40px]
                      border
                      border-black/5
                      bg-white
                      transition-all
                      duration-500
                      hover:-translate-y-2
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
                        width={1200}
                        height={1400}
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

                    <div className="p-8">

                      <div
                        className="
                          mb-4
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
                          text-3xl
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
                          mt-4
                          line-clamp-3
                          leading-7
                          text-black/60
                        "
                      >

                        {
                          product.description
                        }

                      </p>

                      <div
                        className="
                          mt-8
                          inline-flex
                          items-center
                          gap-3
                          rounded-full
                          border
                          border-black/10
                          px-5
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
                            duration-300
                            group-hover:translate-x-1
                          "
                        >

                          →

                        </span>

                      </div>

                    </div>

                  </Link>

                </Reveal>
              )
            )
          }

        </div>

      </Container>

    </main>
  );
}