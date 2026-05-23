import Link
from "next/link";

export default function Footer() {

  return (

    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-black/5
        bg-black
        text-white
      "
    >

      <div className="mx-auto max-w-7xl px-6 py-24">

        <div
          className="
            grid
            gap-16
            lg:grid-cols-4
          "
        >

          <div
            className="
              lg:col-span-2
            "
          >

            <div
              className="
                text-3xl
                font-bold
                tracking-tight
              "
            >

              Vietnam Clothing

            </div>

            <p
              className="
                mt-6
                max-w-xl
                text-lg
                leading-8
                text-white/60
              "
            >

              Premium OEM & ODM
              apparel manufacturing
              solutions for modern
              fashion brands,
              startups, and enterprise
              production worldwide.

            </p>

          </div>

          <div>

            <div
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-white/40
              "
            >

              Navigation

            </div>

            <div
              className="
                mt-6
                flex
                flex-col
                gap-4
              "
            >

              <Link
                href="/"
                className="
                  text-white/70
                  transition
                  hover:text-white
                "
              >

                Home

              </Link>

              <Link
                href="/products"
                className="
                  text-white/70
                  transition
                  hover:text-white
                "
              >

                Products

              </Link>

              <Link
                href="/about"
                className="
                  text-white/70
                  transition
                  hover:text-white
                "
              >

                About

              </Link>

              <Link
                href="/contact"
                className="
                  text-white/70
                  transition
                  hover:text-white
                "
              >

                Contact

              </Link>

            </div>

          </div>

          <div>

            <div
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-white/40
              "
            >

              Contact

            </div>

            <div
              className="
                mt-6
                flex
                flex-col
                gap-4
                text-white/70
              "
            >

              <div>
                hello@vietnamclothing.com
              </div>

              <div>
                +84 123 456 789
              </div>

              <div>
                Ho Chi Minh City,
                Vietnam
              </div>

            </div>

          </div>

        </div>

        <div
          className="
            mt-20
            flex
            flex-col
            gap-6
            border-t
            border-white/10
            pt-8
            text-sm
            text-white/40
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          <div>
            © 2026 Vietnam Clothing.
            All rights reserved.
          </div>

          <div
            className="
              flex
              gap-6
            "
          >

            <Link href="/privacy">

              Privacy Policy

            </Link>

            <Link href="/terms">

              Terms

            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}