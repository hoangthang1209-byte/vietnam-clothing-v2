import Link
from "next/link";

import {
  createClient,
} from "@/lib/supabase/server";

export default async function AdminDashboardPage() {

  const supabase =
    await createClient();

  const {
    data: products,
  } = await supabase

    .from(
      "products"
    )

    .select("*");

  const totalProducts =
    products?.length || 0;

  const categories =
    new Set(

      products?.map(
        (
          product: any
        ) =>

          product.category
      )
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
            items-end
            justify-between
            gap-8
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
                text-6xl
                font-bold
                tracking-tight
              "
            >

              Dashboard

            </h1>

          </div>

          <Link
            href="/admin/products"
            className="
              rounded-full
              bg-black
              px-8
              py-4
              text-sm
              font-medium
              text-white
            "
          >

            Manage Products

          </Link>

        </div>

        <div
          className="
            mt-16
            grid
            gap-6
            md:grid-cols-3
          "
        >

          <div
            className="
              rounded-[36px]
              bg-white
              p-10
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

              Total Products

            </div>

            <div
              className="
                mt-6
                text-6xl
                font-bold
              "
            >

              {
                totalProducts
              }

            </div>

          </div>

          <div
            className="
              rounded-[36px]
              bg-white
              p-10
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

              Categories

            </div>

            <div
              className="
                mt-6
                text-6xl
                font-bold
              "
            >

              {
                categories.size
              }

            </div>

          </div>

          <div
            className="
              rounded-[36px]
              bg-white
              p-10
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

              Latest Product

            </div>

            <div
              className="
                mt-6
                text-3xl
                font-bold
                tracking-tight
              "
            >

              {
                products?.[0]
                  ?.title ||

                "-"
              }

            </div>

          </div>

        </div>

        <div
          className="
            mt-16
            rounded-[40px]
            bg-white
            p-10
          "
        >

          <div
            className="
              flex
              items-center
              justify-between
              gap-6
            "
          >

            <div>

              <div
                className="
                  text-sm
                  uppercase
                  tracking-[0.2em]
                  text-black/40
                "
              >

                Quick Actions

              </div>

              <h2
                className="
                  mt-4
                  text-4xl
                  font-bold
                  tracking-tight
                "
              >

                Manage Your
                Product Catalog

              </h2>

            </div>

            <Link
              href="/admin/products/new"
              className="
                rounded-full
                bg-black
                px-8
                py-4
                text-sm
                font-medium
                text-white
              "
            >

              Add Product

            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}