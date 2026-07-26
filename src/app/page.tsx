import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <HeroSection />  
      </main>
    </SmoothScroll>
  );
}
