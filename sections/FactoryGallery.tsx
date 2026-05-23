import Image
from "next/image";

const images = [

  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1600&auto=format&fit=crop",
];

export default function FactoryGallery() {

  return (

    <section
      className="
        border-y
        border-black/5
        bg-neutral-50
        py-32
      "
    >

      <div
        className="
          mx-auto
          max-w-7xl
          px-6
        "
      >

        <div
          className="
            mb-20
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

            Factory & Production

          </div>

          <h2
            className="
              mt-6
              text-6xl
              font-bold
              tracking-tight
            "
          >

            Manufacturing
            Excellence

          </h2>

          <p
            className="
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-black/60
            "
          >

            From sampling and
            fabric sourcing to
            large-scale production,
            Vietnam Clothing delivers
            premium apparel manufacturing
            solutions with international
            quality standards.

          </p>

        </div>

        <div
          className="
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
                    overflow-hidden
                    rounded-[40px]
                  "
                >

                  <Image
                    src={image}
                    alt="Factory Gallery"
                    width={1600}
                    height={1200}
                    className="
                      h-[500px]
                      w-full
                      object-cover
                      transition
                      duration-700
                      hover:scale-105
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