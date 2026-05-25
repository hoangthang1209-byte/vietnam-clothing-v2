import type {
    Metadata,
  } from "next";
  
  import Link
  from "next/link";
  
  import Image
  from "next/image";
  
  import {
    createClient,
  } from "@/lib/supabase/server";
  
  type Props = {
  
    params: {
  
      slug: string;
      locale: string;
    };
  };
  
  export async function generateMetadata({
  
    params,
  
  }: Props): Promise<
    Metadata
  > {
  
    return {
  
      title:
        `${params.slug} Manufacturer | Vietnam Clothing`,
  
      description:
        `OEM ${params.slug} manufacturer in Vietnam.`,
    };
  }
  
  export default async function CategoryPage({
  
    params,
  
  }: Props) {
  
    const supabase =
      await createClient();
  
    const {
      data: products,
    } = await supabase
  
      .from(
        "products"
      )
  
      .select("*")
  
      .ilike(
        "category",
        params.slug
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
  
              Product Category
  
            </div>
  
            <h1
              className="
                mt-6
                text-6xl
                font-bold
                tracking-tight
              "
            >
  
              {
                params.slug
              }
  
            </h1>
  
            <p
              className="
                mt-8
                text-lg
                leading-8
                text-black/60
              "
            >
  
              Vietnam Clothing is
              an OEM apparel
              manufacturer
              specializing in
              high-quality
              {
                " "}
              {
                params.slug
              }.
  
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
              products?.map(
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
                        rounded-[32px]
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
                        mt-6
                      "
                    >
  
                      <h2
                        className="
                          text-2xl
                          font-semibold
                          tracking-tight
                        "
                      >
  
                        {
                          product.title
                        }
  
                      </h2>
  
                      <div
                        className="
                          mt-3
                          text-black/60
                        "
                      >
  
                        {
                          product.category
                        }
  
                      </div>
  
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