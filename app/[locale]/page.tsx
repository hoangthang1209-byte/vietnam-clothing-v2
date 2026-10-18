import Link from "next/link";

import Hero
from "../../sections/Hero";

import ManufacturingCapabilities
from "../../sections/ManufacturingCapabilities";

import ProductCategories
from "../../sections/ProductCategories";

import FactoryGallery
from "../../sections/FactoryGallery";

import FactoryProcess
from "../../sections/FactoryProcess";

import FinalCTA
from "../../sections/FinalCTA";

import RealInquiryForm
from "@/components/RealInquiryForm";

import {
  dictionaries,
} from "../../dictionaries";

export default async function HomePage({
  params,
}: {
  params:
    Promise<{
      locale:
        | "en"
        | "vi";
    }>;
}) {

  const {
    locale,
  } = await params;

  const dict =
    dictionaries[
      locale
    ];

  return (

    <main
      className="
        min-h-screen
        bg-white
        text-black
      "
    >

      <Hero
        dict={dict}
      />

      

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[.25em] text-neutral-500">Merchandise · Apparel · Sourcing</p>
        <div className="mt-5 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">A production partner for every part of your project.</h2>
          <Link href={`/${locale}/solutions`} className="inline-flex shrink-0 border-b border-black pb-2 text-sm font-semibold">Explore our solutions ↗</Link>
        </div>
      </section>

      <ProductCategories />

      <ManufacturingCapabilities />

      

      <FactoryGallery />

      <FactoryProcess />

      

      <FinalCTA />

      <RealInquiryForm />

    </main>
  );
}