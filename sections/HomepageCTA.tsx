import Link
from "next/link";

export default function HomepageCTA() {

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
            overflow-hidden
            rounded-[48px]
            bg-black
            px-10
            py-20
            text-white
            md:px-20
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

              OEM & ODM Manufacturing

            </div>

            <h2
              className="
                mt-6
                text-5xl
                font-bold
                tracking-tight
                md:text-6xl
              "
            >

              Looking For A
              Reliable Apparel
              Manufacturing Partner?

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
              premium OEM & ODM apparel
              manufacturing services
              for fashion brands,
              merchandise campaigns
              and corporate uniforms
              worldwide.

            </p>

            <div
              className="
                mt-12
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
                  font-medium
                  text-black
                  transition
                  hover:scale-105
                "
              >

                Request Quotation

              </Link>

              <Link
                href="/en/products"
                className="
                  rounded-full
                  border
                  border-white/20
                  px-8
                  py-4
                  font-medium
                  text-white
                  transition
                  hover:bg-white
                  hover:text-black
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