"use client";

import Link
from "next/link";

import Image
from "next/image";

import {
  motion,
} from "framer-motion";

import {
  ArrowRight,
} from "lucide-react";

import {
  products,
} from "@/data/products";

type Props = {

  currentSlug: string;

  category: string;
};

export default function RelatedProducts({

  currentSlug,

  category,

}: Props) {

  const relatedProducts =

    Object.values(
      products
    ).filter(
      (
        product
      ) => (

        product.slug !==
          currentSlug &&

        product.category ===
          category
      )
    );

  if (
    !relatedProducts.length
  ) {

    return null;
  }

  return (

    <section className="py-32">

      <div className="mx-auto max-w-7xl px-6">

        <div
          className="
            mb-16
            flex
            items-end
            justify-between
            gap-8
          "
        >

          <div>

            <div
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-black/40
              "
            >

              Related Products

            </div>

            <h2
              className="
                mt-6
                text-5xl
                font-bold
                tracking-tight
              "
            >

              Explore More
              Products

            </h2>

          </div>

        </div>

        <div
          className="
            grid
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >

          {
            relatedProducts.map(
              (
                product
              ) => (

                <motion.div
                  key={
                    product.slug
                  }
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    group
                    overflow-hidden
                    rounded-[36px]
                    border
                    border-black/5
                    bg-white
                    transition
                    hover:shadow-2xl
                  "
                >

                  <Link
                    href={
                      `/en/products/${product.slug}`
                    }
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
                        width={800}
                        height={800}
                        className="
                          aspect-square
                          h-full
                          w-full
                          object-cover
                          transition
                          duration-500
                          group-hover:scale-105
                        "
                      />

                    </div>

                    <div className="p-8">

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
                          mt-4
                          text-2xl
                          font-bold
                          tracking-tight
                        "
                      >

                        {
                          product.title
                        }

                      </h3>

                      <p
                        className="
                          mt-4
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
                          gap-2
                          font-medium
                        "
                      >

                        Explore Product

                        <ArrowRight
                          className="
                            h-4
                            w-4
                            transition
                            group-hover:translate-x-1
                          "
                        />

                      </div>

                    </div>

                  </Link>

                </motion.div>
              )
            )
          }

        </div>

      </div>

    </section>
  );
}