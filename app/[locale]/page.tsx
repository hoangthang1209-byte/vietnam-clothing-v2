import MegaMenu
from "../../components/MegaMenu";

import Hero
from "../../sections/Hero";

import TrustedBrands
from "../../sections/TrustedBrands";

import ManufacturingCapabilities
from "../../sections/ManufacturingCapabilities";

import ProductCategories
from "../../sections/ProductCategories";

import WhyChooseUs
from "../../sections/WhyChooseUs";

import FactoryGallery
from "../../sections/FactoryGallery";

import FactoryProcess
from "../../sections/FactoryProcess";

import Testimonials
from "../../sections/Testimonials";

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

    <>
      <MegaMenu />

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

        <TrustedBrands />

        <ProductCategories />

        <ManufacturingCapabilities />

        <WhyChooseUs />

        <FactoryGallery />

        <FactoryProcess />

        <Testimonials />

        <FinalCTA />

        <RealInquiryForm />

      </main>

    </>
  );
}``