"use client";

import {
  useRouter,
} from "next/navigation";

import {
  supabase,
} from "@/lib/supabase";

type Props = {

  productId: number;
};

export default function DeleteProductButton({

  productId,

}: Props) {

  const router =
    useRouter();

  async function handleDelete() {

    const confirmed =
      window.confirm(
        "Delete this product?"
      );

    if (
      !confirmed
    ) {

      return;
    }

    const {
      error,
    } = await supabase

      .from(
        "products"
      )

      .delete()

      .eq(
        "id",
        productId
      );

    if (
      !error
    ) {

      router.refresh();
    }
  }

  return (

    <button
      onClick={
        handleDelete
      }
      className="
        rounded-full
        border
        border-red-200
        px-5
        py-2
        text-sm
        text-red-600
      "
    >

      Delete

    </button>
  );
}