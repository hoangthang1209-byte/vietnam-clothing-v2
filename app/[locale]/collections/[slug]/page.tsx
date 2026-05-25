import Image
from "next/image";

import Link
from "next/link";

import {
  notFound,
} from "next/navigation";

import {
  getProducts,
} from "@/lib/getProducts";

type Props = {

  params: {

    slug: string;
    locale: string;
  };
};

export default async function CollectionPage({

  params,

}: Props) {

  const products =
    await getProducts();

  const collectionProducts =
    products.filter(
      (
        product: any
      ) =>

        product.category
          ?.toLowerCase()
          .replaceAll(
            " ",
            "-"
          ) ===
        params.slug
    );

  if (
    collectionProducts.length === 0
  ) {

    notFound();
  }

  return (

    <main
      className="
        bg-white
        text-black
      "
    >

      <section
        className="
          border-b
          border-black/5
          pb-24
          pt-56
        "
      >

        <div
          className="
            mx-auto
            max-w-7xl
            px-6
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

              Product Collection

            </div>

            <h1
              className="
                mt-6
                text-6xl
                font-bold
                tracking-tight
                md:text-7xl
              "
            >

              {
                params.slug
                  .replaceAll(
                    "-",
                    " "
                  )
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

              Explore premium OEM &
              ODM apparel manufacturing
              products from Vietnam
              Clothing.

            </p>

          </div>

        </div>

      </section>

      <section
        className="
          py-24
        "
      >

        <div
          className="
            mx-auto
            max-w-7xl
            px-6
          "
        >

          <div
            className="
              grid
              gap-8
              md:grid-cols-2
              xl:grid-cols-3
            "
          >

            {
              collectionProducts.map(
                (
                  product: any
                ) => (

                  <Link
                    key={
                      product.id
                    }
                    href={
                      `/en/products/${product.slug}`
                    }
                    className="
                      group
                    "
                  >

                    <div
                      className="
                        overflow-hidden
                        rounded-[36px]
                        border
                        border-black/10
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
                        mt-6
                      "
                    >

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

                      <p
                        className="
                          mt-4
                          line-clamp-3
                          leading-7
                          text-black/60
                        "
                      >

                        {
                          product.description
                        }

                      </p>

                    </div>

                  </Link>
                )
              )
            }

          </div>

        </div>

      </section>

    </main>
  );
}