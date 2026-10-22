import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const length = Number(request.headers.get("content-length") || 0);
    if (length > 6_000_000) {
      return NextResponse.json({ error: "Request too large" }, { status: 413 });
    }
    const data = await request.formData();
    const field = (name: string) => {
      const value = data.get(name);
      return typeof value === "string" ? value.trim() : "";
    };
    const name = field("name").slice(0, 160);
    const email = field("email").slice(0, 254);
    const company = field("company").slice(0, 200);
    const message = field("message").slice(0, 5000);
    const product = field("product").slice(0, 250);

    if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid inquiry" }, { status: 400 });
    }
    const attachment = data.get("attachment");
    if (attachment instanceof File && attachment.size > 0) {
      // Keep attachments off public storage until private file handling is implemented.
      return NextResponse.json(
        { error: "Attachments are temporarily unavailable. Please submit without a file." },
        { status: 400 }
      );
    }
    const supabase = await createClient();
    const { error } = await supabase.from("inquiries").insert({
      name, email, company, message, product, attachment: "",
    });
    if (error) {
      console.error("VNC inquiry persistence failed", { code: error.code });
      return NextResponse.json({ error: "Inquiry could not be saved" }, { status: 503 });
    }

    // Keep Supabase as the durable source until the VNC OS bridge has been verified.
    // Secrets are server-only; a missing configuration must not block existing enquiries.
    let crmSynced = false;
    const bridgeKey = process.env.VNC_LEAD_INGEST_SECRET;
    const bridgeBase = process.env.VNC_OS_URL;
    if (bridgeKey && bridgeKey.length >= 32 && bridgeBase) {
      try {
        const endpoint = new URL("/api/integrations/vnc/leads", bridgeBase);
        if (endpoint.protocol !== "https:" || endpoint.hostname !== "os.vietnamclothing.vn") {
          throw new Error("Unexpected VNC OS integration host");
        }
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);
        try {
          const response = await fetch(endpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-vnc-ingest-key": bridgeKey,
            },
            body: JSON.stringify({
              name, company, email, message: [product && `Product: ${product}`, message].filter(Boolean).join("\\n"),
            }),
            cache: "no-store",
            signal: controller.signal,
          });
          crmSynced = response.ok;
          if (!crmSynced) console.error("VNC OS lead sync failed", { status: response.status });
        } finally {
          clearTimeout(timeout);
        }
      } catch {
        console.error("VNC OS lead sync temporarily unavailable");
      }
    }
    // Notification emails must not use hardcoded placeholder recipients.
    // Add verified Resend sender and recipient configuration before enabling notifications.
    return NextResponse.json({ success: true, crmSynced }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Unable to process inquiry" }, { status: 500 });
  }
}
