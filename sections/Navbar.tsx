"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] =
    useState(false);

  return (
    <>
      <header
        className="
          fixed
          top-0
          z-50
          w-full
          px-4
          pt-4
          md:px-6
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between
            rounded-full
            border
            border-white/20
            bg-white/70
            px-6
            py-4
            shadow-[0_8px_40px_rgba(0,0,0,0.08)]
            backdrop-blur-2xl
          "
        >
          <Link
            href="/en"
            className="
              text-lg
              font-black
              tracking-tight
            "
          >
            Vietnam Clothing
          </Link>

          <nav
            className="
              hidden
              items-center
              gap-8
              text-sm
              font-medium
              text-neutral-700
              md:flex
            "
          >
            <Link href="/en/products">
              Products
            </Link>

            <Link href="/en/about">
              About
            </Link>

            <Link href="/en/contact">
              Contact
            </Link>

            <Link href="/en/blog">
              Blog
            </Link>
          </nav>

          <div
            className="
              hidden
              md:block
            "
          >
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
                hover:bg-neutral-800
              "
            >
              Get Quote
            </Link>
          </div>

          <button
            onClick={() =>
              setOpen(!open)
            }
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-black/10
              md:hidden
            "
          >
            <div
              className="
                space-y-1
              "
            >
              <div
                className="
                  h-[2px]
                  w-5
                  bg-black
                "
              />

              <div
                className="
                  h-[2px]
                  w-5
                  bg-black
                "
              />
            </div>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            className="
              fixed
              inset-0
              z-40
              bg-white
              px-6
              pt-32
            "
          >
            <div
              className="
                flex
                flex-col
                gap-6
                text-2xl
                font-semibold
              "
            >
              <Link
                href="/en/products"
              >
                Products
              </Link>

              <Link
                href="/en/about"
              >
                About
              </Link>

              <Link
                href="/en/contact"
              >
                Contact
              </Link>

              <Link
                href="/en/blog"
              >
                Blog
              </Link>

              <Link
                href="/en/contact"
                className="
                  mt-6
                  rounded-full
                  bg-black
                  px-6
                  py-4
                  text-center
                  text-base
                  text-white
                "
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}