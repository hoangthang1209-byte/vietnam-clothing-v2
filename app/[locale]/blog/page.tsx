import Link
from "next/link";

import Image
from "next/image";

import type {
  Metadata,
} from "next";

import {
  createClient,
} from "@/lib/supabase/server";

export const metadata:
Metadata = {

  title:
    "Blog | Vietnam Clothing",

  description:
    "Explore apparel manufacturing insights, OEM production knowledge and sourcing guides from Vietnam Clothing.",

  openGraph: {

    title:
      "Vietnam Clothing Blog",

    description:
      "Apparel manufacturing insights and OEM production knowledge.",

    images: [

      {
        url:
          "/og-image.jpg",
      },
    ],
  },
};

export default async function BlogPage() {

  const supabase =
    await createClient();

  const {
    data: blogs,
  } = await supabase

    .from(
      "blogs"
    )

    .select("*")

    .eq(
      "published",
      true
    )

    .order(
      "created_at",
      {
        ascending: false,
      }
    );

  const jsonLd = {

    "@context":
      "https://schema.org",

    "@type":
      "Blog",

    name:
      "Vietnam Clothing Blog",

    description:
      "Apparel manufacturing insights and sourcing knowledge.",

    publisher: {

      "@type":
        "Organization",

      name:
        "Vietnam Clothing",
    },
  };

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

      <script
        type="
          application/ld+json
        "
        dangerouslySetInnerHTML={{

          __html:
            JSON.stringify(
              jsonLd
            ),
        }}
      />

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

            Vietnam Clothing Blog

          </div>

          <h1
            className="
              mt-6
              text-6xl
              font-black
              tracking-tight
            "
          >

            Apparel Manufacturing
            Insights

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

            Explore apparel
            manufacturing insights,
            sourcing tips and OEM
            production knowledge
            from Vietnam Clothing.

          </p>

        </div>

        <div
          className="
            mt-20
            grid
            gap-10
            lg:grid-cols-3
          "
        >

          {
            blogs?.map(
              (
                blog: any
              ) => (

                <Link
                  key={
                    blog.id
                  }

                  href={`
                    /en/blog/${blog.slug}
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
                        blog.image
                      }
                      alt={
                        blog.title
                      }
                      width={1200}
                      height={800}
                      className="
                        aspect-[4/3]
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
                        blog.category
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
                        blog.title
                      }

                    </h2>

                    <p
                      className="
                        mt-6
                        leading-8
                        text-black/60
                      "
                    >

                      {
                        blog.excerpt
                      }

                    </p>

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