"use client";

import {
  useState,
} from "react";

import {
  useRouter,
} from "next/navigation";

import RichTextEditor
from "@/components/blog/RichTextEditor";

type Props = {

  blog: any;
};

export default function BlogUpdateForm({

  blog,

}: Props) {

  const router =
    useRouter();

  const [
    loading,
    setLoading,
  ] = useState(
    false
  );

  const [
    deleting,
    setDeleting,
  ] = useState(
    false
  );

  const [
    uploading,
    setUploading,
  ] = useState(
    false
  );

  const [
    form,
    setForm,
  ] = useState({

    title:
      blog.title || "",

    slug:
      blog.slug || "",

    excerpt:
      blog.excerpt || "",

    image:
      blog.image || "",

    category:
      blog.category || "",

    content:
      blog.content || "",

    published:
      blog.published ?? true,
  });

  function generateSlug(
    text: string
  ) {

    return text

      .toLowerCase()

      .trim()

      .replace(
        /[^a-z0-9\s-]/g,
        ""
      )

      .replace(
        /\s+/g,
        "-"
      )

      .replace(
        /-+/g,
        "-"
      );
  }

  async function handleUpload(
    file: File
  ) {

    setUploading(true);

    try {

      const formData =
        new FormData();

      formData.append(
        "file",
        file
      );

      const response =
        await fetch(

          "/api/upload",

          {

            method:
              "POST",

            body:
              formData,
          }
        );

      const data =
        await response.json();

      if (
        data.url
      ) {

        setForm(
          (
            prev
          ) => ({

            ...prev,

            image:
              data.url,
          })
        );
      }

    } catch (
      error
    ) {

      console.error(
        error
      );
    }

    setUploading(false);
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();

    setLoading(true);

    try {

      const response =
        await fetch(

          `/api/admin/blog/${blog.id}`,

          {

            method: "PATCH",

            headers: {

              "Content-Type":
                "application/json",
            },

            body:
              JSON.stringify(
                form
              ),
          }
        );

      if (
        response.ok
      ) {

        router.refresh();
      }

    } catch (
      error
    ) {

      console.error(
        error
      );
    }

    setLoading(false);
  }

  async function handleDelete() {

    const confirmed =
      confirm(
        "Delete this blog?"
      );

    if (!confirmed) {

      return;
    }

    setDeleting(true);

    try {

      const response =
        await fetch(

          `/api/admin/blog/${blog.id}`,

          {
            method:
              "DELETE",
          }
        );

      if (
        response.ok
      ) {

        router.push(
          "/admin/blog"
        );

        router.refresh();
      }

    } catch (
      error
    ) {

      console.error(
        error
      );
    }

    setDeleting(false);
  }

  return (

    <form
      onSubmit={
        handleSubmit
      }
      className="
        space-y-6
        rounded-[32px]
        bg-white
        p-10
      "
    >

      <div>

        <label
          className="
            text-sm
            font-semibold
          "
        >

          Title

        </label>

        <input
          type="text"

          value={
            form.title
          }

          onChange={(e) => {

            const value =
              e.target.value;

            setForm({

              ...form,

              title:
                value,

              slug:
                generateSlug(
                  value
                ),
            });
          }}

          className="
            mt-3
            w-full
            rounded-2xl
            border
            border-black/10
            px-5
            py-4
            outline-none
          "
        />

      </div>

      <div>

        <label
          className="
            text-sm
            font-semibold
          "
        >

          Slug

        </label>

        <input
          type="text"

          value={
            form.slug
          }

          onChange={(e) =>
            setForm({

              ...form,

              slug:
                e.target.value,
            })
          }

          className="
            mt-3
            w-full
            rounded-2xl
            border
            border-black/10
            px-5
            py-4
            outline-none
          "
        />

      </div>

      <div>

        <label
          className="
            text-sm
            font-semibold
          "
        >

          Excerpt

        </label>

        <textarea

          rows={4}

          value={
            form.excerpt
          }

          onChange={(e) =>
            setForm({

              ...form,

              excerpt:
                e.target.value,
            })
          }

          className="
            mt-3
            w-full
            rounded-2xl
            border
            border-black/10
            px-5
            py-4
            outline-none
          "
        />

      </div>

      <div>

        <label
          className="
            text-sm
            font-semibold
          "
        >

          Featured Image

        </label>

        <input
          type="file"

          accept="image/*"

          onChange={(e) => {

            const file =
              e.target.files?.[0];

            if (file) {

              handleUpload(
                file
              );
            }
          }}

          className="
            mt-3
            block
            w-full
            text-sm
          "
        />

        {
          uploading && (

            <div
              className="
                mt-3
                text-sm
                text-black/60
              "
            >

              Uploading...

            </div>
          )
        }

        {
          form.image && (

            <img
              src={
                form.image
              }
              alt="Preview"
              className="
                mt-5
                h-48
                w-full
                rounded-2xl
                object-cover
              "
            />
          )
        }

      </div>

      <div>

        <label
          className="
            text-sm
            font-semibold
          "
        >

          Category

        </label>

        <input
          type="text"

          value={
            form.category
          }

          onChange={(e) =>
            setForm({

              ...form,

              category:
                e.target.value,
            })
          }

          className="
            mt-3
            w-full
            rounded-2xl
            border
            border-black/10
            px-5
            py-4
            outline-none
          "
        />

      </div>

      <div>

        <label
          className="
            text-sm
            font-semibold
          "
        >

          Content

        </label>

        <div
          className="
            mt-3
          "
        >

          <RichTextEditor
            value={
              form.content
            }

            onChange={(
                value: string
            ) =>
              setForm({

                ...form,

                content:
                  value,
              })
            }
          />

        </div>

      </div>

      <label
        className="
          flex
          items-center
          gap-3
        "
      >

        <input
          type="checkbox"

          checked={
            form.published
          }

          onChange={(e) =>
            setForm({

              ...form,

              published:
                e.target.checked,
            })
          }
        />

        Published

      </label>

      <div
        className="
          flex
          flex-wrap
          gap-4
        "
      >

        <button
          type="submit"

          disabled={
            loading ||
            uploading
          }

          className="
            rounded-full
            bg-black
            px-8
            py-4
            text-sm
            font-semibold
            text-white
          "
        >

          {
            loading

              ? "Updating..."

              : "Update Blog"
          }

        </button>

        <button
          type="button"

          onClick={
            handleDelete
          }

          disabled={
            deleting
          }

          className="
            rounded-full
            border
            border-red-200
            px-8
            py-4
            text-sm
            font-semibold
            text-red-500
          "
        >

          {
            deleting

              ? "Deleting..."

              : "Delete Blog"
          }

        </button>

      </div>

    </form>
  );
}