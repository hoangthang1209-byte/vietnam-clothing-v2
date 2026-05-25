import Image from "next/image";

const brands = [
  {
    name: "BIDV",
    logo: "/brands/bidv-seeklogo.png",
  },

  {
    name: "Coca-Cola",
    logo: "/brands/coca-cola-seeklogo.png",
  },

  {
    name: "Friesland Campina",
    logo: "/brands/friesland-campina-seeklogo.png",
  },

  {
    name: "Heineken",
    logo: "/brands/heineken-seeklogo.png",
  },

  {
    name: "McDonald's",
    logo: "/brands/mcdonalds-seeklogo.png",
  },

  {
    name: "Mercedes-Benz",
    logo: "/brands/mercedes-benz-seeklogo.png",
  },

  {
    name: "MobiFone",
    logo: "/brands/mobifone-seeklogo.png",
  },

  {
    name: "Starbucks",
    logo: "/brands/starbucks-seeklogo.png",
  },

  {
    name: "Texas Chicken",
    logo: "/brands/texas-chicken-seeklogo.png",
  },

  {
    name: "The Coffee House",
    logo: "/brands/the-coffee-house-seeklogo.png",
  },

  {
    name: "Tiger Beer",
    logo: "/brands/tiger-beer-seeklogo.png",
  },

  {
    name: "Toyota",
    logo: "/brands/toyota-seeklogo.png",
  },
];

const duplicatedBrands = [
  ...brands,
  ...brands,
];

export default function TrustedBrands() {
  return (
    <section className="overflow-hidden border-y border-neutral-200 bg-white py-20">

      <div className="mb-14 text-center">

        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
          Trusted By Leading Brands
        </p>

      </div>

      <div className="relative">

        <div className="flex w-max animate-marquee gap-6">

          {duplicatedBrands.map(
            (brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="group flex h-32 w-52 items-center justify-center rounded-3xl border border-neutral-200 bg-white p-8 transition hover:-translate-y-1 hover:border-black hover:shadow-xl"
              >

                <div className="relative h-16 w-full">

                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain grayscale transition duration-300 group-hover:grayscale-0"
                  />

                </div>

              </div>
            )
          )}

        </div>

      </div>

    </section>
  );
}
