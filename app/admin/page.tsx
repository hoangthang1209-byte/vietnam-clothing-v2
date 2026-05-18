const stats = [
    {
      label: "New Leads",
      value: "24",
    },
  
    {
      label: "Pending Quotes",
      value: "12",
    },
  
    {
      label: "Production Orders",
      value: "8",
    },
  
    {
      label: "Revenue",
      value: "$24.5K",
    },
  ];
  
  const leads = [
    {
      company: "Starbucks Vietnam",
      country: "Vietnam",
      inquiry: "Corporate Uniforms",
      status: "New",
    },
  
    {
      company: "Tech Startup",
      country: "Singapore",
      inquiry: "OEM Hoodies",
      status: "Quoted",
    },
  
    {
      company: "Coffee Chain",
      country: "Australia",
      inquiry: "Merchandise",
      status: "Production",
    },
  ];
  
  export default function AdminDashboard() {
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
                    item === "Dashboard"
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
                  Dashboard
                </p>
  
                <h2 className="mt-3 text-5xl font-bold tracking-tight">
                  Welcome Back
                </h2>
  
              </div>
  
              <button className="rounded-full bg-black px-8 py-4 text-white">
                Create Quote
              </button>
  
            </div>
  
            {/* Stats */}
  
            <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
  
              {stats.map((item) => (
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
  
            {/* Leads Table */}
  
            <div className="mt-16 rounded-[32px] bg-white p-8 shadow-sm">
  
              <div className="mb-8 flex items-center justify-between">
  
                <div>
  
                  <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                    Latest Leads
                  </p>
  
                  <h3 className="mt-2 text-3xl font-bold">
                    Recent Inquiries
                  </h3>
  
                </div>
  
                <button className="rounded-full border border-neutral-200 px-6 py-3 text-sm">
                  View All
                </button>
  
              </div>
  
              <div className="overflow-x-auto">
  
                <table className="w-full min-w-[700px]">
  
                  <thead>
  
                    <tr className="border-b border-neutral-200 text-left text-sm uppercase tracking-[0.2em] text-neutral-500">
  
                      <th className="pb-5 font-medium">
                        Company
                      </th>
  
                      <th className="pb-5 font-medium">
                        Country
                      </th>
  
                      <th className="pb-5 font-medium">
                        Inquiry
                      </th>
  
                      <th className="pb-5 font-medium">
                        Status
                      </th>
  
                    </tr>
  
                  </thead>
  
                  <tbody>
  
                    {leads.map((item) => (
                      <tr
                        key={item.company}
                        className="border-b border-neutral-100"
                      >
  
                        <td className="py-6 font-medium">
                          {item.company}
                        </td>
  
                        <td className="py-6 text-neutral-600">
                          {item.country}
                        </td>
  
                        <td className="py-6 text-neutral-600">
                          {item.inquiry}
                        </td>
  
                        <td className="py-6">
  
                          <span className="rounded-full bg-neutral-100 px-4 py-2 text-sm">
                            {item.status}
                          </span>
  
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