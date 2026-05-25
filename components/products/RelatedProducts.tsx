import Image
from "next/image";

import Link
from "next/link";

import {
  getProducts,
} from "@/lib/getProducts";

type Props = {

  currentSlug?: string;
};

export default async function RelatedProducts({

  currentSlug,

}: Props) {

  const products =
    await getProducts();

  const relatedProducts =
    products

      .filter(
        (
          product: any
        ) =>

          product.slug !==
          currentSlug
      )

      .slice(
        0,
        3
      );

  if (
    relatedProducts.length === 0
  ) {

    return null;
  }

  return (

    <section
      className="
        border-t
        border-black/5
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
            flex
            items-end
            justify-between
            gap-10
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

              More Products

            </div>

            <h2
              className="
                mt-6
                text-5xl
                font-bold
                tracking-tight
              "
            >

              Related Products

            </h2>

          </div>

        </div>

        <div
          className="
            mt-14
            grid
            gap-6
            md:grid-cols-3
          "
        >

          {
            relatedProducts.map(
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
                      rounded-[32px]
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
                        duration-500
                        group-hover:scale-105
                      "
                    />

                  </div>

                  <div
                    className="
                      mt-5
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
                        mt-3
                        text-2xl
                        font-bold
                        tracking-tight
                      "
                    >

                      {
                        product.title
                      }

                    </h3>

                    <p
                      className="
                        mt-3
                        leading-7
                        text-black/60
                        line-clamp-3
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
  );
}