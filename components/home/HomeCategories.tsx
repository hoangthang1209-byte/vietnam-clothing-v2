import Link
from "next/link";

const categories = [

  {
    title:
      "T-Shirts",

    description:
      "Premium cotton t-shirt manufacturing.",

    href:
      "/en/products/category/tshirts",
  },

  {
    title:
      "Hoodies",

    description:
      "Heavyweight and streetwear hoodie production.",

    href:
      "/en/products/category/hoodies",
  },

  {
    title:
      "Sportswear",

    description:
      "Performance activewear and sports apparel.",

    href:
      "/en/products/category/sportswear",
  },

  {
    title:
      "Uniforms",

    description:
      "Corporate and team uniform manufacturing.",

    href:
      "/en/products/category/uniforms",
  },
];

export default function HomeCategories() {

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

            Product Categories

          </div>

          <h2
            className="
              mt-6
              text-5xl
              font-black
              tracking-tight
            "
          >

            Apparel Manufacturing
            Solutions

          </h2>

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
            categories.map(
              (
                category
              ) => (

                <Link
                  key={
                    category.title
                  }

                  href={
                    category.href
                  }

                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[40px]
                    border
                    border-black/10
                    bg-neutral-50
                    p-10
                    transition
                    hover:-translate-y-1
                    hover:bg-black
                    hover:text-white
                  "
                >

                  <div
                    className="
                      absolute
                      right-0
                      top-0
                      h-40
                      w-40
                      rounded-full
                      bg-black/5
                      blur-3xl
                      transition
                      group-hover:bg-white/10
                    "
                  />

                  <div
                    className="
                      relative
                    "
                  >

                    <div
                      className="
                        text-sm
                        uppercase
                        tracking-[0.2em]
                        text-black/40
                        transition
                        group-hover:text-white/50
                      "
                    >

                      Category

                    </div>

                    <h3
                      className="
                        mt-6
                        text-4xl
                        font-black
                        tracking-tight
                      "
                    >

                      {
                        category.title
                      }

                    </h3>

                    <p
                      className="
                        mt-6
                        max-w-sm
                        leading-8
                        text-black/60
                        transition
                        group-hover:text-white/70
                      "
                    >

                      {
                        category.description
                      }

                    </p>

                    <div
                      className="
                        mt-10
                        inline-flex
                        items-center
                        text-sm
                        font-semibold
                      "
                    >

                      Explore Category →

                    </div>

                  </div>

                </Link>
              )
            )
          }

        </div>

      </div>

    </section>
  );
}