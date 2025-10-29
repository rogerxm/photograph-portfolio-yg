// app/page.js
import { HeroSection } from "@/app/components/HeroSection";
import { FeaturedGallery } from "@/app/components/FeaturedGallery";
import { HomeServices } from "@/app/components/HomeServices";
import { HomeAbout } from "@/app/components/HomeAbout";
import { HomeCTA } from "@/app/components/HomeCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedGallery />
      <HomeServices />
      <HomeAbout />
      {/* <HomeTestimonials /> */}
      <HomeCTA />
    </>
  );
}
