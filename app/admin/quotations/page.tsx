const quotations = [
    {
      quoteNo: "QT-2026-001",
      customer: "Starbucks Vietnam",
      product: "Polo Uniform",
      quantity: "5,000 pcs",
      amount: "$18,500",
      status: "Pending",
    },
  
    {
      quoteNo: "QT-2026-002",
      customer: "Tech Startup",
      product: "OEM Hoodies",
      quantity: "1,200 pcs",
      amount: "$12,200",
      status: "Approved",
    },
  
    {
      quoteNo: "QT-2026-003",
      customer: "Coffee Chain",
      product: "Merchandise Set",
      quantity: "8,000 pcs",
      amount: "$26,000",
      status: "Production",
    },
  ];
  
  export default function QuotationsPage() {
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
  
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
  
              <div>
  
                <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                  Sales System
                </p>
  
                <h2 className="mt-3 text-5xl font-bold tracking-tight">
                  Quotations
                </h2>
  
              </div>
  
              <button className="rounded-full bg-black px-8 py-4 text-white transition hover:scale-105">
                Create Quote
              </button>
  
            </div>
  
            {/* KPI */}
  
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
  
              {[
                {
                  label: "Pending",
                  value: "12",
                },
  
                {
                  label: "Approved",
                  value: "8",
                },
  
                {
                  label: "Production",
                  value: "5",
                },
  
                {
                  label: "Revenue",
                  value: "$84K",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[32px] bg-white p-8 shadow-sm"
                >
  
                  <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                    {item.label}
                  </p>
  
                  <div className="mt-6 text-5xl font-bold tracking-tight">
                    {item.value}
                  </div>
  
                </div>
              ))}
  
            </div>
  
            {/* Table */}
  
            <div className="mt-12 overflow-hidden rounded-[32px] bg-white shadow-sm">
  
              <div className="overflow-x-auto">
  
                <table className="w-full min-w-[1100px]">
  
                  <thead className="border-b border-neutral-200 bg-neutral-50">
  
                    <tr className="text-left text-sm uppercase tracking-[0.2em] text-neutral-500">
  
                      <th className="px-8 py-6 font-medium">
                        Quote No
                      </th>
  
                      <th className="px-8 py-6 font-medium">
                        Customer
                      </th>
  
                      <th className="px-8 py-6 font-medium">
                        Product
                      </th>
  
                      <th className="px-8 py-6 font-medium">
                        Quantity
                      </th>
  
                      <th className="px-8 py-6 font-medium">
                        Amount
                      </th>
  
                      <th className="px-8 py-6 font-medium">
                        Status
                      </th>
  
                      <th className="px-8 py-6 font-medium">
                        Action
                      </th>
  
                    </tr>
  
                  </thead>
  
                  <tbody>
  
                    {quotations.map((quote) => (
                      <tr
                        key={quote.quoteNo}
                        className="border-b border-neutral-100 transition hover:bg-neutral-50"
                      >
  
                        <td className="px-8 py-6 font-semibold">
                          {quote.quoteNo}
                        </td>
  
                        <td className="px-8 py-6">
                          {quote.customer}
                        </td>
  
                        <td className="px-8 py-6 text-neutral-600">
                          {quote.product}
                        </td>
  
                        <td className="px-8 py-6">
                          {quote.quantity}
                        </td>
  
                        <td className="px-8 py-6 font-semibold">
                          {quote.amount}
                        </td>
  
                        <td className="px-8 py-6">
  
                          <span
                            className={`rounded-full px-4 py-2 text-sm ${
                              quote.status === "Pending"
                                ? "bg-yellow-100 text-yellow-700"
                                : quote.status === "Approved"
                                ? "bg-green-100 text-green-700"
                                : "bg-blue-100 text-blue-700"
                            }`}
                          >
                            {quote.status}
                          </span>
  
                        </td>
  
                        <td className="px-8 py-6">
  
                          <button className="rounded-full border border-neutral-200 px-5 py-2 text-sm transition hover:bg-black hover:text-white">
                            View
                          </button>
  
                        </td>
  
                      </tr>
                    ))}
  
                  </tbody>
  
                </table>
  
              </div>
  
            </div>
  
          </section>
  
        </div>
  
      </main>
    );
  }