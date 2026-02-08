import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CommandsSection from "@/components/CommandsSection";
import StatsSection from "@/components/StatsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <CommandsSection />
      <StatsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
