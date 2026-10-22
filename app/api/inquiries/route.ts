import { NextResponse } from "next/server";

// VNC OS / Neon is the only source of truth for website leads.
export async function POST(request: Request) {
  try {
    const length = Number(request.headers.get("content-length") || 0);
    if (length > 16_384) return NextResponse.json({ error: "Request too large" }, { status: 413 });
    const data = await request.formData();
    const field = (key: string) => {
      const value = data.get(key);
      return typeof value === "string" ? value.trim() : "";
    };
    const name = field("name").slice(0, 160);
    const email = field("email").slice(0, 254);
    const company = field("company").slice(0, 200);
    const message = field("message").slice(0, 4000);
    const product = field("product").slice(0, 250);
    if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid inquiry" }, { status: 400 });
    }
    const attachment = data.get("attachment");
    if (attachment instanceof File && attachment.size > 0) {
      return NextResponse.json({ error: "Attachments are temporarily unavailable" }, { status: 400 });
    }
    const key = process.env.VNC_LEAD_INGEST_SECRET;
    const base = process.env.VNC_OS_URL;
    if (!key || key.length < 32 || !base) {
      console.error("VNC lead intake is not configured");
      return NextResponse.json({ error: "Inquiry service temporarily unavailable" }, { status: 503 });
    }
    const endpoint = new URL("/api/integrations/vnc/leads", base);
    if (endpoint.protocol !== "https:" || endpoint.hostname !== "os.vietnamclothing.vn") {
      return NextResponse.json({ error: "Inquiry service misconfigured" }, { status: 503 });
    }
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    try {
      const response = await fetch(endpoint.toString(), {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-vnc-ingest-key": key },
        body: JSON.stringify({
          name, company, email,
          message: [product ? `Product: ${product}` : "", message].filter(Boolean).join("\n"),
        }),
        cache: "no-store",
        signal: controller.signal,
      });
      if (!response.ok) {
        console.error("VNC OS inquiry rejected", { status: response.status });
        return NextResponse.json({ error: "Inquiry could not be saved. Please retry." }, { status: 503 });
      }
      return NextResponse.json({ success: true }, { status: 201 });
    } finally {
      clearTimeout(timeout);
    }
  } catch {
    return NextResponse.json({ error: "Unable to process inquiry. Please retry." }, { status: 503 });
  }
}
