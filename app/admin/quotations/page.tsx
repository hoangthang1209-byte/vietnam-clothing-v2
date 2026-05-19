"use client";

import { useState }
from "react";

export default function CreateQuotationPage() {

  const [quantity, setQuantity] =
    useState(100);

  const [blankCost, setBlankCost] =
    useState(84);

  const [printCost, setPrintCost] =
    useState(27);

  const unitPrice =
    blankCost + printCost;

  const totalPrice =
    unitPrice * quantity;

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

            {/* Customer */}

            <div>

              <label className="text-sm font-medium">
                Customer Name
              </label>

              <input
                className="mt-3 w-full rounded-2xl border border-neutral-200 px-5 py-4 outline-none transition focus:border-black"
                placeholder="Starbucks Vietnam"
              />

            </div>

            {/* Product */}

            <div>

              <label className="text-sm font-medium">
                Product
              </label>

              <select
                className="mt-3 w-full rounded-2xl border border-neutral-200 px-5 py-4 outline-none"
              >

                <option>
                  TEE REGULAR RT-001
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
                    Number(e.target.value)
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
                className="mt-3 w-full rounded-2xl border border-neutral-200 px-5 py-4 outline-none"
              >

                <option>
                  20x20
                </option>

                <option>
                  30x40
                </option>

              </select>

            </div>

            {/* Addons */}

            <div>

              <label className="text-sm font-medium">
                Add-ons
              </label>

              <select
                className="mt-3 w-full rounded-2xl border border-neutral-200 px-5 py-4 outline-none"
              >

                <option>
                  No Add-on
                </option>

                <option>
                  Woven Label
                </option>

                <option>
                  Hang Tag
                </option>

                <option>
                  Packaging
                </option>

              </select>

            </div>

          </div>

          {/* Notes */}

          <div className="mt-8">

            <label className="text-sm font-medium">
              Notes
            </label>

            <textarea
              rows={5}
              className="mt-3 w-full rounded-3xl border border-neutral-200 p-5 outline-none"
              placeholder="Special production requirements..."
            />

          </div>

          {/* Action */}

          <div className="mt-10 flex gap-4">

            <button className="rounded-full bg-black px-8 py-4 text-white transition hover:scale-105">

              Save Quotation

            </button>

            <button className="rounded-full border border-neutral-200 px-8 py-4 transition hover:bg-neutral-100">

              Export PDF

            </button>

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
                ${blankCost}
              </div>

            </div>

            <div>

              <div className="text-sm text-white/50">
                Print Cost
              </div>

              <div className="mt-2 text-4xl font-bold">
                ${printCost}
              </div>

            </div>

            <div>

              <div className="text-sm text-white/50">
                Unit Price
              </div>

              <div className="mt-2 text-5xl font-bold">
                ${unitPrice}
              </div>

            </div>

            <div className="border-t border-white/10 pt-8">

              <div className="text-sm text-white/50">
                Total Price
              </div>

              <div className="mt-3 text-6xl font-bold tracking-tight">
                ${totalPrice}
              </div>

            </div>

          </div>

        </aside>

      </div>

    </main>
  );
}
