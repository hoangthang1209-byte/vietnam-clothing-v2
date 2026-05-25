import Link
from "next/link";

import {
  createClient,
} from "@/lib/supabase/server";

export default async function AdminProductsPage() {

  const supabase =
    await createClient();

  const {
    data: products,
  } = await supabase

    .from(
      "products"
    )

    .select("*")

    .order(
      "created_at",
      {

        ascending:
          false,
      }
    );

  return (

    <main
      className="
        min-h-screen
        bg-neutral-50
        px-6
        py-20
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
            gap-6
            md:flex-row
            md:items-end
            md:justify-between
          "
        >

          <div>

            <div
              className="
                text-sm
                uppercase
                tracking-[0.3em]
                text-black/40
              "
            >

              Vietnam Clothing CMS

            </div>

            <h1
              className="
                mt-6
                text-5xl
                font-bold
                tracking-tight
              "
            >

              Products

            </h1>

          </div>

          <Link
            href="/admin/products/new"
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-black
              px-8
              py-4
              text-sm
              font-medium
              text-white
            "
          >

            Create Product

          </Link>

        </div>

        <div
          className="
            mt-16
            grid
            gap-6
          "
        >

          {
            products?.map(
              (
                product: any
              ) => (

                <Link
                  key={
                    product.id
                  }
                  href={
                    `/admin/products/${product.id}`
                  }
                  className="
                    flex
                    flex-col
                    gap-6
                    rounded-[32px]
                    bg-white
                    p-8
                    transition
                    hover:translate-y-[-2px]
                    md:flex-row
                    md:items-center
                    md:justify-between
                  "
                >

                  <div>

                    <div
                      className="
                        text-xs
                        uppercase
                        tracking-[0.2em]
                        text-black/40
                      "
                    >

                      {
                        product.category
                      }

                    </div>

                    <h2
                      className="
                        mt-3
                        text-3xl
                        font-bold
                        tracking-tight
                      "
                    >

                      {
                        product.title
                      }

                    </h2>

                    <div
                      className="
                        mt-4
                        text-sm
                        text-black/50
                      "
                    >

                      /
                      {
                        product.slug
                      }

                    </div>

                  </div>

                  <div
                    className="
                      rounded-full
                      border
                      border-black/10
                      px-5
                      py-3
                      text-sm
                      font-medium
                    "
                  >

                    Edit Product

                  </div>

                </Link>
              )
            )
          }

        </div>

      </div>

      <form
        action="/api/admin/logout"
        method="POST"
        className="
          fixed
          right-6
          top-6
          z-50
        "
      >

        <button
          type="submit"
          className="
            rounded-full
            border
            border-black/10
            bg-white
            px-5
            py-3
            text-sm
            font-medium
          "
        >

          Logout

        </button>

      </form>

    </main>
  );
}