import HeroSection
from "@/components/home/HeroSection";

import BrandMarquee
from "@/components/home/BrandMarquee";

import HomeCategories
from "@/components/home/HomeCategories";

import FeaturedProducts
from "@/components/home/FeaturedProducts";

import WhyChooseUs
from "@/components/home/WhyChooseUs";

import TrustedBrands
from "@/components/home/TrustedBrands";

import FactoryStats
from "@/components/home/FactoryStats";

import FactoryGallery
from "@/components/home/FactoryGallery";

import HomeCTA
from "@/components/home/HomeCTA";

export default function HomePage() {

  return (

    <main
      className="
        bg-white
        text-black
      "
    >

      <HeroSection />

      <BrandMarquee />

      <HomeCategories />

      <FeaturedProducts />

      <WhyChooseUs />

      <TrustedBrands />

      <FactoryStats />

      <FactoryGallery />

      <HomeCTA />

    </main>
  );
}