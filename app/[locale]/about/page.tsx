import Image
from "next/image";

export default function AboutPage() {

  return (

    <main
      className="
        bg-white
        text-black
      "
    >

      <section
        className="
          border-b
          border-black/5
          pb-24
          pt-56
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
                text-black/40
              "
            >

              About Vietnam Clothing

            </div>

            <h1
              className="
                mt-6
                text-6xl
                font-bold
                tracking-tight
                md:text-7xl
              "
            >

              Premium Apparel
              Manufacturing
              Partner

            </h1>

            <p
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-8
                text-black/60
              "
            >

              Vietnam Clothing provides
              OEM & ODM apparel
              manufacturing solutions
              for fashion brands,
              corporate uniforms and
              global merchandise
              projects worldwide.

            </p>

          </div>

        </div>

      </section>

      <section
        className="
          py-24
        "
      >

        <div
          className="
            mx-auto
            grid
            max-w-7xl
            items-center
            gap-20
            px-6
            lg:grid-cols-2
          "
        >

          <div>

            <div
              className="
                overflow-hidden
                rounded-[40px]
              "
            >

              <Image
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
                alt="Vietnam Clothing Factory"
                width={1600}
                height={1800}
                className="
                  h-full
                  w-full
                  object-cover
                "
              />

            </div>

          </div>

          <div>

            <div
              className="
                text-sm
                uppercase
                tracking-[0.3em]
                text-black/40
              "
            >

              Our Story

            </div>

            <h2
              className="
                mt-6
                text-5xl
                font-bold
                tracking-tight
              "
            >

              Built For
              Global Brands

            </h2>

            <p
              className="
                mt-8
                leading-8
                text-black/60
              "
            >

              We specialize in premium
              apparel manufacturing,
              helping fashion brands,
              startups and enterprises
              bring products to life
              through reliable OEM &
              ODM production solutions.

            </p>

            <p
              className="
                mt-6
                leading-8
                text-black/60
              "
            >

              From fabric sourcing and
              sampling to production,
              printing, embroidery and
              export logistics,
              Vietnam Clothing provides
              end-to-end manufacturing
              services with international
              quality standards.

            </p>

          </div>

        </div>

      </section>

      <section
        className="
          border-y
          border-black/5
          bg-neutral-50
          py-24
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
              grid
              gap-8
              md:grid-cols-3
            "
          >

            <div
              className="
                rounded-[32px]
                bg-white
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
                  text-black/60
                "
              >

                Pieces Produced
                Monthly

              </div>

            </div>

            <div
              className="
                rounded-[32px]
                bg-white
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
                  text-black/60
                "
              >

                Countries Exported

              </div>

            </div>

            <div
              className="
                rounded-[32px]
                bg-white
                p-10
              "
            >

              <div
                className="
                  text-5xl
                  font-bold
                "
              >

                10+

              </div>

              <div
                className="
                  mt-4
                  text-black/60
                "
              >

                Years Experience

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}