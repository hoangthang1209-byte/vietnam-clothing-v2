"use client";

import {
  useState,
} from "react";

import {
  supabase,
} from "@/lib/supabase";

type Props = {

  onUpload: (
    url: string
  ) => void;
};

export default function ImageUpload({

  onUpload,

}: Props) {

  const [
    uploading,
    setUploading,
  ] = useState(
    false
  );

  async function handleUpload(
    e: React.ChangeEvent<
      HTMLInputElement
    >
  ) {

    const file =
      e.target.files?.[0];

    if (
      !file
    ) {

      return;
    }

    setUploading(
      true
    );

    const fileName =
      `${Date.now()}-${file.name}`;

    const {
      error,
    } = await supabase

      .storage

      .from(
        "products"
      )

      .upload(
        fileName,
        file
      );

    setUploading(
      false
    );

    if (
      error
    ) {

      return;
    }

    const {
      data,
    } = supabase

      .storage

      .from(
        "products"
      )

      .getPublicUrl(
        fileName
      );

    onUpload(
      data.publicUrl
    );
  }

  return (

    <div>

      <input
        type="file"
        accept="image/*"
        onChange={
          handleUpload
        }
      />

      {
        uploading && (

          <div
            className="
              mt-3
              text-sm
              text-black/50
            "
          >

            Uploading...

          </div>
        )
      }

    </div>
  );
}