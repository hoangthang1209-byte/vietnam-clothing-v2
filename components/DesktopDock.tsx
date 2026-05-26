"use client";

import Link
from "next/link";

export default function DesktopDock() {

  return (

    <div
      className="
        hidden
        md:flex
        fixed
        bottom-6
        left-1/2
        z-50
        -translate-x-1/2
        items-center
        gap-4
        rounded-full
        border
        border-white/20
        bg-white/70
        px-5
        py-4
        shadow-[0_20px_60px_rgba(0,0,0,0.12)]
        backdrop-blur-2xl
      "
    >

      <div
        className="
          px-3
        "
      >

        <p
          className="
            text-xs
            uppercase
            tracking-[0.25em]
            text-neutral-500
          "
        >

          Vietnam Clothing

        </p>

        <p
          className="
            mt-1
            text-sm
            font-medium
          "
        >

          Premium OEM Apparel Manufacturer

        </p>

      </div>

      <div
        className="
          h-10
          w-px
          bg-black/10
        "
      />

      <Link
        href="https://wa.me/84867401618"
        target="_blank"
        className="
          rounded-full
          bg-[#25D366]
          px-5
          py-3
          text-sm
          font-medium
          text-white
          transition
          hover:scale-105
        "
      >

        WhatsApp

      </Link>

      <Link
        href="/en/contact"
        className="
          rounded-full
          bg-black
          px-5
          py-3
          text-sm
          font-medium
          text-white
          transition
          hover:scale-105
        "
      >

        Get Quote

      </Link>

    </div>
  );
}