"use client";

import {
  useState,
} from "react";

type Props = {

  description?: string;

  specifications?:
    any[];

  faq?: any[];
};

export default function ProductTabs({

  description,

  specifications,

  faq,

}: Props) {

  const [
    activeTab,
    setActiveTab,
  ] = useState(
    "description"
  );

  const tabs = [

    {
      key:
        "description",

      label:
        "Description",
    },

    {
      key:
        "specifications",

      label:
        "Specifications",
    },

    {
      key:
        "faq",

      label:
        "FAQ",
    },
  ];

  return (

    <section
      className="
        border-t
        border-black/10
        py-24
      "
    >

      <div
        className="
          mx-auto
          max-w-5xl
          px-6
        "
      >

        <div
          className="
            flex
            flex-wrap
            gap-3
          "
        >

          {
            tabs.map(
              (
                tab
              ) => (

                <button
                  key={
                    tab.key
                  }

                  onClick={() =>
                    setActiveTab(
                      tab.key
                    )
                  }

                  className={`
                    rounded-full
                    px-6
                    py-3
                    text-sm
                    font-medium
                    transition

                    ${
                      activeTab ===
                      tab.key

                        ? "bg-black text-white"

                        : "bg-neutral-100 text-black"
                    }
                  `}
                >

                  {
                    tab.label
                  }

                </button>
              )
            )
          }

        </div>

        <div
          className="
            mt-12
          "
        >

          {
            activeTab ===
              "description" && (

              <div
                className="
                  leading-8
                  text-black/70
                "
              >

                {
                  description
                }

              </div>
            )
          }

          {
            activeTab ===
              "specifications" && (

              <div
                className="
                  grid
                  gap-4
                "
              >

                {
                  specifications?.map(
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
                          border-black/10
                          p-6
                        "
                      >

                        <div
                          className="
                            font-medium
                          "
                        >

                          {
                            spec.label
                          }

                        </div>

                        <div
                          className="
                            text-black/60
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
              "faq" && (

              <div
                className="
                  grid
                  gap-4
                "
              >

                {
                  faq?.map(
                    (
                      item,
                      index
                    ) => (

                      <div
                        key={index}
                        className="
                          rounded-[28px]
                          border
                          border-black/10
                          p-8
                        "
                      >

                        <div
                          className="
                            text-xl
                            font-semibold
                          "
                        >

                          {
                            item.question
                          }

                        </div>

                        <div
                          className="
                            mt-4
                            leading-8
                            text-black/60
                          "
                        >

                          {
                            item.answer
                          }

                        </div>

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