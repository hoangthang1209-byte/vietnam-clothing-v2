import Link
from "next/link";

export default function FactoryCTA() {

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

              OEM Manufacturing

            </div>

            <h2
              className="
                mt-6
                text-5xl
                font-bold
                tracking-tight
              "
            >

              Looking For
              A Reliable
              Vietnam Clothing
              Manufacturer?

            </h2>

            <p
              className="
                mt-8
                text-lg
                leading-8
                text-white/70
              "
            >

              Contact our team
              for product sourcing,
              OEM apparel production,
              sampling and quotation
              support.

            </p>

            <div
              className="
                mt-10
                flex
                flex-wrap
                gap-4
              "
            >

              <Link
                href="/en/contact"
                className="
                  rounded-full
                  bg-white
                  px-8
                  py-4
                  text-sm
                  font-medium
                  text-black
                "
              >

                Request Quote

              </Link>

              <Link
                href="/en/products"
                className="
                  rounded-full
                  border
                  border-white/20
                  px-8
                  py-4
                  text-sm
                  font-medium
                  text-white
                "
              >

                Explore Products

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}