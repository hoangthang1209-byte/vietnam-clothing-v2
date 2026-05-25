import Link
from "next/link";

import Image
from "next/image";

import {
  createClient,
} from "@/lib/supabase/server";

export default async function FeaturedProducts() {

  const supabase =
    await createClient();

  const {
    data: products,
  } = await supabase

    .from(
      "products"
    )

    .select("*")

    .limit(3)

    .order(
      "created_at",
      {
        ascending: false,
      }
    );

  if (
    !products ||
    products.length === 0
  ) {

    return null;
  }

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
            flex
            flex-col
            gap-10
            lg:flex-row
            lg:items-end
            lg:justify-between
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
                text-black/40
              "
            >

              Featured Products

            </div>

            <h2
              className="
                mt-6
                text-5xl
                font-black
                tracking-tight
              "
            >

              Best-Selling
              Apparel Products

            </h2>

          </div>

          <Link
            href="/en/products"
            className="
              inline-flex
              items-center
              text-sm
              font-semibold
            "
          >

            View All Products →

          </Link>

        </div>

        <div
          className="
            mt-16
            grid
            gap-8
            lg:grid-cols-3
          "
        >

          {
            products.map(
              (
                product: any
              ) => (

                <Link
                  key={
                    product.id
                  }

                  href={`
                    /en/products/${product.slug}
                  `}

                  className="
                    group
                    block
                  "
                >

                  <div
                    className="
                      overflow-hidden
                      rounded-[40px]
                    "
                  >

                    <Image
                      src={
                        product.image
                      }
                      alt={
                        product.title
                      }
                      width={1200}
                      height={1400}
                      className="
                        aspect-[4/5]
                        w-full
                        object-cover
                        transition
                        duration-700
                        group-hover:scale-105
                      "
                    />

                  </div>

                  <div
                    className="
                      mt-8
                    "
                  >

                    <div
                      className="
                        text-sm
                        uppercase
                        tracking-[0.2em]
                        text-black/40
                      "
                    >

                      {
                        product.category
                      }

                    </div>

                    <h3
                      className="
                        mt-4
                        text-3xl
                        font-black
                        tracking-tight
                      "
                    >

                      {
                        product.title
                      }

                    </h3>

                  </div>

                </Link>
              )
            )
          }

        </div>

      </div>

    </section>
  );
}