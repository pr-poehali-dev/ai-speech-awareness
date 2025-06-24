import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import ResearchSection from "@/components/ResearchSection";
import CommunitySection from "@/components/CommunitySection";
import StatsSection from "@/components/StatsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <Header />
      <HeroSection />
      <FeatureSection />
      <StatsSection />
      <ResearchSection />
      <CommunitySection />
      <FooterSection />
    </div>
  );
};

export default Index;
