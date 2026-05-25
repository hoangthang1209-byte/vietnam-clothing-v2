"use client";

import {
  useState,
} from "react";

import {
  useRouter,
} from "next/navigation";

import {
  supabase,
} from "@/lib/supabase";

type Props = {

  product: any;
};

export default function EditProductForm({

  product,

}: Props) {

  const router =
    useRouter();

  const [
    loading,
    setLoading,
  ] = useState(
    false
  );

  async function handleSubmit(
    e: React.FormEvent<
      HTMLFormElement
    >
  ) {

    e.preventDefault();

    setLoading(
      true
    );

    const formData =
      new FormData(
        e.currentTarget
      );

    const {
      error,
    } = await supabase

      .from(
        "products"
      )

      .update({

        title:
          formData.get(
            "title"
          ),

        slug:
          formData.get(
            "slug"
          ),

        category:
          formData.get(
            "category"
          ),

        image:
          formData.get(
            "image"
          ),

        description:
          formData.get(
            "description"
          ),
      })

      .eq(
        "id",
        product.id
      );

    setLoading(
      false
    );

    if (
      !error
    ) {

      router.refresh();
    }
  }

  return (

    <form
      onSubmit={
        handleSubmit
      }
      className="
        grid
        gap-5
        rounded-[32px]
        bg-white
        p-10
        shadow-sm
      "
    >

      <input
        name="title"
        defaultValue={
          product.title
        }
        className="
          rounded-2xl
          border
          border-black/10
          px-6
          py-4
          outline-none
        "
      />

      <input
        name="slug"
        defaultValue={
          product.slug
        }
        className="
          rounded-2xl
          border
          border-black/10
          px-6
          py-4
          outline-none
        "
      />

      <input
        name="category"
        defaultValue={
          product.category
        }
        className="
          rounded-2xl
          border
          border-black/10
          px-6
          py-4
          outline-none
        "
      />

      <input
        name="image"
        defaultValue={
          product.image
        }
        className="
          rounded-2xl
          border
          border-black/10
          px-6
          py-4
          outline-none
        "
      />

      <textarea
        name="description"
        rows={6}
        defaultValue={
          product.description
        }
        className="
          rounded-2xl
          border
          border-black/10
          px-6
          py-4
          outline-none
        "
      />

      <button
        type="submit"
        disabled={loading}
        className="
          rounded-full
          bg-black
          px-8
          py-4
          text-white
        "
      >

        {
          loading

            ? "Updating..."

            : "Update Product"
        }

      </button>

    </form>
  );
}