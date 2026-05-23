import type {
  ProductSectionProps,
}
from "@/types/product";

export default function ProductStats({
  product,
}: ProductSectionProps) {

  const stats = [

    {
      label: "MOQ",
      value:
        product.specifications.find(
          (
            item
          ) =>
            item.label === "MOQ"
        )?.value || "100 pcs",
    },

    {
      label: "Lead Time",
      value:
        product.specifications.find(
          (
            item
          ) =>
            item.label === "Lead Time"
        )?.value || "20–30 days",
    },

    {
      label: "OEM / ODM",
      value:
        product.specifications.find(
          (
            item
          ) =>
            item.label === "OEM / ODM"
        )?.value || "Supported",
    },
  ];

  return (

    <section className="py-24">

      <div className="grid gap-6 md:grid-cols-3">

        {
          stats.map(
            (
              stat
            ) => (

              <div
                key={stat.label}
                className="
                  rounded-[40px]
                  border border-black/10
                  p-10
                "
              >

                <div className="text-sm uppercase tracking-[0.2em] text-black/40">

                  {stat.label}

                </div>

                <div className="mt-6 text-4xl font-semibold tracking-tight">

                  {stat.value}

                </div>

              </div>
            )
          )
        }

      </div>

    </section>
  );
}