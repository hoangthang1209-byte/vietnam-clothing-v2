"use client";

import {
  motion,
} from "framer-motion";

const reviews = [

  {
    name:
      "Alex Morgan",

    company:
      "Streetwear Brand",

    review:
      "Excellent production quality and fast turnaround time. The communication and OEM support were outstanding.",
  },

  {
    name:
      "Daniel Kim",

    company:
      "Corporate Uniform Buyer",

    review:
      "Reliable manufacturing partner with premium finishing and scalable production capabilities.",
  },

  {
    name:
      "Sophia Lee",

    company:
      "Fashion Startup",

    review:
      "Vietnam Clothing helped us launch our apparel brand with professional OEM development support.",
  },
];

export default function ProductReviews() {

  return (

    <section className="py-32">

      <div className="mx-auto max-w-7xl px-6">

        <div
          className="
            mb-16
            max-w-3xl
          "
        >

          <div
            className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-black/40
            "
          >

            Client Reviews

          </div>

          <h2
            className="
              mt-6
              text-5xl
              font-bold
              tracking-tight
            "
          >

            Trusted By Modern
            Apparel Brands

          </h2>

        </div>

        <div
          className="
            grid
            gap-6
            lg:grid-cols-3
          "
        >

          {
            reviews.map(
              (
                review,
                index
              ) => (

                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay:
                      index * 0.1,
                  }}
                  className="
                    rounded-[32px]
                    border
                    border-black/5
                    bg-neutral-50
                    p-8
                  "
                >

                  <div
                    className="
                      text-lg
                      leading-8
                      text-black/70
                    "
                  >

                    “
                    {
                      review.review
                    }
                    ”

                  </div>

                  <div className="mt-10">

                    <div
                      className="
                        font-semibold
                      "
                    >

                      {
                        review.name
                      }

                    </div>

                    <div
                      className="
                        mt-1
                        text-sm
                        text-black/50
                      "
                    >

                      {
                        review.company
                      }

                    </div>

                  </div>

                </motion.div>
              )
            )
          }

        </div>

      </div>

    </section>
  );
}