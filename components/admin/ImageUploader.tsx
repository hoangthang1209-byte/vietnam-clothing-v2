"use client";

import {
  useState,
} from "react";

type Props = {

  onUpload: (
    url: string
  ) => void;
};

export default function ImageUploader({

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

    const formData =
      new FormData();

    formData.append(
      "file",
      file
    );

    const response =
      await fetch(

        "/api/admin/upload",

        {

          method:
            "POST",

          body:
            formData,
        }
      );

    const data =
      await response.json();

    onUpload(
      data.url
    );

    setUploading(
      false
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
              text-black/60
            "
          >

            Uploading...

          </div>
        )
      }

    </div>
  );
}