import { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CommandsSection from "@/components/CommandsSection";
import StatsSection from "@/components/StatsSection";
import FooterSection from "@/components/FooterSection";

const Scene3D = lazy(() => import("@/components/Scene3D"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* 3D Background */}
      <Suspense fallback={null}>
        <Scene3D className="fixed inset-0 z-0" />
      </Suspense>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <CommandsSection />
        <StatsSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
