const testimonials = [

  {
    name:
      "Alex Morgan",

    company:
      "Streetwear Brand",

    quote:
      "Vietnam Clothing helped us scale production with premium quality and reliable communication throughout the entire process.",
  },

  {
    name:
      "Sarah Chen",

    company:
      "Corporate Merchandise",

    quote:
      "Fast sampling, professional manufacturing workflow and excellent export support for our global campaigns.",
  },

  {
    name:
      "David Kim",

    company:
      "Fashion Startup",

    quote:
      "One of the most reliable OEM apparel manufacturing partners we’ve worked with in Asia.",
  },
];

export default function Testimonials() {

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

            Client Testimonials

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
            Global Clients

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
            corporate clients and
            merchandise projects
            worldwide.

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
            testimonials.map(
              (
                item,
                index
              ) => (

                <div
                  key={index}
                  className="
                    rounded-[40px]
                    border
                    border-black/5
                    bg-white
                    p-10
                    transition
                    hover:-translate-y-1
                    hover:shadow-2xl
                  "
                >

                  <div
                    className="
                      text-lg
                      leading-8
                      text-black/70
                    "
                  >

                    “{
                      item.quote
                    }”

                  </div>

                  <div
                    className="
                      mt-10
                      border-t
                      border-black/5
                      pt-6
                    "
                  >

                    <div
                      className="
                        text-xl
                        font-bold
                      "
                    >

                      {
                        item.name
                      }

                    </div>

                    <div
                      className="
                        mt-2
                        text-sm
                        uppercase
                        tracking-[0.2em]
                        text-black/40
                      "
                    >

                      {
                        item.company
                      }

                    </div>

                  </div>

                </div>
              )
            )
          }

        </div>

      </div>

    </section>
  );
}