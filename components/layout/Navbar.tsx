"use client";

import Link
from "next/link";

import {
  useEffect,
  useState,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Menu,
  X,
} from "lucide-react";

const navLinks = [

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

  const [
    scrolled,
    setScrolled,
  ] = useState(
    false
  );

  const [
    isMenuOpen,
    setIsMenuOpen,
  ] = useState(
    false
  );

  useEffect(
    () => {

      function handleScroll() {

        setScrolled(
          window.scrollY > 20
        );
      }

      window.addEventListener(
        "scroll",
        handleScroll
      );

      return () =>
        window.removeEventListener(
          "scroll",
          handleScroll
        );

    },
    []
  );

  return (

    <>

      <header
        className={`
          fixed
          left-0
          top-0
          z-50
          w-full
          transition-all
          duration-300
          ${
            scrolled

              ? "py-4"

              : "py-6"
          }
        `}
      >

        <div
          className="
            mx-auto
            max-w-7xl
            px-6
          "
        >

          <div
            className={`
              flex
              items-center
              justify-between
              rounded-full
              border
              px-6
              py-4
              transition-all
              duration-300
              ${
                scrolled

                  ? `
                    border-black/5
                    bg-white/80
                    shadow-xl
                    backdrop-blur-2xl
                  `

                  : `
                    border-transparent
                    bg-white/60
                    backdrop-blur-xl
                  `
              }
            `}
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

            <div
              className="
                hidden
                items-center
                gap-8
                md:flex
              "
            >

              {
                navLinks.map(
                  (
                    item
                  ) => (

                    <Link
                      key={
                        item.label
                      }

                      href={
                        item.href
                      }

                      className="
                        text-sm
                        text-black/60
                        transition
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

            </div>

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
                  px-6
                  py-3
                  text-sm
                  font-medium
                  text-white
                "
              >

                Request Quote

              </Link>

            </div>

            <button
              onClick={() =>
                setIsMenuOpen(
                  true
                )
              }

              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-black
                text-white
                md:hidden
              "
            >

              <Menu
                className="
                  h-5
                  w-5
                "
              />

            </button>

          </div>

        </div>

      </header>

      <AnimatePresence>

        {
          isMenuOpen && (

            <motion.div
              initial={{
                opacity: 0,
              }}

              animate={{
                opacity: 1,
              }}

              exit={{
                opacity: 0,
              }}

              className="
                fixed
                inset-0
                z-[100]
                bg-black/40
                backdrop-blur-sm
                md:hidden
              "
            >

              <motion.div
                initial={{
                  x: "100%",
                }}

                animate={{
                  x: 0,
                }}

                exit={{
                  x: "100%",
                }}

                transition={{
                  duration: 0.3,
                }}

                className="
                  absolute
                  right-0
                  top-0
                  flex
                  h-full
                  w-[85%]
                  max-w-sm
                  flex-col
                  bg-white
                  p-8
                "
              >

                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >

                  <div
                    className="
                      text-lg
                      font-bold
                    "
                  >

                    Menu

                  </div>

                  <button
                    onClick={() =>
                      setIsMenuOpen(
                        false
                      )
                    }

                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-neutral-100
                    "
                  >

                    <X
                      className="
                        h-5
                        w-5
                      "
                    />

                  </button>

                </div>

                <div
                  className="
                    mt-12
                    flex
                    flex-col
                    gap-6
                  "
                >

                  {
                    navLinks.map(
                      (
                        item
                      ) => (

                        <Link
                          key={
                            item.label
                          }

                          href={
                            item.href
                          }

                          onClick={() =>
                            setIsMenuOpen(
                              false
                            )
                          }

                          className="
                            text-2xl
                            font-semibold
                          "
                        >

                          {
                            item.label
                          }

                        </Link>
                      )
                    )
                  }

                </div>

                <div
                  className="
                    mt-auto
                  "
                >

                  <Link
                    href="/en/contact"

                    onClick={() =>
                      setIsMenuOpen(
                        false
                      )
                    }

                    className="
                      flex
                      items-center
                      justify-center
                      rounded-full
                      bg-black
                      px-8
                      py-5
                      text-sm
                      font-semibold
                      text-white
                    "
                  >

                    Request Quote

                  </Link>

                </div>

              </motion.div>

            </motion.div>
          )
        }

      </AnimatePresence>

    </>
  );
}