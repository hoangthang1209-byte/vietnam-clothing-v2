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
        p-3
        shadow-[0_20px_60px_rgba(0,0,0,0.12)]
        backdrop-blur-2xl
      "
    >

      <p
        className="
          px-4
          text-sm
          font-medium
          text-neutral-700
          whitespace-nowrap
        "
      >

        Start your OEM apparel project with Vietnam Clothing

      </p>

      <Link
        href="/en/contact"
        className="
          rounded-full
          bg-black
          px-6
          py-3
          text-sm
          font-medium
          text-white
          transition
          duration-300
          hover:scale-105
          hover:bg-neutral-800
        "
      >

        Get Quote

      </Link>

    </div>
  );
}