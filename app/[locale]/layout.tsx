import type {
  Metadata,
} from "next";

import "../globals.css";

import FloatingButtons
from "@/components/FloatingButtons";

import MobileCTA
from "@/components/MobileCTA";

import DesktopDock
from "@/components/DesktopDock";

export const metadata:
Metadata = {

  metadataBase:
    new URL(
      "https://vietnamclothing.vn"
    ),

  title: {

    default:
      "VNC | Merchandise, Apparel & Sourcing",

    template:
      "%s | Vietnam Clothing",
  },

  description:
    "VNC provides coordinated merchandise, apparel development and sourcing solutions from Vietnam for global brands and businesses.",

  openGraph: {

    title:
      "Vietnam Clothing",

    description:
      "Merchandise, apparel and sourcing solutions from Vietnam.",

    url:
      "https://vietnamclothing.vn",

    siteName:
      "Vietnam Clothing",

    locale:
      "en_US",

    type:
      "website",
  },
};

export default function LocaleLayout({
  children,
}: {
  children:
    React.ReactNode;
}) {

  return (

    <>

      <main>

        {children}

      </main>

      <FloatingButtons />

      <MobileCTA />

      <DesktopDock />

    </>
  );
}