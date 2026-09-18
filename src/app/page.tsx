import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { StorySection } from "@/components/sections/story-section";
import { MenuSection } from "@/components/sections/menu-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { LocationSection } from "@/components/sections/location-section";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-primary selection:bg-accent selection:text-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StorySection />
        <MenuSection />
        <GallerySection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
