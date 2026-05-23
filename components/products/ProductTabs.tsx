"use client";

import {
  useState,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import type {
  Product,
} from "@/types/product";

type Props = {

  product: Product;
};

export default function ProductTabs({
  product,
}: Props) {

  const [
    activeTab,
    setActiveTab,
  ] = useState(
    "features"
  );

  return (

    <section className="py-24">

      <div className="mx-auto max-w-7xl px-6">

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
            [
              "features",
              "materials",
              "specifications",
            ].map(
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
                    font-medium
                    capitalize
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

        <div className="pt-12">

          <AnimatePresence
            mode="wait"
          >

            <motion.div
              key={activeTab}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.25,
              }}
            >

              {
                activeTab === "features" && (

                  <div
                    className="
                      grid
                      gap-4
                      md:grid-cols-2
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
                )
              }

              {
                activeTab === "materials" && (

                  <div
                    className="
                      flex
                      flex-wrap
                      gap-4
                    "
                  >

                    {
                      product.materials.map(
                        (
                          material,
                          index
                        ) => (

                          <div
                            key={index}
                            className="
                              rounded-full
                              border
                              border-black/10
                              px-6
                              py-3
                            "
                          >

                            {material}

                          </div>
                        )
                      )
                    }

                  </div>
                )
              }

              {
                activeTab === "specifications" && (

                  <div
                    className="
                      grid
                      gap-6
                      md:grid-cols-2
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
                              bg-neutral-50
                              p-6
                            "
                          >

                            <div
                              className="
                                text-black/50
                              "
                            >

                              {spec.label}

                            </div>

                            <div
                              className="
                                font-semibold
                              "
                            >

                              {spec.value}

                            </div>

                          </div>
                        )
                      )
                    }

                  </div>
                )
              }

            </motion.div>

          </AnimatePresence>

        </div>

      </div>

    </section>
  );
}