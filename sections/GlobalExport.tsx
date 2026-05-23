const countries = [

  "United States",

  "Canada",

  "United Kingdom",

  "Australia",

  "Germany",

  "France",

  "Japan",

  "South Korea",

  "Singapore",

  "UAE",
];

export default function GlobalExport() {

  return (

    <section
      className="
        border-y
        border-black/5
        bg-black
        py-32
        text-white
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
            max-w-4xl
          "
        >

          <div
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-white/40
            "
          >

            Global Export

          </div>

          <h2
            className="
              mt-6
              text-6xl
              font-bold
              tracking-tight
            "
          >

            Trusted By
            Global Brands

          </h2>

          <p
            className="
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-white/60
            "
          >

            Vietnam Clothing provides
            OEM & ODM apparel
            manufacturing solutions
            for international fashion
            brands, merchandise
            campaigns and corporate
            uniform projects worldwide.

          </p>

        </div>

        <div
          className="
            mt-20
            grid
            gap-4
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5
          "
        >

          {
            countries.map(
              (
                country
              ) => (

                <div
                  key={country}
                  className="
                    rounded-full
                    border
                    border-white/10
                    px-6
                    py-4
                    text-center
                    text-sm
                    text-white/80
                    backdrop-blur
                  "
                >

                  {country}

                </div>
              )
            )
          }

        </div>

        <div
          className="
            mt-24
            grid
            gap-8
            md:grid-cols-3
          "
        >

          <div
            className="
              rounded-[32px]
              border
              border-white/10
              p-10
            "
          >

            <div
              className="
                text-5xl
                font-bold
              "
            >

              30+

            </div>

            <div
              className="
                mt-4
                text-white/60
              "
            >

              Export Countries

            </div>

          </div>

          <div
            className="
              rounded-[32px]
              border
              border-white/10
              p-10
            "
          >

            <div
              className="
                text-5xl
                font-bold
              "
            >

              500K+

            </div>

            <div
              className="
                mt-4
                text-white/60
              "
            >

              Pieces Monthly Capacity

            </div>

          </div>

          <div
            className="
              rounded-[32px]
              border
              border-white/10
              p-10
            "
          >

            <div
              className="
                text-5xl
                font-bold
              "
            >

              OEM

            </div>

            <div
              className="
                mt-4
                text-white/60
              "
            >

              Full-Service Manufacturing

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}