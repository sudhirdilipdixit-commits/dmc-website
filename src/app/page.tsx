import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { PullQuote } from "@/components/sections/PullQuote";
import { CompareSection } from "@/components/sections/CompareSection";
import { CounsellorSection } from "@/components/sections/CounsellorSection";
import { LeadFormSection } from "@/components/sections/LeadFormSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <ProblemSection />
        <PullQuote
          text="Talk to us once and you will know exactly which programme is right for you, and why."
          attr="Our brand promise"
        />
        <CompareSection />
        <CounsellorSection />
        <LeadFormSection />
      </main>
      <Footer />
    </>
  );
}
