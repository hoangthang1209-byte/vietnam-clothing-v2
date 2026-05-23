import Link
from "next/link";

export default function Footer() {

  return (

    <footer
      className="
        border-t
        border-black/5
        bg-white
        pt-24
      "
    >

      <div
        className="
          mx-auto
          grid
          max-w-7xl
          gap-16
          px-6
          pb-16
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
              leading-8
              text-black/60
            "
          >

            Premium OEM & ODM
            apparel manufacturing
            partner in Vietnam for
            fashion brands, uniforms,
            merchandise and global
            apparel projects.

          </p>

          <div
            className="
              mt-10
              flex
              flex-wrap
              gap-4
            "
          >

            <a
              href="mailto:hello@vietnamclothing.com"
              className="
                rounded-full
                border
                border-black/10
                px-5
                py-3
                text-sm
                transition
                hover:bg-black
                hover:text-white
              "
            >

              hello@vietnamclothing.com

            </a>

            <a
              href="tel:+84918681878"
              className="
                rounded-full
                border
                border-black/10
                px-5
                py-3
                text-sm
                transition
                hover:bg-black
                hover:text-white
              "
            >

              +84 918 681 878

            </a>

          </div>

        </div>

        <div>

          <div
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
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
              href="/en"
              className="
                text-black/60
                transition
                hover:text-black
              "
            >

              Home

            </Link>

            <Link
              href="/en/products"
              className="
                text-black/60
                transition
                hover:text-black
              "
            >

              Products

            </Link>

            <Link
              href="/en/about"
              className="
                text-black/60
                transition
                hover:text-black
              "
            >

              About

            </Link>

            <Link
              href="/en/contact"
              className="
                text-black/60
                transition
                hover:text-black
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
            "
          >

            Capabilities

          </div>

          <div
            className="
              mt-6
              flex
              flex-col
              gap-4
            "
          >

            <div
              className="
                text-black/60
              "
            >

              OEM Manufacturing

            </div>

            <div
              className="
                text-black/60
              "
            >

              ODM Manufacturing

            </div>

            <div
              className="
                text-black/60
              "
            >

              Screen Printing

            </div>

            <div
              className="
                text-black/60
              "
            >

              Embroidery

            </div>

            <div
              className="
                text-black/60
              "
            >

              Global Export

            </div>

          </div>

        </div>

      </div>

      <div
        className="
          border-t
          border-black/5
        "
      >

        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            gap-4
            px-6
            py-8
            text-sm
            text-black/40
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

            <Link href="/en">

              Privacy Policy

            </Link>

            <Link href="/en">

              Terms & Conditions

            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}