import { createClient } from "@supabase/supabase-js";
import Link from "next/link";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function LeadsPage() {

  const { data: leads } =
    await supabase
      .from("leads")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

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
                  item === "Leads"
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
                CRM
              </p>

              <h2 className="mt-3 text-5xl font-bold tracking-tight">
                Leads Management
              </h2>

            </div>

            <div className="flex gap-4">

              <input
                type="text"
                placeholder="Search leads..."
                className="rounded-full border border-neutral-200 bg-white px-6 py-4 outline-none"
              />

              <button className="rounded-full bg-black px-8 py-4 text-white">
                Export CSV
              </button>

            </div>

          </div>

          {/* Stats */}

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                label: "Total Leads",
                value: leads?.length || 0,
              },

              {
                label: "New",
                value:
                  leads?.filter(
                    (lead) =>
                      lead.status === "New"
                  ).length || 0,
              },

              {
                label: "Quoted",
                value:
                  leads?.filter(
                    (lead) =>
                      lead.status === "Quoted"
                  ).length || 0,
              },

              {
                label: "Production",
                value:
                  leads?.filter(
                    (lead) =>
                      lead.status === "Production"
                  ).length || 0,
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

              <table className="w-full min-w-[1200px]">

                <thead className="border-b border-neutral-200 bg-neutral-50">

                  <tr className="text-left text-sm uppercase tracking-[0.2em] text-neutral-500">

                    <th className="px-8 py-6 font-medium">
                      Company
                    </th>

                    <th className="px-8 py-6 font-medium">
                      Contact
                    </th>

                    <th className="px-8 py-6 font-medium">
                      Email
                    </th>

                    <th className="px-8 py-6 font-medium">
                      Inquiry
                    </th>

                    <th className="px-8 py-6 font-medium">
                      Quantity
                    </th>

                    <th className="px-8 py-6 font-medium">
                      Status
                    </th>

                    <th className="px-8 py-6 font-medium">
                      Date
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {leads?.map((lead) => (
                    <tr
                      key={lead.id}
                      className="border-b border-neutral-100 transition hover:bg-neutral-50"
                    >

                      <td className="px-8 py-6 font-semibold">

                        <Link
                          href={`/admin/leads/${lead.id}`}
                          className="hover:underline"
                        >
                          {lead.company}
                        </Link>

                      </td>

                      <td className="px-8 py-6">
                        {lead.contact}
                      </td>

                      <td className="px-8 py-6 text-neutral-600">
                        {lead.email}
                      </td>

                      <td className="px-8 py-6">
                        {lead.inquiry}
                      </td>

                      <td className="px-8 py-6">
                        {lead.quantity}
                      </td>

                      <td className="px-8 py-6">

                        <span
                          className={`rounded-full px-4 py-2 text-sm ${
                            lead.status === "New"
                              ? "bg-blue-100 text-blue-700"
                              : lead.status === "Quoted"
                              ? "bg-yellow-100 text-yellow-700"
                              : lead.status === "Production"
                              ? "bg-green-100 text-green-700"
                              : "bg-neutral-100 text-neutral-700"
                          }`}
                        >
                          {lead.status}
                        </span>

                      </td>

                      <td className="px-8 py-6 text-neutral-500">

                        {new Date(
                          lead.created_at
                        ).toLocaleDateString()}

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