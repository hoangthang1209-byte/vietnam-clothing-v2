import Link
from "next/link";

import {
  blogPosts,
} from "@/data/blog";

type Props = {
  currentSlug: string;
};

export default function RelatedPosts({
  currentSlug,
}: Props) {

  const posts =
    Object.values(
      blogPosts
    )
      .filter(
        (
          post
        ) =>
          post.slug !==
          currentSlug
      )
      .slice(0, 3);

  return (

    <section className="py-24">

      <div className="mx-auto max-w-7xl px-6">

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

        <div className="mt-12 grid gap-8 md:grid-cols-3">

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
                      rounded-[32px]
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
                        aspect-[4/3]
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
                        post.category
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
                        post.title
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
  );
}