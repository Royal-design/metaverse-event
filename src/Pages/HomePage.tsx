import { Countdown } from "@/components/Countdown";
import { HomeHeroSection } from "@/components/HomeHeroSection";
import { LineSkew } from "@/components/LineSkew";
import { MainSection } from "@/components/MainSection";
import { Products } from "@/components/Product";
import { ProgrammeSchedule } from "@/components/ProgrammeSchedule";
import { Speakers } from "@/components/Speakers";
import { Sponsor } from "@/components/Sponsor";
import { useEffect } from "react";

export const HomePage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, []);
  return (
    <div>
      <HomeHeroSection />
      <LineSkew />
      <MainSection />
      <Countdown />
      <ProgrammeSchedule />
      <Speakers />
      <Products />
      <Sponsor />
    </div>
  );
};
