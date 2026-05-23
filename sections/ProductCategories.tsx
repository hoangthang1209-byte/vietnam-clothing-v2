"use client";

import Link from "next/link";

import Image from "next/image";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";

import Reveal from "@/components/animation/Reveal";

const products = [
  {
    title: "T-Shirts",

    category:
      "Apparel Manufacturing",

    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1400&auto=format&fit=crop",

    href:
      "/en/products/t-shirts",
  },

  {
    title:
      "Polo Shirts",

    category:
      "Corporate Uniforms",

    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1400&auto=format&fit=crop",

    href:
      "/en/products/polo-shirts",
  },

  {
    title:
      "Hoodies",

    category:
      "OEM Manufacturing",

    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1400&auto=format&fit=crop",

    href:
      "/en/products/hoodies",
  },
];

export default function ProductCategories() {

  return (

    <section className="bg-white py-32">

      <Container>

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
              max-w-3xl
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

              Product Categories

            </p>

            <h2
              className="
                text-5xl
                font-bold
                leading-tight
                tracking-tight
                lg:text-6xl
              "
            >

              Premium Apparel

              <br />

              Manufacturing Solutions

            </h2>

          </div>

          <p
            className="
              max-w-xl
              leading-8
              text-neutral-600
            "
          >

            OEM & ODM manufacturing
            solutions for corporate
            uniforms, merchandise
            and global apparel brands.

          </p>

        </div>

        <div
          className="
            grid
            gap-8
            lg:grid-cols-3
          "
        >

          {
            products.map(
              (
                item
              ) => (

                <Reveal
                  key={
                    item.title
                  }
                >

                  <motion.div
                    whileHover={{
                      y: -8,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >

                    <Link
                      href={
                        item.href
                      }
                      className="
                        group
                        relative
                        block
                        overflow-hidden
                        rounded-[40px]
                        border
                        border-black/5
                        bg-white
                        transition-all
                        duration-500
                        hover:shadow-2xl
                      "
                    >

                      <div
                        className="
                          absolute
                          inset-0
                          z-10
                          bg-gradient-to-t
                          from-black/80
                          via-black/20
                          to-transparent
                        "
                      />

                      <Image
                        src={
                          item.image
                        }
                        alt={
                          item.title
                        }
                        width={1400}
                        height={1600}
                        className="
                          h-[500px]
                          w-full
                          object-cover
                          transition
                          duration-700
                          group-hover:scale-105
                          lg:h-[700px]
                        "
                      />

                      <div
                        className="
                          absolute
                          bottom-0
                          left-0
                          z-20
                          p-10
                          text-white
                        "
                      >

                        <p
                          className="
                            mb-4
                            text-sm
                            uppercase
                            tracking-[0.2em]
                            text-white/60
                          "
                        >

                          {
                            item.category
                          }

                        </p>

                        <h3
                          className="
                            text-4xl
                            font-bold
                          "
                        >

                          {
                            item.title
                          }

                        </h3>

                        <div
                          className="
                            mt-8
                            inline-flex
                            items-center
                            gap-3
                            rounded-full
                            border
                            border-white/20
                            bg-white/10
                            px-6
                            py-3
                            text-sm
                            backdrop-blur
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

                  </motion.div>

                </Reveal>
              )
            )
          }

        </div>

      </Container>

    </section>
  );
}