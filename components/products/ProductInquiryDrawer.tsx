"use client";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  X,
} from "lucide-react";

type Props = {

  isOpen: boolean;

  onClose: () => void;

  productTitle: string;
};

export default function ProductInquiryModal({

  isOpen,

  onClose,

  productTitle,

}: Props) {

  return (

    <AnimatePresence>

      {
        isOpen && (

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
              z-[999]
              flex
              items-center
              justify-center
              bg-black/40
              p-6
              backdrop-blur-sm
            "
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                relative
                w-full
                max-w-2xl
                rounded-[40px]
                bg-white
                p-10
                shadow-2xl
              "
            >

              <button
                onClick={onClose}
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

              <div
                className="
                  max-w-xl
                "
              >

                <div
                  className="
                    text-xs
                    uppercase
                    tracking-[0.3em]
                    text-black/40
                  "
                >

                  Request Quote

                </div>

                <h2
                  className="
                    mt-6
                    text-5xl
                    font-bold
                    tracking-tight
                  "
                >

                  Start Your
                  Project

                </h2>

                <p
                  className="
                    mt-6
                    leading-8
                    text-black/60
                  "
                >

                  Get quotation,
                  MOQ and production
                  consultation for:

                  <span
                    className="
                      font-semibold
                      text-black
                    "
                  >

                    {" "}
                    {productTitle}

                  </span>

                </p>

              </div>

              <form
                className="
                  mt-12
                  grid
                  gap-5
                "
              >

                <input
                  type="text"
                  placeholder="Your Name"
                  className="
                    rounded-2xl
                    border
                    border-black/10
                    px-6
                    py-4
                    outline-none
                    transition
                    focus:border-black
                  "
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="
                    rounded-2xl
                    border
                    border-black/10
                    px-6
                    py-4
                    outline-none
                    transition
                    focus:border-black
                  "
                />

                <input
                  type="text"
                  placeholder="Company Name"
                  className="
                    rounded-2xl
                    border
                    border-black/10
                    px-6
                    py-4
                    outline-none
                    transition
                    focus:border-black
                  "
                />

                <textarea
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="
                    rounded-2xl
                    border
                    border-black/10
                    px-6
                    py-4
                    outline-none
                    transition
                    focus:border-black
                  "
                />

                <button
                  type="submit"
                  className="
                    mt-4
                    rounded-full
                    bg-black
                    px-8
                    py-4
                    text-white
                    transition
                    hover:scale-[1.02]
                  "
                >

                  Submit Inquiry

                </button>

              </form>

            </motion.div>

          </motion.div>
        )
      }

    </AnimatePresence>
  );
}