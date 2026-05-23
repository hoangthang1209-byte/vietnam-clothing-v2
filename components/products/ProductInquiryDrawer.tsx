"use client";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  X,
} from "lucide-react";

import InquiryForm
from "@/components/forms/InquiryForm";

type Props = {

  isOpen: boolean;

  onClose: () => void;

  productTitle: string;
};

export default function ProductInquiryDrawer({

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

              <div
                className="
                  mt-12
                "
              >

                <InquiryForm />

              </div>

            </motion.div>

          </motion.div>
        )
      }

    </AnimatePresence>
  );
}