"use client";

import Image
from "next/image";

type Props = {

  product: any;

  activeImage: string;

  setActiveImage: (
    image: string
  ) => void;

  onOpenFullscreen: () => void;
};

export default function ProductHero({

  product,

  activeImage,

  setActiveImage,

  onOpenFullscreen,

}: Props) {

  return (

    <section
      className="
        pb-24
        pt-40
      "
    >

      <div
        className="
          mx-auto
          grid
          max-w-7xl
          gap-20
          px-6
          lg:grid-cols-2
        "
      >

        <div
          className="
            grid
            gap-6
          "
        >

          <button
            onClick={
              onOpenFullscreen
            }
            className="
              overflow-hidden
              rounded-[40px]
              border
              border-black/10
            "
          >

            <Image
              src={
                activeImage
              }
              alt={
                product.title
              }
              width={1600}
              height={1800}
              className="
                aspect-[4/5]
                w-full
                object-cover
              "
            />

          </button>

          {
            product.gallery?.length > 0 && (

              <div
                className="
                  grid
                  grid-cols-4
                  gap-4
                "
              >

                <button
                  onClick={() =>
                    setActiveImage(
                      product.image
                    )
                  }
                  className={`
                    overflow-hidden
                    rounded-[20px]
                    border

                    ${
                      activeImage ===
                      product.image

                        ? "border-black"

                        : "border-black/10"
                    }
                  `}
                >

                  <Image
                    src={
                      product.image
                    }
                    alt=""
                    width={400}
                    height={400}
                    className="
                      aspect-square
                      w-full
                      object-cover
                    "
                  />

                </button>

                {
                  product.gallery.map(
                    (
                      image: string,
                      index: number
                    ) => (

                      <button
                        key={index}
                        onClick={() =>
                          setActiveImage(
                            image
                          )
                        }
                        className={`
                          overflow-hidden
                          rounded-[20px]
                          border

                          ${
                            activeImage ===
                            image

                              ? "border-black"

                              : "border-black/10"
                          }
                        `}
                      >

                        <Image
                          src={image}
                          alt=""
                          width={400}
                          height={400}
                          className="
                            aspect-square
                            w-full
                            object-cover
                          "
                        />

                      </button>
                    )
                  )
                }

              </div>
            )
          }

        </div>

        <div>

          <div
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-black/40
            "
          >

            {
              product.category
            }

          </div>

          <h1
            className="
              mt-6
              text-6xl
              font-bold
              tracking-tight
            "
          >

            {
              product.title
            }

          </h1>

          <p
            className="
              mt-8
              text-lg
              leading-8
              text-black/60
            "
          >

            {
              product.description
            }

          </p>

          {
            product.features?.length > 0 && (

              <div
                className="
                  mt-10
                  grid
                  gap-3
                "
              >

                {
                  product.features
                    .slice(
                      0,
                      4
                    )
                    .map(
                      (
                        feature: string,
                        index: number
                      ) => (

                        <div
                          key={index}
                          className="
                            flex
                            items-center
                            gap-3
                            text-black/70
                          "
                        >

                          <div
                            className="
                              h-2
                              w-2
                              rounded-full
                              bg-black
                            "
                          />

                          {
                            feature
                          }

                        </div>
                      )
                    )
                }

              </div>
            )
          }

        </div>

      </div>

    </section>
  );
}