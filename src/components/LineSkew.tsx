import { motion } from "framer-motion";
export const LineSkew = () => {
  const inViewVariant = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 }
    }
  };
  return (
    <motion.div
      variants={inViewVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="mt-[-4rem] flex flex-col gap-2"
    >
      <div className="border-y-2 border-dotted text-xs bg-gradient-to-br from-black to-[#270427]   border-purple-500  text-center text-white w-full  -skew-y-2">
        Explore how decentralized Web3 technologies and AI-driven avatars will
        shape the next evolution of the internet.
      </div>
      <div className="bg-purple-900 text-xs text-center text-white w-full  -skew-y-2">
        Discover groundbreaking innovations in VR, AI, blockchain, and immersive
        digital experiences that will redefine how we connect and interact.
      </div>
    </motion.div>
  );
};
