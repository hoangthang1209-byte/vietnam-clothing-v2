"use client";

import { useState }
from "react";

export default function RFQForm() {

  const [
    loading,
    setLoading,
  ] = useState(false);

  async function handleSubmit(
    e:
      React.FormEvent
  ) {

    e.preventDefault();

    setLoading(true);

    setTimeout(
      () => {

        setLoading(false);

        alert(
          "Inquiry submitted!"
        );

      },
      1200
    );
  }

  return (

    <section className="bg-neutral-100 py-32">

      <div className="mx-auto max-w-5xl px-6">

        <div className="max-w-3xl">

          <div
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-black/40
            "
          >

            Request For Quotation

          </div>

          <h2
            className="
              mt-6
              text-6xl
              font-semibold
              leading-none
              tracking-tight
            "
          >

            Start Your
            Apparel
            Project

          </h2>

        </div>

        <form
          onSubmit={
            handleSubmit
          }
          className="mt-16 grid gap-6"
        >

          <div className="grid gap-6 md:grid-cols-2">

            <input
              type="text"
              placeholder="Full Name"
              className="
                h-16
                rounded-2xl
                border
                border-black/10
                bg-white
                px-6
                outline-none
              "
              required
            />

            <input
              type="text"
              placeholder="Company"
              className="
                h-16
                rounded-2xl
                border
                border-black/10
                bg-white
                px-6
                outline-none
              "
            />

          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <input
              type="email"
              placeholder="Email Address"
              className="
                h-16
                rounded-2xl
                border
                border-black/10
                bg-white
                px-6
                outline-none
              "
              required
            />

            <input
              type="text"
              placeholder="Product Type"
              className="
                h-16
                rounded-2xl
                border
                border-black/10
                bg-white
                px-6
                outline-none
              "
            />

          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <input
              type="text"
              placeholder="Estimated MOQ"
              className="
                h-16
                rounded-2xl
                border
                border-black/10
                bg-white
                px-6
                outline-none
              "
            />

            <input
              type="file"
              className="
                flex
                h-16
                items-center
                rounded-2xl
                border
                border-black/10
                bg-white
                px-6
                pt-4
              "
            />

          </div>

          <textarea
            placeholder="Tell us about your project..."
            rows={8}
            className="
              rounded-3xl
              border
              border-black/10
              bg-white
              p-6
              outline-none
            "
          />

          <button
            type="submit"
            disabled={loading}
            className="
              inline-flex
              h-16
              items-center
              justify-center
              rounded-full
              bg-black
              px-10
              text-white
              transition
              hover:bg-neutral-800
            "
          >

            {
              loading
                ? "Submitting..."
                : "Submit Inquiry"
            }

          </button>

        </form>

      </div>

    </section>
  );
}