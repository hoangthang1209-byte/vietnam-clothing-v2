import Link
from "next/link";

export default function AdminBlogPage() {

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

          <h1
            className="
              text-4xl
              font-black
            "
          >

            Blog CMS

          </h1>

          <Link
            href="
              /en/admin/blog/new
            "

            className="
              rounded-full
              bg-black
              px-6
              py-3
              text-sm
              font-semibold
              text-white
            "
          >

            New Blog

          </Link>

        </div>

      </div>

    </main>
  );
}