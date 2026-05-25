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
      "https://vietnamclothing.com"
    ),

  title: {

    default:
      "Vietnam Clothing | OEM Apparel Manufacturer",

    template:
      "%s | Vietnam Clothing",
  },

  description:
    "Vietnam Clothing is a premium OEM apparel manufacturer specializing in custom clothing, uniforms, sportswear and fashion production in Vietnam.",

  keywords: [

    "Vietnam clothing manufacturer",

    "OEM apparel manufacturer",

    "custom clothing manufacturer",

    "Vietnam garment factory",

    "sportswear manufacturer",

    "uniform manufacturer",

    "streetwear manufacturer",

    "private label clothing",
  ],

  openGraph: {

    title:
      "Vietnam Clothing",

    description:
      "Premium OEM apparel manufacturer in Vietnam.",

    url:
      "https://vietnamclothing.com",

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