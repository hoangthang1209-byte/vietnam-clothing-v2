import Image
from "next/image";

import Link
from "next/link";

import type {
  Metadata,
} from "next";

import {
  createClient,
} from "@/lib/supabase/server";

import {
  notFound,
} from "next/navigation";

type Props = {

  params: {

    category: string;
    locale: string;
  };
};

export async function generateMetadata({

  params,

}: Props): Promise<
  Metadata
> {

  const category =

    params.category
      .replace("-", " ");

  return {

    title:
      `${category} Manufacturer | Vietnam Clothing`,

    description:
      `Premium ${category} manufacturing services in Vietnam. OEM apparel production for global brands.`,
  };
}

export default async function CategoryPage({

  params,

}: Props) {

  const supabase =
    await createClient();

  const formattedCategory =

    params.category
      .replace("-", " ")
      .toLowerCase();

  const {
    data: products,
  } = await supabase

    .from(
      "products"
    )

    .select("*")

    .ilike(
      "category",
      `%${formattedCategory}%`
    );

  if (
    !products ||
    products.length === 0
  ) {

    notFound();
  }

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

            Product Category

          </div>

          <h1
            className="
              mt-6
              text-6xl
              font-black
              tracking-tight
              capitalize
            "
          >

            {
              formattedCategory
            }

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

            Explore premium
            {
              " "
            }
            {
              formattedCategory
            }
            {
              " "
            }
            manufacturing solutions
            from Vietnam Clothing.

          </p>

        </div>

        <div
          className="
            mt-20
            grid
            gap-8
            md:grid-cols-2
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

                    <h2
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

                    </h2>

                  </div>

                </Link>
              )
            )
          }

        </div>

      </div>

    </main>
  );
}