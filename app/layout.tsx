import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://vietnamclothing.vn"),
  title: "VNC | Merchandise, Apparel & Sourcing in Vietnam",
  description: "Your Vietnam-based partner for entertainment merchandise, branded goods, OEM apparel and global sourcing.",
  robots: { index: false, follow: false },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}