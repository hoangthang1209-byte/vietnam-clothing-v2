"use client";

import Image
from "next/image";

import {
  X,
} from "lucide-react";

type Props = {

  image: string;

  title: string;

  isOpen: boolean;

  setIsOpen:
    (
      value: boolean
    ) => void;
};

export default function ProductFullscreenModal({

  image,

  title,

  isOpen,

  setIsOpen,

}: Props) {

  if (
    !isOpen
  ) {

    return null;
  }

  return (

    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-black/95
        p-6
      "
    >

      <button
        onClick={() =>
          setIsOpen(
            false
          )
        }
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
          backdrop-blur-xl
          transition
          hover:bg-white/20
        "
      >

        <X
          className="
            h-6
            w-6
          "
        />

      </button>

      <Image
        src={image}
        alt={title}
        width={2000}
        height={2000}
        className="
          max-h-[90vh]
          w-auto
          rounded-[32px]
          object-contain
        "
        priority
      />

    </div>
  );
}