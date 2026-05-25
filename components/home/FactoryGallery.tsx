import Image
from "next/image";

const images = [

  "/factory/factory-1.jpg",

  "/factory/factory-2.jpg",

  "/factory/factory-3.jpg",

  "/factory/factory-4.jpg",
];

export default function FactoryGallery() {

  return (

    <section
      className="
        px-6
        py-24
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
            flex
            flex-col
            gap-10
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >

          <div
            className="
              max-w-3xl
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

              Factory Environment

            </div>

            <h2
              className="
                mt-6
                text-5xl
                font-black
                tracking-tight
              "
            >

              Inside Our
              Vietnam Clothing
              Factory

            </h2>

          </div>

        </div>

        <div
          className="
            mt-16
            grid
            gap-6
            md:grid-cols-2
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
                    group
                    overflow-hidden
                    rounded-[40px]
                  "
                >

                  <Image
                    src={image}
                    alt="Factory"
                    width={1400}
                    height={1400}
                    className="
                      aspect-[4/3]
                      w-full
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-105
                    "
                  />

                </div>
              )
            )
          }

        </div>

      </div>

    </section>
  );
}