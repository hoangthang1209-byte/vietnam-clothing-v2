"use client";

import Link
from "next/link";

import {
  useState,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

export default function Navbar() {

  const [
    open,
    setOpen,
  ] = useState(false);

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
            bg-white/90
            px-6
            py-4
            shadow-[0_10px_30px_rgba(0,0,0,0.06)]
            backdrop-blur-2xl
          "
        >

          <Link
            href="/en"
            className="
              text-xl
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

            <Link
              href="/en/products"
              className="
                transition
                hover:text-black
              "
            >

              Products

            </Link>

            <Link
              href="/en/about"
              className="
                transition
                hover:text-black
              "
            >

              About

            </Link>

            <Link
              href="/en/contact"
              className="
                transition
                hover:text-black
              "
            >

              Contact

            </Link>

            <Link
              href="/en/blog"
              className="
                transition
                hover:text-black
              "
            >

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
                duration-300
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
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-black/10
              bg-white
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

        {
          open && (

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

              transition={{
                duration: 0.25,
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

              <button
                onClick={() =>
                  setOpen(false)
                }
                className="
                  absolute
                  right-6
                  top-6
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/10
                  text-2xl
                "
              >

                ×

              </button>

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
                  onClick={() =>
                    setOpen(false)
                  }
                >

                  Products

                </Link>

                <Link
                  href="/en/about"
                  onClick={() =>
                    setOpen(false)
                  }
                >

                  About

                </Link>

                <Link
                  href="/en/contact"
                  onClick={() =>
                    setOpen(false)
                  }
                >

                  Contact

                </Link>

                <Link
                  href="/en/blog"
                  onClick={() =>
                    setOpen(false)
                  }
                >

                  Blog

                </Link>

                <Link
                  href="/en/contact"
                  onClick={() =>
                    setOpen(false)
                  }
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
          )
        }

      </AnimatePresence>

    </>
  );
}