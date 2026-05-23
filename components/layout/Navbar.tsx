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

export default function Navbar() {

  const [
    isVisible,
    setIsVisible,
  ] = useState(
    true
  );

  const [
    lastScrollY,
    setLastScrollY,
  ] = useState(
    0
  );

  const [
    isMenuOpen,
    setIsMenuOpen,
  ] = useState(
    false
  );

  useEffect(
    () => {

      const handleScroll =
        () => {

          const currentScrollY =
            window.scrollY;

          if (
            currentScrollY <
            80
          ) {

            setIsVisible(
              true
            );

          } else {

            setIsVisible(
              currentScrollY <
              lastScrollY
            );
          }

          setLastScrollY(
            currentScrollY
          );
        };

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
    [
      lastScrollY,
    ]
  );

  return (

    <AnimatePresence>

      {
        isVisible && (

          <motion.header
            initial={{
              y: -100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -100,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              fixed
              left-0
              top-0
              z-50
              w-full
            "
          >

            <div className="mx-auto max-w-7xl px-6 pt-6">

              <div
                className="
                  flex
                  items-center
                  justify-between
                  rounded-full
                  border
                  border-white/10
                  bg-white/70
                  px-6
                  py-4
                  shadow-xl
                  backdrop-blur-2xl
                "
              >

                <Link
                  href="/"
                  className="
                    text-lg
                    font-bold
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

                  <Link
                    href="/products"
                    className="
                      text-sm
                      text-black/60
                      transition
                      hover:text-black
                    "
                  >

                    Products

                  </Link>

                  <Link
                    href="/about"
                    className="
                      text-sm
                      text-black/60
                      transition
                      hover:text-black
                    "
                  >

                    About

                  </Link>

                  <Link
                    href="/contact"
                    className="
                      text-sm
                      text-black/60
                      transition
                      hover:text-black
                    "
                  >

                    Contact

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

          </motion.header>
        )
      }

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

                <Link
                  href="/products"
                  className="
                    text-2xl
                    font-semibold
                  "
                >

                  Products

                </Link>

                <Link
                  href="/about"
                  className="
                    text-2xl
                    font-semibold
                  "
                >

                  About

                </Link>

                <Link
                  href="/contact"
                  className="
                    text-2xl
                    font-semibold
                  "
                >

                  Contact

                </Link>

              </div>

            </motion.div>

          </motion.div>
        )
      }

    </AnimatePresence>
  );
}