"use client";

type Props = {

  selected?: string;

  onSelect: (
    value: string
  ) => void;
};

const categories = [

  "All",

  "T-Shirts",

  "Polos",

  "Hoodies",

  "Sportswear",

  "Uniforms",

  "Streetwear",
];

export default function ProductFilters({

  selected,

  onSelect,

}: Props) {

  return (

    <div
      className="
        flex
        flex-wrap
        gap-3
      "
    >

      {
        categories.map(
          (
            item
          ) => (

            <button
              key={item}

              onClick={() =>
                onSelect(
                  item
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
                  selected ===
                  item

                    ? "bg-black text-white"

                    : "bg-neutral-100 text-black"
                }
              `}
            >

              {
                item
              }

            </button>
          )
        )
      }

    </div>
  );
}