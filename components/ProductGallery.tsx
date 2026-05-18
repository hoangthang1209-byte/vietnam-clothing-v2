"use client";
import Image from "next/image";
import { useState } from "react";

type Props = {
  images: string[];
};

export default function ProductGallery({
  images,
}: Props) {
  const [activeImage, setActiveImage] =
    useState(images[0]);

  return (
    <div>

      <div className="overflow-hidden rounded-[32px] bg-neutral-100">

      <Image
  src={activeImage}
  alt=""
  width={1200}
  height={1200}
  className="h-full w-full object-cover"
/>

      </div>

      <div className="mt-6 flex gap-4">

        {images.map((image) => (
          <button
            key={image}
            onClick={() => setActiveImage(image)}
            className={`overflow-hidden rounded-2xl border-2 ${
              activeImage === image
                ? "border-black"
                : "border-transparent"
            }`}
          >

<Image
  src={image}
  alt=""
  width={200}
  height={200}
  className="h-24 w-24 object-cover"
/>

          </button>
        ))}

      </div>

    </div>
  );
}