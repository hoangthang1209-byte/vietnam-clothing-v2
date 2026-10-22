import { redirect } from "next/navigation";

// The website has no independent CRM. All new inquiries are managed in VNC OS.
export default function LegacyInquiriesPage() {
  redirect("https://os.vietnamclothing.vn/admin/crm/leads");
}
