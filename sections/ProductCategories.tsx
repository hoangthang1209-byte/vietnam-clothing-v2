import Link
from "next/link";

import Image
from "next/image";

const categories = [

  {
    title:
      "T-Shirts",

    category:
      "Apparel Manufacturing",

    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1600&auto=format&fit=crop",

    href:
      "/en/products/t-shirts",
  },

  {
    title:
      "Hoodies",

    category:
      "OEM Manufacturing",

    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1600&auto=format&fit=crop",

    href:
      "/en/products/hoodies",
  },

  {
    title:
      "Corporate Uniforms",

    category:
      "Uniform Production",

    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1600&auto=format&fit=crop",

    href:
      "/en/products",
  },
];

export default function ProductCategories() {

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
            flex
            flex-col
            justify-between
            gap-10
            lg:flex-row
            lg:items-end
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

              Product Categories

            </div>

            <h2
              className="
                mt-6
                text-6xl
                font-bold
                tracking-tight
              "
            >

              Premium Apparel
              Collections

            </h2>

          </div>

          <p
            className="
              max-w-xl
              text-lg
              leading-8
              text-black/60
            "
          >

            Explore OEM & ODM
            apparel manufacturing
            solutions for fashion
            brands, uniforms and
            merchandise projects.

          </p>

        </div>

        <div
          className="
            grid
            gap-8
            lg:grid-cols-3
          "
        >

          {
            categories.map(
              (
                item,
                index
              ) => (

                <Link
                  key={index}
                  href={
                    item.href
                  }
                  className="
                    group
                    overflow-hidden
                    rounded-[40px]
                    border
                    border-black/5
                    bg-white
                    transition
                    hover:-translate-y-1
                    hover:shadow-2xl
                  "
                >

                  <div
                    className="
                      overflow-hidden
                    "
                  >

                    <Image
                      src={
                        item.image
                      }
                      alt={
                        item.title
                      }
                      width={1600}
                      height={1800}
                      className="
                        aspect-[4/5]
                        h-full
                        w-full
                        object-cover
                        transition
                        duration-700
                        group-hover:scale-105
                      "
                    />

                  </div>

                  <div
                    className="
                      p-8
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

                      {
                        item.category
                      }

                    </div>

                    <h3
                      className="
                        mt-5
                        text-3xl
                        font-bold
                        tracking-tight
                      "
                    >

                      {
                        item.title
                      }

                    </h3>

                    <div
                      className="
                        mt-8
                        inline-flex
                        items-center
                        gap-3
                        rounded-full
                        border
                        border-black/10
                        px-6
                        py-3
                        text-sm
                        transition
                        group-hover:bg-black
                        group-hover:text-white
                      "
                    >

                      Explore Category

                      <span
                        className="
                          transition
                          group-hover:translate-x-1
                        "
                      >

                        →

                      </span>

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