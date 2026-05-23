import Link
from "next/link";

import {
  blogPosts,
} from "@/data/blog";

export default function BlogPage() {

  const posts =
    Object.values(
      blogPosts
    );

  return (

    <main className="bg-white text-black">

      <section className="py-32">

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

              Editorial

            </div>

            <h1
              className="
                mt-6
                text-7xl
                font-semibold
                leading-none
                tracking-tight
              "
            >

              Apparel
              Manufacturing
              Insights

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

              Insights, manufacturing
              guides and apparel industry
              knowledge from Vietnam
              Clothing.

            </p>

          </div>

          <div className="mt-24 grid gap-12 md:grid-cols-2">

            {
              posts.map(
                (
                  post
                ) => (

                  <Link
                    key={
                      post.slug
                    }
                    href={`/blog/${post.slug}`}
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

                      <img
                        src={
                          post.coverImage
                        }
                        alt={
                          post.title
                        }
                        className="
                          aspect-[16/10]
                          w-full
                          object-cover
                          transition
                          duration-700
                          group-hover:scale-105
                        "
                      />

                    </div>

                    <div className="mt-8">

                      <div
                        className="
                          text-sm
                          uppercase
                          tracking-[0.2em]
                          text-black/40
                        "
                      >

                        {
                          post.category
                        }

                      </div>

                      <h2
                        className="
                          mt-4
                          text-4xl
                          font-semibold
                          tracking-tight
                        "
                      >

                        {
                          post.title
                        }

                      </h2>

                      <p
                        className="
                          mt-4
                          text-lg
                          leading-relaxed
                          text-black/70
                        "
                      >

                        {
                          post.excerpt
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