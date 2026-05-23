const brands = [

  "Tech Company",

  "Fashion Brand",

  "Corporate Group",

  "Coffee Chain",

  "Streetwear Label",

  "Global Startup",
];

export default function TrustedBrands() {

  return (

    <section
      className="
        border-y
        border-black/5
        bg-neutral-50
        py-16
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
            text-center
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

            Trusted By Global Brands

          </div>

        </div>

        <div
          className="
            mt-10
            grid
            grid-cols-2
            gap-6
            md:grid-cols-3
            lg:grid-cols-6
          "
        >

          {
            brands.map(
              (
                brand
              ) => (

                <div
                  key={brand}
                  className="
                    flex
                    h-24
                    items-center
                    justify-center
                    rounded-[24px]
                    border
                    border-black/5
                    bg-white
                    text-sm
                    font-medium
                    text-black/50
                    transition
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >

                  {brand}

                </div>
              )
            )
          }

        </div>

      </div>

    </section>
  );
}