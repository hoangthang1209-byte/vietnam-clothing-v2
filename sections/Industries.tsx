const industries = [

  {
    title:
      "Fashion Brands",

    description:
      "OEM & ODM apparel manufacturing solutions for emerging and established fashion labels.",
  },

  {
    title:
      "Corporate Uniforms",

    description:
      "Premium uniforms for enterprises, restaurants, cafés and service businesses.",
  },

  {
    title:
      "Streetwear Labels",

    description:
      "Heavyweight apparel production for modern streetwear and lifestyle brands.",
  },

  {
    title:
      "Merchandise Campaigns",

    description:
      "Custom merchandise production for events, communities and global marketing campaigns.",
  },

  {
    title:
      "Sportswear Projects",

    description:
      "Performance apparel manufacturing for activewear and sportswear collections.",
  },

  {
    title:
      "Startup Brands",

    description:
      "Flexible production solutions helping startups launch and scale apparel collections.",
  },
];

export default function Industries() {

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

            Industries We Serve

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
            Solutions For
            Modern Brands

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

            Vietnam Clothing partners
            with fashion brands,
            corporate businesses,
            startups and merchandise
            campaigns worldwide.

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
            industries.map(
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
                    hover:shadow-2xl
                  "
                >

                  <h3
                    className="
                      text-3xl
                      font-bold
                      tracking-tight
                    "
                  >

                    {
                      item.title
                    }

                  </h3>

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