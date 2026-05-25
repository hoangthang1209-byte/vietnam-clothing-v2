import Image
from "next/image";

const brands = [

  {
    name:
      "Highlands Coffee",

    logo:
      "/brands/highlands.png",
  },

  {
    name:
      "Techcombank",

    logo:
      "/brands/techcombank.png",
  },

  {
    name:
      "KIA",

    logo:
      "/brands/kia.png",
  },

  {
    name:
      "VUS",

    logo:
      "/brands/vus.png",
  },

  {
    name:
      "Bách Khoa",

    logo:
      "/brands/bachkhoa.png",
  },

  {
    name:
      "Viva Star",

    logo:
      "/brands/vivastar.png",
  },
];

export default function TrustedBrands() {

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
            text-center
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

            Trusted By Brands

          </div>

          <h2
            className="
              mt-6
              text-5xl
              font-black
              tracking-tight
            "
          >

            Brands We
            Worked With

          </h2>

        </div>

        <div
          className="
            mt-20
            grid
            gap-6
            grid-cols-2
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
                  key={
                    brand.name
                  }
                  className="
                    flex
                    h-36
                    items-center
                    justify-center
                    rounded-[32px]
                    border
                    border-black/10
                    bg-white
                    p-8
                  "
                >

                  <Image
                    src={
                      brand.logo
                    }
                    alt={
                      brand.name
                    }
                    width={140}
                    height={80}
                    className="
                      h-auto
                      w-auto
                      max-h-12
                      object-contain
                    "
                  />

                </div>
              )
            )
          }

        </div>

      </div>

    </section>
  );
}