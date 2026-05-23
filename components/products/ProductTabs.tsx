"use client";

import {
  useState,
} from "react";

import type {
  Product,
} from "@/types/product";

type Props = {

  product: Product;
};

const tabs = [

  "Overview",

  "Specifications",

  "FAQ",
];

export default function ProductTabs({
  product,
}: Props) {

  const [
    activeTab,
    setActiveTab,
  ] = useState(
    "Overview"
  );

  return (

    <section
      className="
        border-t
        border-black/5
        py-32
      "
    >

      <div
        className="
          mx-auto
          max-w-7xl
          px-6
        "
      >

        <div
          className="
            flex
            flex-wrap
            gap-4
            border-b
            border-black/10
            pb-6
          "
        >

          {
            tabs.map(
              (
                tab
              ) => (

                <button
                  key={tab}
                  onClick={() =>
                    setActiveTab(
                      tab
                    )
                  }
                  className={`
                    rounded-full
                    px-6
                    py-3
                    text-sm
                    transition

                    ${
                      activeTab === tab

                        ? "bg-black text-white"

                        : "bg-neutral-100 hover:bg-neutral-200"
                    }
                  `}
                >

                  {tab}

                </button>
              )
            )
          }

        </div>

        <div
          className="
            pt-16
          "
        >

          {
            activeTab ===
              "Overview" && (

              <div
                className="
                  grid
                  gap-16
                  lg:grid-cols-2
                "
              >

                <div>

                  <h3
                    className="
                      text-4xl
                      font-bold
                      tracking-tight
                    "
                  >

                    Product Overview

                  </h3>

                  <p
                    className="
                      mt-8
                      text-lg
                      leading-8
                      text-black/60
                    "
                  >

                    {
                      product.description
                    }

                  </p>

                </div>

                <div
                  className="
                    grid
                    gap-4
                  "
                >

                  {
                    product.features.map(
                      (
                        feature,
                        index
                      ) => (

                        <div
                          key={index}
                          className="
                            rounded-[24px]
                            border
                            border-black/5
                            bg-neutral-50
                            p-6
                          "
                        >

                          {feature}

                        </div>
                      )
                    )
                  }

                </div>

              </div>
            )
          }

          {
            activeTab ===
              "Specifications" && (

              <div
                className="
                  grid
                  gap-4
                "
              >

                {
                  product.specifications.map(
                    (
                      spec,
                      index
                    ) => (

                      <div
                        key={index}
                        className="
                          flex
                          items-center
                          justify-between
                          rounded-[24px]
                          border
                          border-black/5
                          p-6
                        "
                      >

                        <div
                          className="
                            text-black/50
                          "
                        >

                          {
                            spec.label
                          }

                        </div>

                        <div
                          className="
                            font-medium
                          "
                        >

                          {
                            spec.value
                          }

                        </div>

                      </div>
                    )
                  )
                }

              </div>
            )
          }

          {
            activeTab ===
              "FAQ" && (

              <div
                className="
                  grid
                  gap-6
                "
              >

                {
                  product.faq.map(
                    (
                      item,
                      index
                    ) => (

                      <div
                        key={index}
                        className="
                          rounded-[28px]
                          border
                          border-black/5
                          p-8
                        "
                      >

                        <h3
                          className="
                            text-2xl
                            font-bold
                          "
                        >

                          {
                            item.question
                          }

                        </h3>

                        <p
                          className="
                            mt-4
                            leading-8
                            text-black/60
                          "
                        >

                          {
                            item.answer
                          }

                        </p>

                      </div>
                    )
                  )
                }

              </div>
            )
          }

        </div>

      </div>

    </section>
  );
}