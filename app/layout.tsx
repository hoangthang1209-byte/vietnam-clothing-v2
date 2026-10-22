import type {
  Metadata,
} from "next";

import {
  Inter,
} from "next/font/google";

import "./globals.css";

import Navbar
from "@/components/layout/Navbar";

import Footer
from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata:
Metadata = {

  metadataBase:
    new URL(
      "https://www.vietnamclothing.vn"
    ),

  title: {

    default:
      "Vietnam Clothing | International Apparel & Merchandise Sourcing",

    template:
      "%s | Vietnam Clothing",
  },

  description:
    "Vietnam Clothing is a Vietnam-based B2B apparel and merchandise sourcing partner coordinating product development, manufacturing, quality control and delivery for international buyers.",

  keywords: [

    "Vietnam clothing manufacturer",

    "OEM apparel manufacturer",

    "custom clothing manufacturer",

    "Vietnam apparel sourcing partner",

    "Vietnam merchandise sourcing",

    "manufacturing coordination Vietnam",

    "sportswear manufacturer",

    "uniform manufacturer",

    "streetwear manufacturer",

    "private label clothing",
  ],

  openGraph: {

    title:
      "Vietnam Clothing",

    description:
      "International B2B apparel and merchandise sourcing partner based in Vietnam.",

    url:
      "https://www.vietnamclothing.vn",

    siteName:
      "Vietnam Clothing",

    locale:
      "en_US",

    type:
      "website",

    images: [

      {
        url:
          "/og-image.jpg",

        width:
          1200,

        height:
          630,

        alt:
          "Vietnam Clothing",
      },
    ],
  },

  twitter: {

    card:
      "summary_large_image",

    title:
      "Vietnam Clothing",

    description:
      "Premium OEM apparel manufacturer in Vietnam.",

    images: [

      "/og-image.jpg",
    ],
  },

  robots: {

    index: true,

    follow: true,
  },
};

export default function RootLayout({

  children,

}: Readonly<{

  children:
    React.ReactNode;
}>) {

  return (

    <html lang="en">

      <body
        className={`
          ${inter.className}
          bg-[#f5f5f3]
          text-black
          antialiased
        `}
      >

        <Navbar />

        {children}

        <Footer />

      </body>

    </html>
  );
}