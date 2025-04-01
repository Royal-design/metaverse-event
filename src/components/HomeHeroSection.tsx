import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const HomeHeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-[calc(100vh-7rem)] [clip-path:polygon(0_0,100%_0,100%_90%,0_100%)] relative"
    >
      <img
        src="https://img.freepik.com/premium-vector/3d-virtual-reality-helmet-metaverse-concept-augmented-reality-cyberspace-internet-web-game-online-battle-digital-competition-gaming-cup-neon-light-vector-illustration_115739-1782.jpg?ga=GA1.1.695003139.1726237092&semt=ais_hybrid"
        alt="metaverse-hero"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-[#2704274d]" />

      <article className="relative flex flex-col justify-center items-center h-full px-6 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="text-2xl md:text-5xl font-roboto font-bold text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text drop-shadow-[0_0_10px_rgba(245,0,255,0.8)]"
        >
          Metaverse Expo: The Virtual Revolution
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
          className="text-lg md:text-xl max-w-2xl mt-4 text-gray-300"
        >
          Step into the{" "}
          <span className="text-purple-600 font-semibold">
            future of digital reality
          </span>
          . Experience immersive VR, AR, and AI innovations shaping the next
          generation of technology.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
          className="mt-6 flex gap-4"
        >
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              to="/generate-ticket"
              className="px-6 py-3 bg-neon-pink text-black font-semibold rounded-lg shadow-lg bg-[#ec3a90] hover:bg-[#f060a6] transition"
            >
              Get Tickets
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              to="/about"
              className="px-6 py-3 border border-purple-600 bg-transparent text-purple-600 font-semibold rounded-lg shadow-lg hover:bg-purple-600 hover:text-black transition"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </article>
    </motion.section>
  );
};
