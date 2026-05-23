"use client";

import {
  useState,
} from "react";

import {
  supabase,
} from "@/lib/supabase";

export default function InquiryForm() {

  const [
    loading,
    setLoading,
  ] = useState(
    false
  );

  const [
    success,
    setSuccess,
  ] = useState(
    false
  );

  const [
    errorMessage,
    setErrorMessage,
  ] = useState(
    ""
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

    setSuccess(
      false
    );

    setErrorMessage(
      ""
    );

    const formData =
      new FormData(
        e.currentTarget
      );

    const name =
      formData.get(
        "name"
      );

    const email =
      formData.get(
        "email"
      );

    const company =
      formData.get(
        "company"
      );

    const message =
      formData.get(
        "message"
      );

    const {
      error,
    } = await supabase
      .from(
        "inquiries"
      )
      .insert([

        {
          name,
          email,
          company,
          message,
        },
      ]);

    setLoading(
      false
    );

    if (
      error
    ) {

      setErrorMessage(
        "Something went wrong. Please try again."
      );

      return;
    }

    setSuccess(
      true
    );

    (
      e.target as HTMLFormElement
    ).reset();
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
        type="text"
        placeholder="Your Name"
        required
        className="
          rounded-2xl
          border
          border-black/10
          bg-white
          px-6
          py-4
          outline-none
          transition
          focus:border-black
        "
      />

      <input
        name="email"
        type="email"
        placeholder="Email Address"
        required
        className="
          rounded-2xl
          border
          border-black/10
          bg-white
          px-6
          py-4
          outline-none
          transition
          focus:border-black
        "
      />

      <input
        name="company"
        type="text"
        placeholder="Company Name"
        className="
          rounded-2xl
          border
          border-black/10
          bg-white
          px-6
          py-4
          outline-none
          transition
          focus:border-black
        "
      />

      <textarea
        name="message"
        rows={6}
        placeholder="Tell us about your project..."
        required
        className="
          rounded-2xl
          border
          border-black/10
          bg-white
          px-6
          py-4
          outline-none
          transition
          focus:border-black
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
          transition
          hover:scale-[1.02]
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >

        {
          loading

            ? "Submitting..."

            : "Submit Inquiry"
        }

      </button>

      {
        success && (

          <div
            className="
              rounded-2xl
              border
              border-green-200
              bg-green-50
              px-5
              py-4
              text-sm
              text-green-700
            "
          >

            Inquiry submitted successfully.

          </div>
        )
      }

      {
        errorMessage && (

          <div
            className="
              rounded-2xl
              border
              border-red-200
              bg-red-50
              px-5
              py-4
              text-sm
              text-red-700
            "
          >

            {
              errorMessage
            }

          </div>
        )
      }

    </form>
  );
}