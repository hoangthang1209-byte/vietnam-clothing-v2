"use client";

import {
  useState,
} from "react";

import ImageUploader
from "@/components/admin/ImageUploader";

import GalleryUploader
from "@/components/admin/GalleryUploader";

export default function NewProductPage() {

  const [
    imageUrl,
    setImageUrl,
  ] = useState(
    ""
  );

  const [
    gallery,
    setGallery,
  ] = useState<
    string[]
  >([]);

  const [
    slug,
    setSlug,
  ] = useState(
    ""
  );

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

            Create Product

          </h1>

        </div>

        <form
          action="/api/admin/products/create"
          method="POST"
          className="
            mt-16
            grid
            gap-8
          "
        >

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

              onChange={(
                e
              ) => {

                const value =
                  e.target.value;

                setSlug(

                  value

                    .toLowerCase()

                    .replaceAll(
                      " ",
                      "-"
                    )

                    .replace(
                      /[^a-z0-9-]/g,
                      ""
                    )
                );
              }}

              placeholder="
                Premium Oversized T-Shirt
              "
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

              value={
                slug
              }

              onChange={(
                e
              ) =>
                setSlug(
                  e.target.value
                )
              }

              placeholder="
                premium-oversized-tshirt
              "
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
              placeholder="
                T-Shirts
              "
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

            <div
              className="
                mt-5
              "
            >

              <ImageUploader
                onUpload={
                  setImageUrl
                }
              />

            </div>

            <input
              name="image"
              value={
                imageUrl
              }
              onChange={
                (
                  e
                ) =>
                  setImageUrl(
                    e.target.value
                  )
              }
              placeholder="
                https://...
              "
              className="
                mt-5
                w-full
                rounded-2xl
                border
                border-black/10
                px-5
                py-4
                outline-none
              "
            />

            {
              imageUrl && (

                <img
                  src={
                    imageUrl
                  }
                  alt=""
                  className="
                    mt-6
                    h-64
                    w-full
                    rounded-3xl
                    object-cover
                  "
                />
              )
            }

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

              Gallery Images

            </label>

            <div
              className="
                mt-5
              "
            >

              <GalleryUploader
                onUpload={
                  setGallery
                }
              />

            </div>

            <input
              type="hidden"
              name="gallery"
              value={
                JSON.stringify(
                  gallery
                )
              }
            />

            {
              gallery.length > 0 && (

                <div
                  className="
                    mt-8
                    grid
                    grid-cols-2
                    gap-4
                  "
                >

                  {
                    gallery.map(
                      (
                        image,
                        index
                      ) => (

                        <img
                          key={index}
                          src={image}
                          alt=""
                          className="
                            aspect-square
                            w-full
                            rounded-3xl
                            object-cover
                          "
                        />
                      )
                    )
                  }

                </div>
              )
            }

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
              rows={8}
              placeholder="
                Product description...
              "
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

              Rich Content

            </label>

            <textarea
              name="content"
              rows={16}
              placeholder="
                Full product content...
              "
              className="
                mt-3
                w-full
                rounded-2xl
                border
                border-black/10
                px-5
                py-4
                font-mono
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

            Create Product

          </button>

        </form>

      </div>

    </main>
  );
}