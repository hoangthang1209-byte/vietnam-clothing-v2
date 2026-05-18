"use client";

import { useState } from "react";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function LeadStatusButtons({
  leadId,
  currentStatus,
}: {
  leadId: number;
  currentStatus: string;
}) {

  const [selectedStatus, setSelectedStatus] =
    useState(currentStatus);

  const [loading, setLoading] =
    useState(false);

  async function updateStatus() {

    setLoading(true);

    await supabase
      .from("leads")
      .update({
        status: selectedStatus,
      })
      .eq("id", leadId);

    setLoading(false);

    window.location.reload();
  }

  return (
    <div className="flex flex-col items-end gap-4">

      <div className="flex flex-wrap justify-end gap-3">

        {[
          "New",
          "Quoted",
          "Production",
          "Completed",
        ].map((status) => (

          <button
            key={status}
            type="button"
            onClick={() =>
              setSelectedStatus(status)
            }
            className={`rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${
              selectedStatus === status
                ? "bg-black text-white shadow-lg"
                : "bg-neutral-200 text-neutral-700 hover:bg-neutral-300"
            }`}
          >
            {status}
          </button>

        ))}

      </div>

      <button
        type="button"
        onClick={updateStatus}
        disabled={loading}
        className="group inline-flex items-center gap-3 rounded-full bg-black px-7 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-50"
      >

        <span>

          {loading
            ? "Saving..."
            : "Save Changes"}

        </span>

        <span className="transition duration-300 group-hover:translate-x-1">

          →

        </span>

      </button>

    </div>
  );
}