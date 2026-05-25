"use client";

import {
  useState,
} from "react";

type Props = {

  onUpload: (
    urls: string[]
  ) => void;
};

export default function GalleryUploader({

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

    const files =
      e.target.files;

    if (
      !files
    ) {

      return;
    }

    setUploading(
      true
    );

    const uploadedUrls:
      string[] = [];

    for (

      const file of files

    ) {

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

      uploadedUrls.push(
        data.url
      );
    }

    onUpload(
      uploadedUrls
    );

    setUploading(
      false
    );
  }

  return (

    <div>

      <input
        type="file"
        multiple
        accept="image/*"
        onChange={
          handleUpload
        }
      />

      {
        uploading && (

          <div
            className="
              mt-4
              text-sm
              text-black/60
            "
          >

            Uploading gallery...

          </div>
        )
      }

    </div>
  );
}