"use client";

import Link
from "next/link";

export default function MobileCTA() {

  return (

    <div
      className="
        fixed
        bottom-0
        left-0
        z-50
        w-full
        border-t
        border-black/10
        bg-white/80
        p-3
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

          WhatsApp

        </Link>

        <Link
          href="https://zalo.me/0867401618"
          target="_blank"
          className="
            rounded-2xl
            bg-blue-500
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
            border
            border-black/10
            bg-white
            px-3
            py-3
            text-center
            text-xs
            font-semibold
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