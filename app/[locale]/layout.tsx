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
      "Vietnam Clothing | OEM Apparel Manufacturer",

    template:
      "%s | Vietnam Clothing",
  },

  description:
    "Vietnam Clothing is a premium OEM apparel manufacturer specializing in custom clothing, uniforms, sportswear and fashion production in Vietnam.",

  openGraph: {

    title:
      "Vietnam Clothing",

    description:
      "Premium OEM apparel manufacturer in Vietnam.",

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