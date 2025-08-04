// src/app/page.tsx

import HeroSection from "@/components/HeroSection";
import ProblemChartSection from "@/components/ProblemChartSection";
import PledgeSection from "@/components/PledgeSection"; // <-- Import the new component
import SolutionSection from "@/components/SolutionSection";
import SignupSection from "@/components/SignupSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemChartSection />
      <PledgeSection /> {/* <-- Add the new component here */}
      <SolutionSection />
      <SignupSection />
      <Footer />
    </main>
  );
}