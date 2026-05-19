"use client";

import {
  useEffect,
  useState,
} from "react";

export default function
CreateQuotationPage() {

  const [
    productId,
    setProductId,
  ] = useState(1);

  const [quantity, setQuantity] =
    useState(100);

  const [
    printMethod,
    setPrintMethod,
  ] = useState("PET");

  const [
    printSize,
    setPrintSize,
  ] = useState("20x20");

  const [
    pricing,
    setPricing,
  ] = useState({

    blankCost: 0,

    printCost: 0,

    unitPrice: 0,

    totalPrice: 0,
  });

  useEffect(() => {

    async function loadPrice() {

      const response =
        await fetch(
          "/api/calculate-price",
          {
            method: "POST",

            cache: "no-store",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({

              productId,

              quantity,

              printMethod,

              printSize,
            }),
          }
        );

      const data =
        await response.json();

      console.log(
        "PRICE RESPONSE:",
        data
      );

      setPricing(data);
    }

    loadPrice();

  }, [
    productId,
    quantity,
    printMethod,
    printSize,
  ]);

  return (

    <main className="min-h-screen bg-neutral-100 p-10">

      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_420px]">

        {/* LEFT */}

        <div className="rounded-[40px] bg-white p-10 shadow-sm">

          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Pricing Engine
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight">
            Create Quote
          </h1>

          <div className="mt-12 grid gap-8 md:grid-cols-2">

            {/* Product */}

            <div>

              <label className="text-sm font-medium">
                Product
              </label>

              <select
                value={productId}
                onChange={(e) =>
                  setProductId(
                    Number(
                      e.target.value
                    )
                  )
                }
                className="mt-3 w-full rounded-2xl border border-neutral-200 px-5 py-4 outline-none"
              >

                <option value={1}>
                  TEE REGULAR RT-001
                </option>

                <option value={3}>
                  OVERSIZED OS-001
                </option>

              </select>

            </div>

            {/* Quantity */}

            <div>

              <label className="text-sm font-medium">
                Quantity
              </label>

              <input
                type="number"
                value={quantity}
                onChange={(e) =>
                  setQuantity(
                    Number(
                      e.target.value
                    )
                  )
                }
                className="mt-3 w-full rounded-2xl border border-neutral-200 px-5 py-4 outline-none"
              />

            </div>

            {/* Print Method */}

            <div>

              <label className="text-sm font-medium">
                Print Method
              </label>

              <select
                value={printMethod}
                onChange={(e) =>
                  setPrintMethod(
                    e.target.value
                  )
                }
                className="mt-3 w-full rounded-2xl border border-neutral-200 px-5 py-4 outline-none"
              >

                <option>
                  PET
                </option>

                <option>
                  DTG
                </option>

                <option>
                  Decal
                </option>

              </select>

            </div>

            {/* Print Size */}

            <div>

              <label className="text-sm font-medium">
                Print Size
              </label>

              <select
                value={printSize}
                onChange={(e) =>
                  setPrintSize(
                    e.target.value
                  )
                }
                className="mt-3 w-full rounded-2xl border border-neutral-200 px-5 py-4 outline-none"
              >

                <option>
                  20x20
                </option>

                <option>
                  30x40
                </option>

                <option>
                  A3
                </option>

              </select>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <aside className="sticky top-10 h-fit rounded-[40px] bg-black p-10 text-white shadow-2xl">

          <p className="text-sm uppercase tracking-[0.3em] text-white/50">
            Live Pricing
          </p>

          <div className="mt-10 space-y-8">

            <div>

              <div className="text-sm text-white/50">
                Blank Cost
              </div>

              <div className="mt-2 text-4xl font-bold">
                ${pricing.blankCost}
              </div>

            </div>

            <div>

              <div className="text-sm text-white/50">
                Print Cost
              </div>

              <div className="mt-2 text-4xl font-bold">
                ${pricing.printCost}
              </div>

            </div>

            <div>

              <div className="text-sm text-white/50">
                Unit Price
              </div>

              <div className="mt-2 text-5xl font-bold">
                ${pricing.unitPrice}
              </div>

            </div>

            <div className="border-t border-white/10 pt-8">

              <div className="text-sm text-white/50">
                Total Price
              </div>

              <div className="mt-3 text-6xl font-bold tracking-tight">
                ${pricing.totalPrice}
              </div>

            </div>

          </div>

        </aside>

      </div>

    </main>
  );
}
