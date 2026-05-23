import type {
  Metadata,
} from "next";

import {
  Geist,
  Geist_Mono,
} from "next/font/google";

import {
  Plus_Jakarta_Sans,
} from "next/font/google";

import "./globals.css";

import Navbar
from "@/components/layout/Navbar";

import Footer
from "@/components/layout/Footer";

const jakarta =
  Plus_Jakarta_Sans({

    subsets: [
      "latin",
    ],
  });

const geistSans =
  Geist({

    variable:
      "--font-geist-sans",

    subsets: [
      "latin",
    ],
  });

const geistMono =
  Geist_Mono({

    variable:
      "--font-geist-mono",

    subsets: [
      "latin",
    ],
  });

export const metadata:
  Metadata = {

  metadataBase:
    new URL(
      "https://vietnamclothing.com"
    ),

  title: {

    default:
      "Vietnam Clothing",

    template:
      "%s | Vietnam Clothing",
  },

  description:
    "Premium OEM & ODM apparel manufacturing partner in Vietnam.",

  openGraph: {

    title:
      "Vietnam Clothing",

    description:
      "Premium OEM & ODM apparel manufacturing partner in Vietnam.",

    url:
      "https://vietnamclothing.com",

    siteName:
      "Vietnam Clothing",

    locale:
      "en_US",

    type:
      "website",
  },

  twitter: {

    card:
      "summary_large_image",

    title:
      "Vietnam Clothing",

    description:
      "Premium OEM & ODM apparel manufacturing partner in Vietnam.",
  },

  robots: {

    index:
      true,

    follow:
      true,
  },

  icons: {

    icon:
      "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children:
    React.ReactNode;
}>) {

  return (

    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        h-full
        antialiased
      `}
    >

      <body
        className={`
          min-h-full
          flex
          flex-col
          bg-white
          text-black
          ${jakarta.className}
        `}
      >

        <Navbar />

        <main
          className="
            flex-1
          "
        >

          {children}

        </main>

        <Footer />

      </body>

    </html>
  );
}