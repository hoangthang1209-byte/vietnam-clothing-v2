import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import LeadStatusButtons from "@/components/LeadStatusButtons";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function LeadDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const { data: lead } =
    await supabase
      .from("leads")
      .select("*")
      .eq("id", id)
      .single();

  if (!lead) {
    return (
      <main className="p-10">
        Lead not found.
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-100 p-10">

      <div className="mx-auto max-w-5xl">

        <Link
          href="/admin/leads"
          className="mb-10 inline-flex rounded-full bg-white px-6 py-3 shadow-sm"
        >
          ← Back
        </Link>

        <div className="rounded-[40px] bg-white p-10 shadow-sm">

          <div className="flex items-start justify-between">

            <div>

              <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                Lead Detail
              </p>

              <h1 className="mt-4 text-5xl font-bold tracking-tight">
                {lead.company}
              </h1>

            </div>

            <LeadStatusButtons
              leadId={lead.id}
              currentStatus={lead.status}
            />

          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">

            <div className="rounded-3xl bg-neutral-50 p-8">

              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                Contact
              </p>

              <div className="mt-4 text-2xl font-semibold">
                {lead.contact}
              </div>

            </div>

            <div className="rounded-3xl bg-neutral-50 p-8">

              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                Email
              </p>

              <div className="mt-4 text-2xl font-semibold">
                {lead.email}
              </div>

            </div>

            <div className="rounded-3xl bg-neutral-50 p-8">

              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                Quantity
              </p>

              <div className="mt-4 text-2xl font-semibold">
                {lead.quantity}
              </div>

            </div>

            <div className="rounded-3xl bg-neutral-50 p-8">

              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                Created At
              </p>

              <div className="mt-4 text-2xl font-semibold">

                {new Date(
                  lead.created_at
                ).toLocaleString()}

              </div>

            </div>

          </div>

          <div className="mt-10 rounded-3xl bg-neutral-50 p-8">

            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Inquiry
            </p>

            <div className="mt-6 text-lg leading-relaxed">

              {lead.inquiry}

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}