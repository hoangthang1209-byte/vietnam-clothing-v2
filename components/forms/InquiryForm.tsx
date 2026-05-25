"use client";

import {
  useState,
} from "react";

type Props = {

  product?: string;
};

export default function InquiryForm({

  product,

}: Props) {

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

    formData.append(
      "product",
      product || ""
    );

    await fetch(

      "/api/inquiries",

      {

        method:
          "POST",

        body:
          formData,
      }
    );

    alert(
      "Inquiry submitted!"
    );

    setLoading(
      false
    );

    e.currentTarget.reset();
  }

  return (

    <form
      onSubmit={
        handleSubmit
      }
      className="
        grid
        gap-5
      "
    >

      <input
        name="name"
        placeholder="
          Your name
        "
        required
        className="
          w-full
          rounded-2xl
          border
          border-black/10
          px-5
          py-4
          outline-none
        "
      />

      <input
        type="email"
        name="email"
        placeholder="
          Email address
        "
        required
        className="
          w-full
          rounded-2xl
          border
          border-black/10
          px-5
          py-4
          outline-none
        "
      />

      <input
        name="company"
        placeholder="
          Company name
        "
        className="
          w-full
          rounded-2xl
          border
          border-black/10
          px-5
          py-4
          outline-none
        "
      />

      <textarea
        name="message"
        rows={6}
        placeholder="
          Tell us about your project...
        "
        required
        className="
          w-full
          rounded-2xl
          border
          border-black/10
          px-5
          py-4
          outline-none
        "
      />

      <input
        type="file"
        name="attachment"
        className="
          w-full
          rounded-2xl
          border
          border-dashed
          border-black/10
          px-5
          py-5
        "
      />

      <button
        type="submit"
        disabled={
          loading
        }
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

        {
          loading

            ? "Submitting..."

            : "Submit Inquiry"
        }

      </button>

    </form>
  );
}