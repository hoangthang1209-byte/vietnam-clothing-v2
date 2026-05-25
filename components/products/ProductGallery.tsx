"use client";

import {
  useState,
} from "react";

import Image
from "next/image";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  X,
} from "lucide-react";

type Props = {

  images: string[];

  title: string;
};

export default function ProductGallery({

  images,

  title,

}: Props) {

  const [
    activeImage,
    setActiveImage,
  ] = useState<
    string | null
  >(null);

  return (

    <>

      <div
        className="
          grid
          gap-4
          md:grid-cols-2
        "
      >

        {
          images.map(
            (
              image,
              index
            ) => (

              <button
                key={index}

                onClick={() =>
                  setActiveImage(
                    image
                  )
                }

                className="
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-black/10
                "
              >

                <Image
                  src={image}
                  alt={title}
                  width={1000}
                  height={1000}
                  className="
                    aspect-square
                    w-full
                    object-cover
                    transition
                    hover:scale-[1.02]
                  "
                />

              </button>
            )
          )
        }

      </div>

      <AnimatePresence>

        {
          activeImage && (

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
                onClick={() =>
                  setActiveImage(
                    null
                  )
                }
                className="
                  absolute
                  right-6
                  top-6
                  z-10
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  text-white
                "
              >

                <X
                  className="
                    h-5
                    w-5
                  "
                />

              </button>

              <motion.div
                initial={{
                  scale: 0.96,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                exit={{
                  scale: 0.96,
                  opacity: 0,
                }}
                className="
                  relative
                  w-full
                  max-w-5xl
                  overflow-hidden
                  rounded-[32px]
                "
              >

                <Image
                  src={
                    activeImage
                  }
                  alt={title}
                  width={2000}
                  height={2000}
                  className="
                    max-h-[85vh]
                    w-full
                    object-contain
                  "
                />

              </motion.div>

            </motion.div>
          )
        }

      </AnimatePresence>

    </>
  );
}