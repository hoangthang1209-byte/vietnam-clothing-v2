"use client";

import {
  motion,
} from "framer-motion";

import {
  ArrowRight,
} from "lucide-react";

import type {
  Product,
} from "@/types/product";

type Props = {

  product: Product;

  setIsInquiryOpen:
    (
      value: boolean
    ) => void;
};

export default function ProductCTASection({

  product,

  setIsInquiryOpen,

}: Props) {

  return (

    <section className="py-32">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            overflow-hidden
            rounded-[48px]
            bg-black
            px-10
            py-20
            text-white
          "
        >

          <div
            className="
              mx-auto
              max-w-4xl
              text-center
            "
          >

            <div
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-white/50
              "
            >

              Start Your Production

            </div>

            <h2
              className="
                mt-6
                text-5xl
                font-bold
                tracking-tight
              "
            >

              Ready To Build
              Your Next Apparel
              Collection?

            </h2>

            <p
              className="
                mx-auto
                mt-8
                max-w-2xl
                text-lg
                leading-8
                text-white/60
              "
            >

              OEM & ODM apparel
              manufacturing solutions
              optimized for modern
              brands, startups,
              and enterprise production.

            </p>

            <button
              onClick={() =>
                setIsInquiryOpen(
                  true
                )
              }
              className="
                mt-10
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-white
                px-8
                py-4
                font-medium
                text-black
                transition
                hover:scale-105
              "
            >

              Request Production Quote

              <ArrowRight
                className="
                  h-4
                  w-4
                "
              />

            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}