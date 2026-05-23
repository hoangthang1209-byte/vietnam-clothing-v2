import type {
  Metadata,
} from "next";

import Link
from "next/link";

import Image
from "next/image";

import { notFound }
from "next/navigation";

import {
  collections,
} from "@/data/collections";

import Breadcrumb
from "@/components/navigation/Breadcrumb";

type Props = {

  params:
    Promise<{
      locale: string;
      slug: string;
    }>;
};

export async function generateStaticParams() {

  return Object.keys(
    collections
  ).map(
    (
      slug
    ) => ({

      slug,
    })
  );
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {

  const {
    slug,
  } = await params;

  const collection =
    collections[
      slug as keyof typeof collections
    ];

  if (
    !collection
  ) {

    return {};
  }

  return {

    title:
      collection.seoTitle,

    description:
      collection.seoDescription,

    openGraph: {

      title:
        collection.seoTitle,

      description:
        collection.seoDescription,

      images: [
        collection.heroImage,
      ],
    },
  };
}

export default async function CollectionPage({
  params,
}: Props) {

  const {
    slug,
  } = await params;

  const collection =
    collections[
      slug as keyof typeof collections
    ];

  if (
    !collection
  ) {

    notFound();
  }

  return (

    <main className="bg-white text-black">

      <section className="pt-32">

        <div className="mx-auto max-w-7xl px-6">

          <Breadcrumb
            items={[
              {
                label:
                  "Collections",

                href:
                  "/en/collections",
              },

              {
                label:
                  collection.title,

                href:
                  `/en/collections/${slug}`,
              },
            ]}
          />

        </div>

      </section>

      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-4xl">

            <div
              className="
                text-sm
                uppercase
                tracking-[0.3em]
                text-black/40
              "
            >

              Collection

            </div>

            <h1
              className="
                mt-6
                text-5xl
                font-semibold
                tracking-tight
                md:text-7xl
              "
            >

              {
                collection.title
              }

            </h1>

            <p
              className="
                mt-8
                max-w-2xl
                text-xl
                leading-relaxed
                text-black/70
              "
            >

              {
                collection.description
              }

            </p>

          </div>

          <div
            className="
              mt-16
              overflow-hidden
              rounded-[40px]
            "
          >

            <Image
              src={
                collection.heroImage
              }
              alt={
                collection.title
              }
              width={2000}
              height={1200}
              className="
                aspect-[16/8]
                w-full
                object-cover
              "
            />

          </div>

        </div>

      </section>

      <section className="pb-32">

        <div className="mx-auto max-w-7xl px-6">

          <div
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-black/40
            "
          >

            Products

          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-3">

            {
              collection.products.map(
                (
                  product
                ) => (

                  <Link
                    key={
                      product.slug
                    }
                    href={`/en/products/${product.slug}`}
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
                        width={1400}
                        height={1600}
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

                    <div className="mt-6">

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

                      <div
                        className="
                          mt-3
                          text-3xl
                          font-semibold
                          tracking-tight
                        "
                      >

                        {
                          product.title
                        }

                      </div>

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