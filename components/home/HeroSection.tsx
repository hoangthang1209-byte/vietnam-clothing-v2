import Link
from "next/link";

export default function HeroSection() {

  return (

    <section
      className="
        relative
        overflow-hidden
        px-6
        pb-32
        pt-52
      "
    >

      <div
        className="
          absolute
          left-1/2
          top-0
          h-[600px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-neutral-200/60
          blur-3xl
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
        "
      >

        <div
          className="
            max-w-5xl
          "
        >

          <div
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-black/10
              bg-white/80
              px-5
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.3em]
              backdrop-blur-xl
            "
          >

            Premium OEM Apparel Manufacturer

          </div>

          <h1
            className="
              mt-10
              text-6xl
              font-black
              leading-none
              tracking-tight
              md:text-8xl
            "
          >

            Vietnam
            Clothing
            Manufacturing
            For Global
            Brands

          </h1>

          <p
            className="
              mt-10
              max-w-3xl
              text-xl
              leading-9
              text-black/60
            "
          >

            OEM apparel manufacturing
            specializing in premium
            fashion, sportswear,
            uniforms and private
            label clothing production
            in Vietnam.

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
                bg-black
                px-8
                py-5
                text-sm
                font-medium
                text-white
              "
            >

              Request Quote

            </Link>

            <Link
              href="/en/products"
              className="
                rounded-full
                border
                border-black/10
                px-8
                py-5
                text-sm
                font-medium
              "
            >

              Explore Products

            </Link>

          </div>

        </div>

        <div
          className="
            mt-24
            grid
            gap-6
            md:grid-cols-3
          "
        >

          <div
            className="
              rounded-[32px]
              border
              border-black/10
              bg-white/80
              p-10
              backdrop-blur-xl
            "
          >

            <div
              className="
                text-5xl
                font-black
                tracking-tight
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

              Years Manufacturing
              Experience

            </div>

          </div>

          <div
            className="
              rounded-[32px]
              border
              border-black/10
              bg-white/80
              p-10
              backdrop-blur-xl
            "
          >

            <div
              className="
                text-5xl
                font-black
                tracking-tight
              "
            >

              50K+

            </div>

            <div
              className="
                mt-4
                text-black/60
              "
            >

              Monthly Production
              Capacity

            </div>

          </div>

          <div
            className="
              rounded-[32px]
              border
              border-black/10
              bg-white/80
              p-10
              backdrop-blur-xl
            "
          >

            <div
              className="
                text-5xl
                font-black
                tracking-tight
              "
            >

              OEM

            </div>

            <div
              className="
                mt-4
                text-black/60
              "
            >

              Full Package
              Manufacturing

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}