"use client";

import { useMemo, useState } from "react";

export default function CreateQuotationPage() {
  const [quantity, setQuantity] =
    useState(1000);

  const [unitPrice, setUnitPrice] =
    useState(4.5);

  const [productionCost, setProductionCost] =
    useState(2.8);

  const revenue = useMemo(() => {
    return quantity * unitPrice;
  }, [quantity, unitPrice]);

  const cost = useMemo(() => {
    return quantity * productionCost;
  }, [quantity, productionCost]);

  const profit = useMemo(() => {
    return revenue - cost;
  }, [revenue, cost]);

  const margin = useMemo(() => {
    return ((profit / revenue) * 100).toFixed(1);
  }, [profit, revenue]);

  return (
    <main className="min-h-screen bg-neutral-100">

      <div className="flex">

        {/* Sidebar */}

        <aside className="sticky top-0 hidden h-screen w-72 border-r border-neutral-200 bg-white p-8 lg:block">

          <div>

            <h1 className="text-2xl font-bold tracking-tight">
              Vietnam Clothing
            </h1>

            <p className="mt-2 text-sm text-neutral-500">
              Admin Dashboard
            </p>

          </div>

          <nav className="mt-16 space-y-3">

            {[
              "Dashboard",
              "Leads",
              "Customers",
              "Quotations",
              "Products",
              "Blog",
              "Production",
              "Inventory",
              "Settings",
            ].map((item) => (
              <button
                key={item}
                className={`flex w-full items-center rounded-2xl px-5 py-4 text-left transition ${
                  item === "Quotations"
                    ? "bg-black text-white"
                    : "hover:bg-neutral-100"
                }`}
              >
                {item}
              </button>
            ))}

          </nav>

        </aside>

        {/* Main */}

        <section className="flex-1 p-8 lg:p-12">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                Sales System
              </p>

              <h2 className="mt-3 text-5xl font-bold tracking-tight">
                Create Quotation
              </h2>

            </div>

            <button className="rounded-full bg-black px-8 py-4 text-white transition hover:scale-105">
              Export PDF
            </button>

          </div>

          <div className="mt-12 grid gap-10 xl:grid-cols-[1.2fr_0.8fr]">

            {/* Form */}

            <div className="rounded-[32px] bg-white p-10 shadow-sm">

              <div className="grid gap-6 md:grid-cols-2">

                <div>

                  <label className="mb-3 block text-sm uppercase tracking-[0.2em] text-neutral-500">
                    Customer
                  </label>

                  <input
                    type="text"
                    placeholder="Customer Name"
                    className="w-full rounded-2xl border border-neutral-200 px-6 py-5 outline-none focus:border-black"
                  />

                </div>

                <div>

                  <label className="mb-3 block text-sm uppercase tracking-[0.2em] text-neutral-500">
                    Product
                  </label>

                  <input
                    type="text"
                    placeholder="Product Name"
                    className="w-full rounded-2xl border border-neutral-200 px-6 py-5 outline-none focus:border-black"
                  />

                </div>

              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">

                <div>

                  <label className="mb-3 block text-sm uppercase tracking-[0.2em] text-neutral-500">
                    Quantity
                  </label>

                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Number(e.target.value))
                    }
                    className="w-full rounded-2xl border border-neutral-200 px-6 py-5 outline-none focus:border-black"
                  />

                </div>

                <div>

                  <label className="mb-3 block text-sm uppercase tracking-[0.2em] text-neutral-500">
                    Unit Price ($)
                  </label>

                  <input
                    type="number"
                    step="0.1"
                    value={unitPrice}
                    onChange={(e) =>
                      setUnitPrice(Number(e.target.value))
                    }
                    className="w-full rounded-2xl border border-neutral-200 px-6 py-5 outline-none focus:border-black"
                  />

                </div>

              </div>

              <div className="mt-6">

                <label className="mb-3 block text-sm uppercase tracking-[0.2em] text-neutral-500">
                  Production Cost ($)
                </label>

                <input
                  type="number"
                  step="0.1"
                  value={productionCost}
                  onChange={(e) =>
                    setProductionCost(
                      Number(e.target.value)
                    )
                  }
                  className="w-full rounded-2xl border border-neutral-200 px-6 py-5 outline-none focus:border-black"
                />

              </div>

              <div className="mt-6">

                <label className="mb-3 block text-sm uppercase tracking-[0.2em] text-neutral-500">
                  Notes
                </label>

                <textarea
                  rows={6}
                  placeholder="Quotation notes..."
                  className="w-full rounded-2xl border border-neutral-200 px-6 py-5 outline-none focus:border-black"
                />

              </div>

            </div>

            {/* Summary */}

            <div className="rounded-[32px] bg-black p-10 text-white shadow-sm">

              <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                Quote Summary
              </p>

              <div className="mt-12 space-y-8">

                <div>

                  <p className="text-sm text-white/50">
                    Revenue
                  </p>

                  <div className="mt-2 text-5xl font-bold tracking-tight">
                    ${revenue.toLocaleString()}
                  </div>

                </div>

                <div>

                  <p className="text-sm text-white/50">
                    Production Cost
                  </p>

                  <div className="mt-2 text-4xl font-bold tracking-tight">
                    ${cost.toLocaleString()}
                  </div>

                </div>

                <div>

                  <p className="text-sm text-white/50">
                    Estimated Profit
                  </p>

                  <div className="mt-2 text-4xl font-bold tracking-tight">
                    ${profit.toLocaleString()}
                  </div>

                </div>

                <div>

                  <p className="text-sm text-white/50">
                    Profit Margin
                  </p>

                  <div className="mt-2 text-4xl font-bold tracking-tight">
                    {margin}%
                  </div>

                </div>

              </div>

              <button className="mt-12 w-full rounded-full bg-white px-8 py-5 font-medium text-black transition hover:scale-[1.02]">
                Save Quotation
              </button>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}