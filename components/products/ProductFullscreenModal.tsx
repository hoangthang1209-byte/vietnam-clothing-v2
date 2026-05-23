"use client";

import Image
from "next/image";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  X,
} from "lucide-react";

type Props = {

  image: string;

  isOpen: boolean;

  onClose: () => void;
};

export default function ProductFullscreen({

  image,

  isOpen,

  onClose,

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
              bg-black/90
              p-6
            "
          >

            <button
              onClick={onClose}
              className="
                absolute
                right-6
                top-6
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-white
                backdrop-blur
              "
            >

              <X
                className="
                  h-6
                  w-6
                "
              />

            </button>

            <motion.div
              initial={{
                scale: 0.92,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.92,
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                relative
                max-h-[90vh]
                max-w-6xl
                overflow-hidden
                rounded-[40px]
              "
            >

              <Image
                src={image}
                alt="Product"
                width={2000}
                height={2000}
                className="
                  h-full
                  w-full
                  object-contain
                "
              />

            </motion.div>

          </motion.div>
        )
      }

    </AnimatePresence>
  );
}