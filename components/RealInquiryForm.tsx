"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function RealInquiryForm() {
  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const form = e.currentTarget;

    setLoading(true);
    setSuccess(false);
    setErrorMessage("");

    const formData = new FormData(form);

    const data = Object.fromEntries(
      formData.entries()
    );

    try {
      const { error } = await supabase.from("leads").insert([{ 
            brand: "Vietnam Clothing",

            company: data.company,

            contact: data.name,

            email: data.email,

            inquiry: data.message,

            quantity: data.quantity,

            status: "New",
           }]);
      if (error) throw error;
      setSuccess(true);
      form.reset();
    } catch {
      setErrorMessage("We couldn’t submit your inquiry. Please try again or email support@vietnamclothing.vn.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="inquiry" className="scroll-mt-24 bg-neutral-100 py-32">

      <div className="mx-auto max-w-4xl px-6">

        <div className="mb-16 text-center">

          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Inquiry Form
          </p>

          <h2 className="text-5xl font-bold tracking-tight">
            Start Your Project
          </h2>

        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[40px] bg-white p-10 shadow-sm"
        >

          <div className="grid gap-6 md:grid-cols-2">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="rounded-2xl border border-neutral-200 px-6 py-5 outline-none focus:border-black"
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              required
              className="rounded-2xl border border-neutral-200 px-6 py-5 outline-none focus:border-black"
            />

          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="rounded-2xl border border-neutral-200 px-6 py-5 outline-none focus:border-black"
            />

            <input
              type="text"
              name="quantity"
              placeholder="Estimated Quantity"
              className="rounded-2xl border border-neutral-200 px-6 py-5 outline-none focus:border-black"
            />

          </div>

          <div className="mt-6">

            <textarea
              rows={6}
              name="message"
              placeholder="Tell us about your project..."
              required
              className="w-full rounded-2xl border border-neutral-200 px-6 py-5 outline-none focus:border-black"
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-8 w-full rounded-full bg-black px-8 py-5 text-white transition hover:scale-[1.02]"
          >

            {loading
              ? "Submitting..."
              : "Submit Inquiry"}

          </button>

          {errorMessage && <p role="alert" className="mt-6 text-sm text-red-700">{errorMessage}</p>}

          {success && (

            <div className="mt-6 rounded-2xl bg-green-100 px-6 py-5 text-green-700">

              Inquiry submitted successfully.

            </div>

          )}

        </form>

      </div>

    </section>
  );
}