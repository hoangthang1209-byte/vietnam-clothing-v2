"use client";

import Image
from "next/image";

import {
  motion,
} from "framer-motion";

import {
  ArrowRight,
} from "lucide-react";

import Container
from "@/components/ui/Container";

import type {
  Product,
} from "@/types/product";

type Props = {

  product: Product;

  activeImage: string;

  setActiveImage:
    (
      image: string
    ) => void;

  setIsFullscreen:
    (
      value: boolean
    ) => void;

  setIsInquiryOpen:
    (
      value: boolean
    ) => void;
};

export default function ProductHero({

  product,

  activeImage,

  setActiveImage,

  setIsFullscreen,

  setIsInquiryOpen,

}: Props) {

  const galleryImages =

    product.gallery?.length

      ? product.gallery

      : [
          product.image,
        ];

  return (

    <motion.section
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      className="pb-24 pt-12"
    >

      <Container
        className="
          grid
          gap-20
          lg:grid-cols-2
        "
      >

        <div>

          <button
            onClick={() =>
              setIsFullscreen(
                true
              )
            }
            className="
              overflow-hidden
              rounded-[40px]
              border
              border-black/5
              bg-neutral-100
              transition
              hover:scale-[1.01]
            "
          >

            <Image
              src={activeImage}
              alt={product.title}
              width={1600}
              height={1600}
              className="
                h-full
                w-full
                object-cover
              "
              priority
            />

          </button>

          <div
            className="
              mt-6
              grid
              grid-cols-4
              gap-4
            "
          >

            {
              galleryImages.map(
                (
                  image,
                  index
                ) => (

                  <button
                    key={index}
                    onClick={() =>
                      setActiveImage(
                        image
                      )
                    }
                    className={`
                      overflow-hidden
                      rounded-[24px]
                      border
                      transition

                      ${
                        activeImage === image

                          ? "border-black ring-2 ring-black"

                          : "border-black/10 hover:border-black/40"
                      }
                    `}
                  >

                    <Image
                      src={image}
                      alt={product.title}
                      width={400}
                      height={400}
                      className="
                        aspect-square
                        h-full
                        w-full
                        object-cover
                      "
                    />

                  </button>
                )
              )
            }

          </div>

        </div>

        <div
          className="
            lg:sticky
            lg:top-32
            lg:h-fit
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

            {product.category}

          </div>

          <h1
            className="
              mt-6
              text-5xl
              font-bold
              tracking-tight
              md:text-6xl
            "
          >

            {product.title}

          </h1>

          <p
            className="
              mt-8
              text-lg
              leading-8
              text-black/60
            "
          >

            {product.description}

          </p>

          <div
            className="
              mt-10
              flex
              flex-wrap
              gap-4
            "
          >

            <button
              onClick={() =>
                setIsInquiryOpen(
                  true
                )
              }
              className="
                flex
                items-center
                gap-2
                rounded-full
                bg-black
                px-8
                py-4
                text-white
                transition
                hover:scale-105
              "
            >

              Request Quote

              <ArrowRight
                className="
                  h-4
                  w-4
                "
              />

            </button>

            <button
              className="
                rounded-full
                border
                border-black/10
                px-8
                py-4
                transition
                hover:bg-black
                hover:text-white
              "
            >

              Download Catalog

            </button>

          </div>

          <div
            className="
              mt-16
              grid
              gap-4
              sm:grid-cols-3
            "
          >

            <div
              className="
                rounded-[28px]
                border
                border-black/5
                bg-neutral-50
                p-6
              "
            >

              <div
                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-black/40
                "
              >

                MOQ

              </div>

              <div
                className="
                  mt-3
                  text-2xl
                  font-bold
                "
              >

                100+

              </div>

            </div>

            <div
              className="
                rounded-[28px]
                border
                border-black/5
                bg-neutral-50
                p-6
              "
            >

              <div
                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-black/40
                "
              >

                Lead Time

              </div>

              <div
                className="
                  mt-3
                  text-2xl
                  font-bold
                "
              >

                7-14d

              </div>

            </div>

            <div
              className="
                rounded-[28px]
                border
                border-black/5
                bg-neutral-50
                p-6
              "
            >

              <div
                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-black/40
                "
              >

                OEM / ODM

              </div>

              <div
                className="
                  mt-3
                  text-2xl
                  font-bold
                "
              >

                Yes

              </div>

            </div>

          </div>

        </div>

      </Container>

    </motion.section>
  );
}