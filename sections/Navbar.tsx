"use client";

import Link
from "next/link";

export default function Navbar() {

  return (

    <header
      className="
        fixed
        top-0
        z-50
        w-full
        border-b
        border-neutral-200/60
        bg-white/80
        backdrop-blur-xl
        supports-[backdrop-filter]:bg-white/60
      "
    >

      <div
        className="
          mx-auto
          flex
          h-16
          max-w-7xl
          items-center
          justify-between
          px-5
          md:h-20
          lg:px-8
        "
      >

        <Link
          href="/en"
          className="
            text-base
            font-semibold
            tracking-tight
            md:text-lg
          "
        >

          Vietnam Clothing

        </Link>

        <nav
          className="
            hidden
            items-center
            gap-6
            text-sm
            md:flex
          "
        >

          <Link
            href="/en/products"
            className="
              transition
              hover:text-neutral-500
            "
          >

            Uniforms

          </Link>

          <Link
            href="/en/products"
            className="
              transition
              hover:text-neutral-500
            "
          >

            Merchandise

          </Link>

          <Link
            href="/en/collections"
            className="
              transition
              hover:text-neutral-500
            "
          >

            Corporate Gifts

          </Link>

          <Link
            href="/en/about"
            className="
              transition
              hover:text-neutral-500
            "
          >

            Industries

          </Link>

          <Link
            href="/en/blog"
            className="
              transition
              hover:text-neutral-500
            "
          >

            Case Studies

          </Link>

        </nav>

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
            duration-300
            hover:scale-105
            hover:bg-neutral-800
          "
        >

          Get Quote

        </Link>

      </div>

    </header>
  );
}