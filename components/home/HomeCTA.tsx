import Link
from "next/link";

export default function HomeCTA() {

  return (

    <section
      className="
        px-6
        pb-32
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
            py-24
            text-white
            lg:px-20
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
                text-white/50
              "
            >

              Vietnam Clothing

            </div>

            <h2
              className="
                mt-6
                text-6xl
                font-black
                tracking-tight
              "
            >

              Build Your
              Next Apparel
              Collection
              With Vietnam
              Clothing

            </h2>

            <p
              className="
                mt-10
                max-w-2xl
                text-xl
                leading-9
                text-white/70
              "
            >

              OEM apparel manufacturing
              for fashion brands,
              uniforms, sportswear
              and private label
              clothing worldwide.

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
                  py-5
                  text-sm
                  font-semibold
                  text-black
                "
              >

                Request Quote

              </Link>

              <Link
                href="/en/factory"
                className="
                  rounded-full
                  border
                  border-white/20
                  px-8
                  py-5
                  text-sm
                  font-semibold
                  text-white
                "
              >

                Explore Factory

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}