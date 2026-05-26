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
        p-4
        backdrop-blur-2xl
        md:hidden
      "
    >

      <div
        className="
          flex
          gap-3
        "
      >

        <Link
          href="tel:+84901234567"
          className="
            flex-1
            rounded-full
            border
            border-black
            px-5
            py-4
            text-center
            text-sm
            font-medium
          "
        >

          Call

        </Link>

        <Link
          href="https://wa.me/84901234567"
          target="_blank"
          className="
            flex-1
            rounded-full
            border
            border-black
            px-5
            py-4
            text-center
            text-sm
            font-medium
          "
        >

          WhatsApp

        </Link>

        <Link
          href="/en/contact"
          className="
            flex-1
            rounded-full
            bg-black
            px-5
            py-4
            text-center
            text-sm
            font-medium
            text-white
          "
        >

          Get Quote

        </Link>

      </div>

    </div>
  );
}