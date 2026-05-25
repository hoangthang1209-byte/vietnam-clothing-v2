"use client";

import ProductInquiryDrawer
from "@/components/products/ProductInquiryDrawer";

type Props = {

  product: any;
};

export default function ProductStickyCTA({

  product,

}: Props) {

  return (

    <div
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-50
        border-t
        border-black/10
        bg-white/90
        p-4
        backdrop-blur
        md:hidden
      "
    >

      <div
        className="
          flex
          items-center
          justify-between
          gap-4
        "
      >

        <div>

          <div
            className="
              text-xs
              uppercase
              tracking-[0.2em]
              text-black/40
            "
          >

            OEM Product

          </div>

          <div
            className="
              mt-1
              text-sm
              font-semibold
            "
          >

            {
              product.title
            }

          </div>

        </div>

        <ProductInquiryDrawer
          product={
            product
          }
        />

      </div>

    </div>
  );
}