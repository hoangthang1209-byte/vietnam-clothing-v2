import Link
from "next/link";

import Image
from "next/image";

import {
  supabase,
} from "@/lib/supabase";

type Props = {

  currentSlug: string;

  category: string;
};

export default async function RelatedProducts({

  currentSlug,

  category,

}: Props) {

  const {
    data: products,
  } = await supabase

    .from(
      "products"
    )

    .select("*")

    .eq(
      "category",
      category
    )

    .neq(
      "slug",
      currentSlug
    )

    .limit(3);

  if (
    !products?.length
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
            mb-16
            flex
            items-end
            justify-between
            gap-8
          "
        >

          <div>

            <div
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-black/40
              "
            >

              Related Products

            </div>

            <h2
              className="
                mt-6
                text-5xl
                font-bold
                tracking-tight
              "
            >

              Explore More
              Products

            </h2>

          </div>

        </div>

        <div
          className="
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
                  href={
                    `/en/products/${product.slug}`
                  }
                  className="
                    group
                    overflow-hidden
                    rounded-[40px]
                    border
                    border-black/5
                    bg-white
                    transition
                    hover:-translate-y-1
                    hover:shadow-2xl
                  "
                >

                  <div
                    className="
                      overflow-hidden
                    "
                  >

                    <Image
                      src={
                        product.image
                      }
                      alt={
                        product.title
                      }
                      width={1600}
                      height={2000}
                      className="
                        aspect-[4/5]
                        h-full
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
                      p-8
                    "
                  >

                    <div
                      className="
                        text-xs
                        uppercase
                        tracking-[0.3em]
                        text-black/40
                      "
                    >

                      {
                        product.category
                      }

                    </div>

                    <h3
                      className="
                        mt-5
                        text-3xl
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
                        mt-5
                        leading-8
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
  );
}