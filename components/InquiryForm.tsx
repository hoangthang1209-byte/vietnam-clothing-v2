"use client";

export default function InquiryForm() {
  return (
    <section className="mt-32">

      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
        Contact Us
      </p>

      <h2 className="mb-12 text-5xl font-bold">
        Request A Quotation
      </h2>

      <form className="grid gap-6">

        <div className="grid gap-6 md:grid-cols-2">

          <input
            type="text"
            placeholder="Your Name"
            className="rounded-2xl border border-neutral-300 px-6 py-5 outline-none focus:border-black"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="rounded-2xl border border-neutral-300 px-6 py-5 outline-none focus:border-black"
          />

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <input
            type="text"
            placeholder="Company Name"
            className="rounded-2xl border border-neutral-300 px-6 py-5 outline-none focus:border-black"
          />

          <input
            type="text"
            placeholder="Product Category"
            className="rounded-2xl border border-neutral-300 px-6 py-5 outline-none focus:border-black"
          />

        </div>

        <textarea
          placeholder="Tell us about your project..."
          rows={6}
          className="rounded-2xl border border-neutral-300 px-6 py-5 outline-none focus:border-black"
        />

        <button className="w-fit rounded-full bg-black px-8 py-4 text-white">
          Submit Inquiry
        </button>

      </form>

    </section>
  );
}