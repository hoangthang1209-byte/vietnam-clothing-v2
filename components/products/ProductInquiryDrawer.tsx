"use client";

import {
  useState,
} from "react";

import {
  ArrowRight,
  X,
} from "lucide-react";

import type {
  Product,
} from "@/types/product";

type Props = {

  product: Product;

  isOpen: boolean;

  setIsOpen:
    (
      value: boolean
    ) => void;
};

export default function ProductInquiryDrawer({

  product,

  isOpen,

  setIsOpen,

}: Props) {

  const [
    isSubmitting,
    setIsSubmitting,
  ] = useState(
    false
  );

  const [
    isSubmitted,
    setIsSubmitted,
  ] = useState(
    false
  );

  const handleSubmit =
    () => {

      setIsSubmitting(
        true
      );

      setTimeout(() => {

        setIsSubmitting(
          false
        );

        setIsSubmitted(
          true
        );

      }, 1800);
    };

  if (
    !isOpen
  ) {

    return null;
  }

  return (

    <>

      <div
        onClick={() =>
          setIsOpen(
            false
          )
        }
        className="
          fixed
          inset-0
          z-[90]
          bg-black/50
          backdrop-blur-sm
        "
      />

      <div
        className="
          fixed
          right-0
          top-0
          z-[100]
          flex
          h-screen
          w-full
          max-w-xl
          flex-col
          overflow-y-auto
          border-l
          border-black/10
          bg-white
          p-8
          shadow-2xl
        "
      >

        <div
          className="
            flex
            items-center
            justify-between
          "
        >

          <div>

            <div
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-black/40
              "
            >

              Request Quote

            </div>

            <h2
              className="
                mt-3
                text-3xl
                font-bold
              "
            >

              {
                product.title
              }

            </h2>

          </div>

          <button
            onClick={() =>
              setIsOpen(
                false
              )
            }
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-neutral-100
              transition
              hover:bg-neutral-200
            "
          >

            <X
              className="
                h-5
                w-5
              "
            />

          </button>

        </div>

        <div
          className="
            mt-10
            space-y-6
          "
        >

          <input
            type="text"
            placeholder="Your Name"
            className="
              w-full
              rounded-2xl
              border
              border-black/10
              px-5
              py-4
              outline-none
              transition
              focus:border-black
            "
          />

          <input
            type="email"
            placeholder="Email Address"
            className="
              w-full
              rounded-2xl
              border
              border-black/10
              px-5
              py-4
              outline-none
              transition
              focus:border-black
            "
          />

          <input
            type="text"
            placeholder="Company Name"
            className="
              w-full
              rounded-2xl
              border
              border-black/10
              px-5
              py-4
              outline-none
              transition
              focus:border-black
            "
          />

          <textarea
            rows={6}
            placeholder="Tell us about your project..."
            className="
              w-full
              rounded-2xl
              border
              border-black/10
              px-5
              py-4
              outline-none
              transition
              focus:border-black
            "
          />

          <button
            onClick={
              handleSubmit
            }
            disabled={
              isSubmitting
            }
            className="
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-2xl
              bg-black
              px-6
              py-5
              text-white
              transition
              hover:scale-[1.01]
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >

            {
              isSubmitting

                ? "Submitting..."

                : isSubmitted

                  ? "Inquiry Submitted"

                  : "Submit Inquiry"
            }

            <ArrowRight
              className="
                h-4
                w-4
              "
            />

          </button>

          {
            isSubmitted && (

              <div
                className="
                  rounded-2xl
                  border
                  border-green-200
                  bg-green-50
                  p-5
                  text-sm
                  leading-7
                  text-green-700
                "
              >

                Thank you 😄🔥

                Our production team
                will contact you shortly
                with pricing, MOQ,
                lead time, and sampling
                details.

              </div>
            )
          }

        </div>

      </div>

    </>
  );
}