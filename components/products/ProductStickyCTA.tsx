"use client";

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

export default function ProductStickyCTA({

  product,

  setIsInquiryOpen,

}: Props) {

  return (

    <div
      className="
        fixed
        bottom-6
        left-1/2
        z-50
        w-[calc(100%-2rem)]
        max-w-4xl
        -translate-x-1/2
      "
    >

      <div
        className="
          flex
          items-center
          justify-between
          rounded-[32px]
          border
          border-white/20
          bg-black/80
          px-6
          py-4
          text-white
          shadow-2xl
          backdrop-blur-2xl
        "
      >

        <div>

          <div
            className="
              text-xs
              uppercase
              tracking-[0.2em]
              text-white/50
            "
          >

            Ready To Produce

          </div>

          <div
            className="
              mt-1
              text-xl
              font-semibold
            "
          >

            {product.title}

          </div>

        </div>

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
            bg-white
            px-6
            py-3
            font-medium
            text-black
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

      </div>

    </div>
  );
}