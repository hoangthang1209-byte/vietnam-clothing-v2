"use client";

import dynamic
from "next/dynamic";

import type {
  ComponentType,
} from "react";

const ReactQuill =
  dynamic(
    async () => {

      const quill =
        await import(
          "react-quill"
        );

      return quill.default as ComponentType<any>;
    },

    {
      ssr: false,
    }
  );

type Props = {

  value: string;

  onChange: (
    value: string
  ) => void;
};

export default function RichTextEditor({

  value,

  onChange,

}: Props) {

  return (

    <div
      className="
        overflow-hidden
        rounded-[24px]
        border
        border-black/10
      "
    >

      <ReactQuill
        theme="snow"

        value={
          value
        }

        onChange={
          onChange
        }

        className="
          bg-white
        "
      />

    </div>
  );
}