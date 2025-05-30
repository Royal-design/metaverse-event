import { motion } from "framer-motion";
import { Countdown } from "@/components/Countdown";
import { HomeHeroSection } from "@/components/HomeHeroSection";
import { LineSkew } from "@/components/LineSkew";
import { MainSection } from "@/components/MainSection";
import { Products } from "@/components/Product";
import { ProgrammeSchedule } from "@/components/ProgrammeSchedule";
import { Speakers } from "@/components/Speakers";
import { Sponsor } from "@/components/Sponsor";
import { useEffect } from "react";
import { Footer } from "@/components/Footer";

export const HomePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const inViewVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div>
      <HomeHeroSection />

      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <LineSkew />
      </motion.div>

      <motion.div
        variants={inViewVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <MainSection />
      </motion.div>

      <motion.div
        variants={inViewVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Countdown />
      </motion.div>

      <motion.div
        variants={inViewVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <ProgrammeSchedule />
      </motion.div>

      <motion.div
        variants={inViewVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Speakers />
      </motion.div>

      <motion.div
        variants={inViewVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Products />
      </motion.div>

      <motion.div
        variants={inViewVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Sponsor />
      </motion.div>
      <Footer />
    </motion.div>
  );
};
