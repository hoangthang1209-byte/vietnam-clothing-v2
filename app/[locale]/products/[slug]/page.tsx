import Image
from "next/image";

import {
  notFound,
} from "next/navigation";

import {
  getProductBySlug,
} from "@/lib/getProductBySlug";

import ProductPageClient
from "@/components/products/ProductPageClient";

type Props = {

  params: {

    slug: string;
  };
};

export default async function ProductDetailPage({

  params,

}: Props) {

  const product =
    await getProductBySlug(
      params.slug
    );

  if (
    !product
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
            grid
            max-w-7xl
            gap-20
            px-6
            lg:grid-cols-2
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

              {
                product.category
              }

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
                product.title
              }

            </h1>

            <p
              className="
                mt-8
                max-w-xl
                text-lg
                leading-8
                text-black/60
              "
            >

              {
                product.description
              }

            </p>

            <div
              className="
                mt-12
                grid
                gap-4
              "
            >

              {
                product.features?.map(
                  (
                    feature: string,
                    index: number
                  ) => (

                    <div
                      key={index}
                      className="
                        flex
                        items-center
                        gap-4
                        rounded-2xl
                        border
                        border-black/5
                        px-6
                        py-5
                      "
                    >

                      <div
                        className="
                          h-2
                          w-2
                          rounded-full
                          bg-black
                        "
                      />

                      <div>

                        {
                          feature
                        }

                      </div>

                    </div>
                  )
                )
              }

            </div>

            <div
              className="
                mt-14
              "
            >

              <ProductPageClient
                product={
                  product
                }
              />

            </div>

          </div>

          <div>

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
                width={2000}
                height={2400}
                className="
                  aspect-[4/5]
                  h-full
                  w-full
                  object-cover
                "
              />

            </div>

          </div>

        </div>

      </section>

      {
        product.gallery?.length > 0 && (

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
                  mb-16
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

                  Product Gallery

                </div>

                <h2
                  className="
                    mt-6
                    text-5xl
                    font-bold
                    tracking-tight
                  "
                >

                  Production
                  Showcase

                </h2>

              </div>

              <div
                className="
                  grid
                  gap-8
                  md:grid-cols-2
                "
              >

                {
                  product.gallery.map(
                    (
                      image: string,
                      index: number
                    ) => (

                      <div
                        key={index}
                        className="
                          overflow-hidden
                          rounded-[40px]
                        "
                      >

                        <Image
                          src={image}
                          alt={
                            product.title
                          }
                          width={1600}
                          height={1600}
                          className="
                            aspect-square
                            h-full
                            w-full
                            object-cover
                          "
                        />

                      </div>
                    )
                  )
                }

              </div>

            </div>

          </section>
        )
      }

    </main>
  );
}