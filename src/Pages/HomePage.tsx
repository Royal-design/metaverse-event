import { Countdown } from "@/components/Countdown";
import { HomeHeroSection } from "@/components/HomeHeroSection";
import { LineSkew } from "@/components/LineSkew";
import { MainSection } from "@/components/MainSection";
import { Products } from "@/components/Product";
import { ProgrammeSchedule } from "@/components/ProgrammeSchedule";
import { Speakers } from "@/components/Speakers";
import { Sponsor } from "@/components/Sponsor";

export const HomePage = () => {
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
