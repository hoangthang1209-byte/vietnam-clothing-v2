const items = [

  {
    title:
      "OEM & ODM Expertise",

    description:
      "Full-service apparel manufacturing solutions from concept development to large-scale production.",
  },

  {
    title:
      "Premium Quality Standards",

    description:
      "Strict production control and international quality standards for global apparel brands.",
  },

  {
    title:
      "Flexible Production Capacity",

    description:
      "From startup brands to enterprise orders, we support scalable manufacturing solutions.",
  },

  {
    title:
      "Global Export Experience",

    description:
      "Extensive export experience serving international fashion and merchandise projects worldwide.",
  },

  {
    title:
      "Fast Sampling & Development",

    description:
      "Rapid sampling and product development workflow for efficient production timelines.",
  },

  {
    title:
      "Reliable Manufacturing Partner",

    description:
      "Long-term apparel manufacturing partnership focused on quality, communication and reliability.",
  },
];

export default function WhyChooseUs() {

  return (

    <section
      className="
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

            Why Vietnam Clothing

          </div>

          <h2
            className="
              mt-6
              text-6xl
              font-bold
              tracking-tight
            "
          >

            Built For
            Global Apparel
            Production

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

            Vietnam Clothing delivers
            premium OEM & ODM apparel
            manufacturing services
            with scalable production,
            international standards
            and export-ready solutions.

          </p>

        </div>

        <div
          className="
            grid
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >

          {
            items.map(
              (
                item,
                index
              ) => (

                <div
                  key={index}
                  className="
                    rounded-[36px]
                    border
                    border-black/5
                    bg-neutral-50
                    p-10
                    transition
                    hover:-translate-y-1
                    hover:bg-white
                    hover:shadow-xl
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
                      item.title
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
                      item.description
                    }

                  </p>

                </div>
              )
            )
          }

        </div>

      </div>

    </section>
  );
}