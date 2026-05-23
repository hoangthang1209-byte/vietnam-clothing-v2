import Link
from "next/link";

export default function FinalCTA() {

  return (

    <section
      className="
        bg-black
        py-32
        text-white
      "
    >

      <div
        className="
          mx-auto
          max-w-5xl
          px-6
          text-center
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

          Start Your Project

        </div>

        <h2
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
          Starts Here

        </h2>

        <p
          className="
            mx-auto
            mt-8
            max-w-2xl
            text-lg
            leading-8
            text-white/60
          "
        >

          OEM & ODM apparel
          manufacturing solutions
          for fashion brands,
          merchandise projects
          and corporate uniforms
          worldwide.

        </p>

        <div
          className="
            mt-12
            flex
            flex-wrap
            justify-center
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

    </section>
  );
}