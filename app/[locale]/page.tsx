import MegaMenu from "../../components/MegaMenu";
import Hero from "../../sections/Hero";
import StatsStrip from "../../sections/StatsStrip";
import TrustedBrands from "../../sections/TrustedBrands";
import FinalCTA from "../../sections/FinalCTA";
import Footer from "../../sections/Footer";
import Categories from "../../sections/Categories";
import Industries from "../../sections/Industries";
import WhyChooseUs from "../../sections/WhyChooseUs";
import FactoryGallery from "../../sections/FactoryGallery";
import FactoryProcess from "../../sections/FactoryProcess";
import FactoryVideo from "../../sections/FactoryVideo";
import GlobalExport from "../../sections/GlobalExport";
import CaseStudies from "../../sections/CaseStudies";
import Testimonials from "../../sections/Testimonials"; 
import RealInquiryForm from "@/components/RealInquiryForm";
import ProductCategories from "../../sections/ProductCategories";

import { dictionaries } from "../../dictionaries";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: "en" | "vi" }>;
}) {
  const { locale } = await params;

  const dict = dictionaries[locale];

  return (
    <>
      <MegaMenu />

      <main className="min-h-screen bg-white text-black">

        <Hero dict={dict} />

        <TrustedBrands />

        <Categories />

        <Industries />

        <CaseStudies />

        <Testimonials />

        <ProductCategories />

        <WhyChooseUs />
        <FactoryGallery />

        <FactoryVideo />

        <GlobalExport />

        <FinalCTA />
        <RealInquiryForm />

      </main>
      <Footer />
    </>
  );
}