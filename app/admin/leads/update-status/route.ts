import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(
  request: Request
) {

  const body =
    await request.json();

  const { id, status } = body;

  const { error } =
    await supabase
      .from("leads")
      .update({
        status,
      })
      .eq("id", id);

  return Response.json({
    success: !error,
  });
}