import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { MarqueeRibbon } from "@/components/ui/marquee-ribbon";
import { StorySection } from "@/components/sections/story-section";
import { MenuSection } from "@/components/sections/menu-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { LocationSection } from "@/components/sections/location-section";
import { Footer } from "@/components/layout/footer";
import { MobileBottomBar } from "@/components/layout/mobile-bottom-bar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-primary selection:bg-accent selection:text-white bg-playful-pattern relative pb-16 md:pb-0">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <MarqueeRibbon />
        <StorySection />
        <MenuSection />
        <GallerySection />
        <LocationSection />
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
}
