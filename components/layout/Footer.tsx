import Link
from "next/link";

const categories = [

  "T-Shirts",

  "Polos",

  "Hoodies",

  "Sportswear",

  "Uniforms",

  "Streetwear",
];

export default function Footer() {

  return (

    <footer
      className="
        border-t
        border-black/10
        bg-neutral-50
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
          pb-20
          lg:grid-cols-4
        "
      >

        <div>

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
              leading-8
              text-black/60
            "
          >

            OEM apparel manufacturer
            specializing in premium
            clothing production,
            uniforms and fashion
            manufacturing.

          </p>

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

            Categories

          </div>

          <div
            className="
              mt-6
              grid
              gap-4
            "
          >

            {
              categories.map(
                (
                  item
                ) => (

                  <Link
                    key={item}

                    href={`
                      /en/products/category/${item.toLowerCase()}
                    `}

                    className="
                      text-black/60
                      transition
                      hover:text-black
                    "
                  >

                    {
                      item
                    }

                  </Link>
                )
              )
            }

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

            Company

          </div>

          <div
            className="
              mt-6
              grid
              gap-4
            "
          >

            <Link
              href="/en/about"
              className="
                text-black/60
                transition
                hover:text-black
              "
            >

              About Us

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

            Contact

          </div>

          <div
            className="
              mt-6
              grid
              gap-4
              text-black/60
            "
          >

            <div>
              Ho Chi Minh City,
              Vietnam
            </div>

            <div>
              contact@vietnamclothing.com
            </div>

            <div>
              +84 918 681 878
            </div>

          </div>

        </div>

      </div>

      <div
        className="
          border-t
          border-black/10
          py-6
        "
      >

        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            items-center
            justify-between
            gap-4
            px-6
            text-sm
            text-black/50
            md:flex-row
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

            <Link href="#">

              Privacy Policy

            </Link>

            <Link href="#">

              Terms

            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}