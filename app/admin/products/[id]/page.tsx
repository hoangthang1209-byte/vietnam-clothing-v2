import {
  notFound,
} from "next/navigation";

import {
  createClient,
} from "@/lib/supabase/server";

type Props = {

  params: {

    id: string;
  };
};

export default async function EditProductPage({

  params,

}: Props) {

  const supabase =
    await createClient();

  const {
    data: product,
  } = await supabase

    .from(
      "products"
    )

    .select("*")

    .eq(
      "id",
      params.id
    )

    .single();

  if (
    !product
  ) {

    notFound();
  }

  return (

    <main
      className="
        min-h-screen
        bg-neutral-50
        px-6
        py-20
      "
    >

      <div
        className="
          mx-auto
          max-w-5xl
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

            Admin Panel

          </div>

          <h1
            className="
              mt-6
              text-5xl
              font-bold
              tracking-tight
            "
          >

            Edit Product

          </h1>

        </div>

        <form
          action="/api/admin/products/update"
          method="POST"
          className="
            mt-16
            grid
            gap-8
          "
        >

          <input
            type="hidden"
            name="id"
            defaultValue={
              product.id
            }
          />

          <div
            className="
              rounded-[32px]
              bg-white
              p-8
            "
          >

            <label
              className="
                text-sm
                font-medium
              "
            >

              Product Title

            </label>

            <input
              name="title"
              defaultValue={
                product.title
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

          <div
            className="
              rounded-[32px]
              bg-white
              p-8
            "
          >

            <label
              className="
                text-sm
                font-medium
              "
            >

              Slug

            </label>

            <input
              name="slug"
              defaultValue={
                product.slug
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

          <div
            className="
              rounded-[32px]
              bg-white
              p-8
            "
          >

            <label
              className="
                text-sm
                font-medium
              "
            >

              Category

            </label>

            <input
              name="category"
              defaultValue={
                product.category
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

          <div
            className="
              rounded-[32px]
              bg-white
              p-8
            "
          >

            <label
              className="
                text-sm
                font-medium
              "
            >

              Featured Image

            </label>

            <input
              name="image"
              defaultValue={
                product.image
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

          <div
            className="
              rounded-[32px]
              bg-white
              p-8
            "
          >

            <label
              className="
                text-sm
                font-medium
              "
            >

              Description

            </label>

            <textarea
              name="description"
              defaultValue={
                product.description
              }
              rows={8}
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

          <button
            type="submit"
            className="
              rounded-full
              bg-black
              px-8
              py-5
              text-sm
              font-medium
              text-white
            "
          >

            Update Product

          </button>

        </form>

        <form
          action="/api/admin/products/delete"
          method="POST"
          className="
            mt-6
          "
        >

          <input
            type="hidden"
            name="id"
            value={
              product.id
            }
          />

          <button
            type="submit"
            className="
              rounded-full
              bg-red-500
              px-8
              py-5
              text-sm
              font-medium
              text-white
            "
          >

            Delete Product

          </button>

        </form>

      </div>

    </main>
  );
}