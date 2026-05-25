import Image
from "next/image";

import FactoryProcess
from "@/components/factory/FactoryProcess";

import FactoryCTA
from "@/components/factory/FactoryCTA";

const images = [

  "/factory/factory-1.jpg",

  "/factory/factory-2.jpg",

  "/factory/factory-3.jpg",

  "/factory/factory-4.jpg",

  "/factory/factory-5.jpg",

  "/factory/factory-6.jpg",
];

export default function FactoryPage() {

  return (

    <main
      className="
        bg-white
        text-black
      "
    >

      <section
        className="
          px-6
          pb-24
          pt-40
        "
      >

        <div
          className="
            mx-auto
            max-w-7xl
          "
        >

          <div
            className="
              max-w-4xl
            "
          >

            <div
              className="
                text-sm
                uppercase
                tracking-[0.3em]
                text-black/40
              "
            >

              Factory Showcase

            </div>

            <h1
              className="
                mt-6
                text-6xl
                font-bold
                tracking-tight
              "
            >

              Vietnam Apparel
              Manufacturing Factory

            </h1>

            <p
              className="
                mt-8
                max-w-3xl
                text-lg
                leading-8
                text-black/60
              "
            >

              Explore our apparel
              production environment,
              machinery, quality
              control process and
              OEM manufacturing
              capabilities in Vietnam.

            </p>

          </div>

          <div
            className="
              mt-20
              grid
              gap-6
              md:grid-cols-2
              lg:grid-cols-3
            "
          >

            {
              images.map(
                (
                  image,
                  index
                ) => (

                  <div
                    key={index}
                    className="
                      overflow-hidden
                      rounded-[32px]
                    "
                  >

                    <Image
                      src={image}
                      alt="Factory"
                      width={1200}
                      height={1200}
                      className="
                        aspect-square
                        w-full
                        object-cover
                      "
                    />

                  </div>
                )
              )
            }

          </div>

        </div>

      </section>

      <FactoryProcess />

      <FactoryCTA />

    </main>
  );
}