const features = [

  {
    title:
      "Premium Quality",

    description:
      "Strict quality control standards for global apparel manufacturing.",
  },

  {
    title:
      "OEM / ODM Support",

    description:
      "Full-package clothing production for private label brands.",
  },

  {
    title:
      "Flexible MOQ",

    description:
      "Support for startups, fashion brands and large-scale production.",
  },

  {
    title:
      "Global Export",

    description:
      "Worldwide shipping and export support for international clients.",
  },
];

export default function WhyChooseUs() {

  return (

    <section
      className="
        border-y
        border-black/10
        bg-neutral-50
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
            grid
            gap-20
            lg:grid-cols-2
          "
        >

          <div>

            <div
              className="
                text-sm
                uppercase
                tracking-[0.3em]
                text-black/40
              "
            >

              Why Vietnam Clothing

            </div>

            <h2
              className="
                mt-6
                text-6xl
                font-black
                tracking-tight
              "
            >

              Trusted Apparel
              Manufacturing
              Partner

            </h2>

            <p
              className="
                mt-10
                max-w-xl
                text-lg
                leading-9
                text-black/60
              "
            >

              We help fashion brands,
              businesses and global
              clients build premium
              apparel collections with
              reliable OEM production
              in Vietnam.

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
              features.map(
                (
                  feature
                ) => (

                  <div
                    key={
                      feature.title
                    }
                    className="
                      rounded-[32px]
                      bg-white
                      p-10
                    "
                  >

                    <div
                      className="
                        text-3xl
                        font-black
                        tracking-tight
                      "
                    >

                      {
                        feature.title
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
                        feature.description
                      }

                    </p>

                  </div>
                )
              )
            }

          </div>

        </div>

      </div>

    </section>
  );
}