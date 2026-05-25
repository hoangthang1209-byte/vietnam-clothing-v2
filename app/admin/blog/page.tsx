import Link
from "next/link";

import {
  createClient,
} from "@/lib/supabase/server";

export default async function AdminBlogPage() {

  const supabase =
    await createClient();

  const {
    data: blogs,
  } = await supabase

    .from(
      "blogs"
    )

    .select("*")

    .order(
      "created_at",
      {
        ascending: false,
      }
    );

  return (

    <main
      className="
        min-h-screen
        bg-neutral-100
        p-10
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
            items-center
            justify-between
          "
        >

          <div>

            <h1
              className="
                text-4xl
                font-black
                tracking-tight
              "
            >

              Blog CMS

            </h1>

            <p
              className="
                mt-3
                text-black/60
              "
            >

              Manage SEO blog posts.

            </p>

          </div>

          <Link
            href="/admin/blog/new"
            className="
              rounded-full
              bg-black
              px-6
              py-3
              text-sm
              font-medium
              text-white
            "
          >

            New Blog

          </Link>

        </div>

        <div
          className="
            mt-10
            overflow-hidden
            rounded-[32px]
            bg-white
          "
        >

          <table
            className="
              w-full
            "
          >

            <thead
              className="
                border-b
                border-black/10
              "
            >

              <tr>

                <th
                  className="
                    px-6
                    py-5
                    text-left
                  "
                >

                  Title

                </th>

                <th
                  className="
                    px-6
                    py-5
                    text-left
                  "
                >

                  Category

                </th>

                <th
                  className="
                    px-6
                    py-5
                    text-left
                  "
                >

                  Status

                </th>

              </tr>

            </thead>

            <tbody>

              {
                blogs?.map(
                  (
                    blog: any
                  ) => (

                    <tr
                      key={
                        blog.id
                      }
                      className="
                        border-b
                        border-black/5
                      "
                    >

                      <td
                        className="
                          px-6
                          py-5
                        "
                      >

                        <Link
                          href={`
                            /admin/blog/${blog.id}
                          `}
                          className="
                            font-semibold
                          "
                        >

                          {
                            blog.title
                          }

                        </Link>

                      </td>

                      <td
                        className="
                          px-6
                          py-5
                          text-black/60
                        "
                      >

                        {
                          blog.category
                        }

                      </td>

                      <td
                        className="
                          px-6
                          py-5
                        "
                      >

                        {
                          blog.published

                            ? "Published"

                            : "Draft"
                        }

                      </td>

                    </tr>
                  )
                )
              }

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}