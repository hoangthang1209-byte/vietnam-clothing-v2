const capabilities = [

  {
    title:
      "OEM Manufacturing",

    description:
      "End-to-end apparel manufacturing solutions for fashion brands and merchandise projects.",
  },

  {
    title:
      "ODM Development",

    description:
      "Product development support including design consultation, sourcing and sampling.",
  },

  {
    title:
      "Screen Printing",

    description:
      "Premium silkscreen and DTG printing solutions for apparel and merchandise.",
  },

  {
    title:
      "Embroidery",

    description:
      "High-quality embroidery production with international finishing standards.",
  },

  {
    title:
      "Fabric Sourcing",

    description:
      "Flexible sourcing solutions for cotton, polyester, French terry and performance fabrics.",
  },

  {
    title:
      "Global Export",

    description:
      "Export-ready manufacturing workflow with worldwide shipping support.",
  },
];

export default function ManufacturingCapabilities() {

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

              Manufacturing Capabilities

            </div>

            <h2
              className="
                mt-6
                text-6xl
                font-bold
                tracking-tight
              "
            >

              Full-Service
              Apparel
              Manufacturing

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

            Vietnam Clothing provides
            OEM & ODM apparel
            manufacturing solutions
            with scalable production,
            premium quality standards
            and global export support.

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
            capabilities.map(
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