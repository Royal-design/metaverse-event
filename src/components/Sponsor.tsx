import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import partner1 from "@/assets/brands/Boom_Technology_logo_(black).svg.png";
import partner2 from "@/assets/brands/DXC_Technology-Logo.wine.png";
import partner3 from "@/assets/brands/PRIMETECH-logo-black.eps-011.png";
import partner4 from "@/assets/brands/omini-tech.png";
import partner5 from "@/assets/brands/tech-genius.png";

const partners = [
  {
    image: <img src={partner1} className="w-[7rem]  max-sm:w-[5rem]" />
  },
  { image: <img src={partner2} className="w-[7rem] max-sm:w-[5rem]" /> },
  { image: <img src={partner3} className="w-[7rem] max-sm:w-[5rem]" /> },
  { image: <img src={partner4} className="w-[7rem] max-sm:w-[5rem]" /> },
  { image: <img src={partner5} className="w-[7rem] max-sm:w-[5rem]" /> }
];

export const Sponsor = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 1
      }}
    >
      <div className="md:px-20 px-8">
        <div className="">
          <div className="flex flex-col items-center gap-1">
            <h2 className="text-2xl  md:text-4xl font-extrabold text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text">
              Sponsored By
            </h2>
            <p className="text-gray-300 text-center mt-4 max-w-2xl mx-auto">
              We are proudly supported by industry leaders pushing the
              boundaries of technology.
            </p>
          </div>
        </div>
      </div>
      <div className=" rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={partners} direction="right" speed="slow" />
      </div>
    </motion.div>
  );
};
