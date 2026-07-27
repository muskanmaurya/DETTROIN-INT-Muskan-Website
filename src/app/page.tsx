import { ExpandablePillars } from "@/components/layout/ExpandablePillers";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import {AboutUsSection} from "@/components/sections/AboutUsSection";
import { AnnouncementsSection } from "@/components/sections/AnnouncementsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import {InfrastructureSection} from "@/components/sections/InfrastructureSection";
import {SocialAndImagesSection} from "@/components/sections/SocialAndImagesSection";
import {TimeLineSection} from "@/components/sections/TimeLineSection";
import {FAQSection} from "@/components/sections/FAQandContactSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <HeroSection /> 
        <AnnouncementsSection />
        <ExpandablePillars /> 
        <InfrastructureSection/>
        <AboutUsSection/>
        <TimeLineSection/>
        <SocialAndImagesSection/>
        <ReviewsSection/>
        <FAQSection/>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
