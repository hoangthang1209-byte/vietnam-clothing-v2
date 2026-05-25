import Link
from "next/link";

import Image
from "next/image";

import {
  createClient,
} from "@/lib/supabase/server";

type Props = {

  currentSlug: string;
};

export default async function RelatedBlogs({

  currentSlug,

}: Props) {

  const supabase =
    await createClient();

  const {
    data: blogs,
  } = await supabase

    .from(
      "blogs"
    )

    .select("*")

    .neq(
      "slug",
      currentSlug
    )

    .limit(3)

    .order(
      "created_at",
      {
        ascending: false,
      }
    );

  if (
    !blogs ||
    blogs.length === 0
  ) {

    return null;
  }

  return (

    <section
      className="
        border-t
        border-black/10
        px-6
        py-24
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

              Related Articles

            </div>

            <h2
              className="
                mt-6
                text-5xl
                font-black
                tracking-tight
              "
            >

              Continue Reading

            </h2>

          </div>

        </div>

        <div
          className="
            mt-16
            grid
            gap-8
            lg:grid-cols-3
          "
        >

          {
            blogs.map(
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

                    <h3
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

                    </h3>

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