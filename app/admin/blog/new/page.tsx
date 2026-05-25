import BlogEditorForm
from "@/components/blog/BlogEditorForm";

export default function NewBlogPage() {

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
          max-w-5xl
        "
      >

        <h1
          className="
            text-4xl
            font-black
            tracking-tight
          "
        >

          Create Blog Post

        </h1>

        <div
          className="
            mt-10
          "
        >

          <BlogEditorForm />

        </div>

      </div>

    </main>
  );
}