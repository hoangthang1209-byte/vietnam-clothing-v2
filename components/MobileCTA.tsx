"use client";

import Link
from "next/link";

export default function MobileCTA() {

  return (

    <div
      className="
        fixed
        bottom-4
        left-1/2
        z-50
        w-[92%]
        -translate-x-1/2
        rounded-[28px]
        border
        border-white/20
        bg-white/80
        p-2
        shadow-[0_20px_60px_rgba(0,0,0,0.12)]
        backdrop-blur-2xl
        md:hidden
      "
    >

      <div
        className="
          grid
          grid-cols-4
          gap-2
        "
      >

        <Link
          href="https://wa.me/84867401618"
          target="_blank"
          className="
            rounded-2xl
            bg-[#25D366]
            px-3
            py-3
            text-center
            text-xs
            font-semibold
            text-white
          "
        >

          WA

        </Link>

        <Link
          href="https://zalo.me/0867401618"
          target="_blank"
          className="
            rounded-2xl
            bg-[#0068FF]
            px-3
            py-3
            text-center
            text-xs
            font-semibold
            text-white
          "
        >

          Zalo

        </Link>

        <Link
          href="tel:0867401618"
          className="
            rounded-2xl
            bg-neutral-100
            px-3
            py-3
            text-center
            text-xs
            font-semibold
            text-black
          "
        >

          Call

        </Link>

        <Link
          href="/en/contact"
          className="
            rounded-2xl
            bg-black
            px-3
            py-3
            text-center
            text-xs
            font-semibold
            text-white
          "
        >

          Quote

        </Link>

      </div>

    </div>
  );
}