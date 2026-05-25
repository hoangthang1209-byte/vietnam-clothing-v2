const stats = [

  {
    value:
      "10+",

    label:
      "Years Experience",
  },

  {
    value:
      "50K+",

    label:
      "Monthly Capacity",
  },

  {
    value:
      "100+",

    label:
      "Global Clients",
  },

  {
    value:
      "24/7",

    label:
      "Production Support",
  },
];

export default function FactoryStats() {

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
            overflow-hidden
            rounded-[48px]
            bg-black
            px-10
            py-20
            text-white
            lg:px-20
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
                text-white/50
              "
            >

              Manufacturing Capacity

            </div>

            <h2
              className="
                mt-6
                text-5xl
                font-black
                tracking-tight
              "
            >

              Scalable Apparel
              Manufacturing
              In Vietnam

            </h2>

          </div>

          <div
            className="
              mt-16
              grid
              gap-10
              md:grid-cols-2
              lg:grid-cols-4
            "
          >

            {
              stats.map(
                (
                  stat
                ) => (

                  <div
                    key={
                      stat.label
                    }
                  >

                    <div
                      className="
                        text-6xl
                        font-black
                        tracking-tight
                      "
                    >

                      {
                        stat.value
                      }

                    </div>

                    <div
                      className="
                        mt-4
                        text-white/60
                      "
                    >

                      {
                        stat.label
                      }

                    </div>

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