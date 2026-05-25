"use client";

import Link
from "next/link";

const navItems = [

  {
    label:
      "Products",

    href:
      "/en/products",
  },

  {
    label:
      "Blog",

    href:
      "/en/blog",
  },

  {
    label:
      "Factory",

    href:
      "/en/factory",
  },

  {
    label:
      "About",

    href:
      "/en/about",
  },

  {
    label:
      "Contact",

    href:
      "/en/contact",
  },
];

export default function Navbar() {

  return (

    <header
      className="
        fixed
        left-0
        top-0
        z-50
        w-full
      "
    >

      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-6
          py-8
        "
      >

        <Link
          href="/en"
          className="
            text-3xl
            font-extrabold
            tracking-[-0.04em]
          "
        >

          Vietnam Clothing

        </Link>

        <nav
          className="
            hidden
            items-center
            gap-10
            md:flex
          "
        >

          {
            navItems.map(
              (
                item
              ) => (

                <Link
                  key={
                    item.href
                  }

                  href={
                    item.href
                  }

                  className="
                    text-sm
                    font-medium
                    text-black/65
                    transition
                    duration-300
                    hover:text-black
                  "
                >

                  {
                    item.label
                  }

                </Link>
              )
            )
          }

        </nav>

        <Link
          href="/en/contact"
          className="
            rounded-full
            bg-black
            px-8
            py-4
            text-sm
            font-semibold
            text-white
            transition
            duration-300
            hover:scale-105
          "
        >

          Request Quote

        </Link>

      </div>

    </header>
  );
}