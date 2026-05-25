import Link
from "next/link";

const categories = [

  {
    title:
      "T-Shirts",

    description:
      "Premium OEM t-shirt manufacturing for fashion brands and merchandise projects.",

    href:
      "/en/collections/t-shirts",
  },

  {
    title:
      "Hoodies",

    description:
      "Heavyweight hoodies and streetwear apparel production solutions.",

    href:
      "/en/collections/hoodies",
  },

  {
    title:
      "Uniforms",

    description:
      "Corporate uniforms and team apparel manufacturing with custom branding.",

    href:
      "/en/collections/uniforms",
  },

  {
    title:
      "Sportswear",

    description:
      "Performance activewear and sportswear production for global brands.",

    href:
      "/en/collections/sportswear",
  },
];

export default function FeaturedCategories() {

  return (

    <section
      className="
        py-24
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
              font-bold
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
                category,
                index
              ) => (

                <Link
                  key={index}
                  href={
                    category.href
                  }
                  className="
                    group
                    rounded-[36px]
                    border
                    border-black/10
                    p-10
                    transition
                    hover:border-black
                  "
                >

                  <div
                    className="
                      text-3xl
                      font-bold
                      tracking-tight
                    "
                  >

                    {
                      category.title
                    }

                  </div>

                  <p
                    className="
                      mt-6
                      leading-8
                      text-black/60
                    "
                  >

                    {
                      category.description
                    }

                  </p>

                  <div
                    className="
                      mt-10
                      text-sm
                      uppercase
                      tracking-[0.2em]
                    "
                  >

                    Explore Category

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