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

  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setLoading(true);
    setErrorMessage("");
    setSuccess(false);

    const formData = new FormData(form);
    formData.set("product", product || "");

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Submission failed");
      }
      setSuccess(true);
      form.reset();
    } catch {
      setErrorMessage("We could not submit your inquiry. Please try again or email support@vietnamclothing.vn.");
    } finally {
      setLoading(false);
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
      {errorMessage && <p role="alert" className="text-sm text-red-700">{errorMessage}</p>}
      {success && <p role="status" className="text-sm text-green-700">Your inquiry has been received.</p>}


    </form>
  );
}