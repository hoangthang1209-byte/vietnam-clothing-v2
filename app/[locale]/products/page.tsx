import type {
  Metadata,
} from "next";

import {
  createClient,
} from "@/lib/supabase/server";

import ProductsPageClient
from "@/components/products/ProductPageClient";

export const metadata:
Metadata = {

  title:
    "Products | Vietnam Clothing",

  description:
    "Explore premium OEM apparel manufacturing products from Vietnam Clothing.",
};

export default async function ProductsPage() {

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
        ascending: false,
      }
    );

  return (

    <main
      className="
        bg-white
        px-6
        pb-24
        pt-40
        text-black
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

            Product Catalog

          </div>

          <h1
            className="
              mt-6
              text-6xl
              font-bold
              tracking-tight
            "
          >

            Premium Apparel
            Manufacturing

          </h1>

          <p
            className="
              mt-8
              max-w-3xl
              text-lg
              leading-8
              text-black/60
            "
          >

            Explore our OEM apparel
            manufacturing solutions
            including t-shirts,
            hoodies, uniforms,
            sportswear and premium
            fashion production.

          </p>

        </div>

        <div
          className="
            mt-20
          "
        >

<ProductsPageClient
  products={
    (products || []) as any[]
  }
/>

        </div>

      </div>

    </main>
  );
}