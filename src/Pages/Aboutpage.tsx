import { useEffect } from "react";
import { motion } from "framer-motion";

export const Aboutpage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, []);

  // Variants for sliding in from left and right
  const slideInVariantLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 }
    }
  };

  return (
    <section className="min-h-screen text-white">
      <div className="h-[30rem] w-full max-sm:h-full relative">
        <img
          src="https://media.istockphoto.com/id/1416029563/photo/metaverse-digital-cyber-world-technology-man-with-virtual-reality-vr-goggle-playing-ar.webp?a=1&b=1&s=612x612&w=0&k=20&c=gqNvFz2RsmVYdLBATZQxpwna4AojBZuxkwldTqOzm0M="
          alt="hero"
          className="h-full md:absolute right-0 object-right object-cover"
        />
        <article className="absolute h-full max-sm:px-4 inset-0 bg-gradient-to-br from-black to-[#27042770] flex flex-col gap-4 items-center justify-center">
          <h1 className="text-2xl text-center md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text">
            Welcome to the Future of Digital Existence
          </h1>

          <p className="text-gray-300 text-center max-w-4xl mt-4 text-lg md:text-xl leading-relaxed">
            The Metaverse Expo is more than an event, it’s a gateway to a new
            dimension of technology, innovation, and limitless imagination.
          </p>
        </article>
      </div>

      <div className="max-w-7xl px-8 md:px-20 py-12 mx-auto">
        {/* STORY SECTION */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -10 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="bg-black bg-opacity-30 md:p-10 p-6 rounded-2xl border border-purple-700 mb-12 shadow-lg"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-purple-400 mb-4">
            Our Story
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Born out of a vision to bridge reality and the virtual world, the
            Metaverse Expo began as a passion project among tech enthusiasts,
            artists, and futurists. Today, it’s a global movement that unites
            brilliant minds across industries from AI pioneers to NFT artists,
            all under one vibrant, immersive digital roof.
          </p>
        </motion.div>

        {/* MISSION + VISION */}
        <motion.div
          variants={slideInVariantLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-10 mb-16"
        >
          <div className="bg-black bg-opacity-30 md:p-10 p-6 rounded-xl border border-pink-500">
            <h3 className="text-2xl md:text-3xl  font-semibold text-pink-400 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-300">
              To build a collaborative space where future-defining technologies
              and creative expression converge, empowering every voice in the
              evolving digital universe.
            </p>
          </div>
          <div className="bg-black bg-opacity-30 md:p-10 p-6  rounded-xl border border-yellow-500">
            <h3 className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-300">
              A fully decentralized, inclusive, and immersive digital ecosystem
              where boundaries fade and innovation thrives redefining how we
              connect, learn, work, and create.
            </p>
          </div>
        </motion.div>

        {/* CORE VALUES */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="bg-black bg-opacity-30 md:p-10 p-6 rounded-xl mb-16 border border-purple-500"
        >
          <h3 className="text-2xl md:text-3xl  font-bold text-purple-400 mb-6 md:text-center">
            Our Core Values
          </h3>
          <ul className="grid md:grid-cols-2  gap-6 text-gray-300 ">
            <li className="flex items-center gap-4">
              <div>🌐</div> Innovation Without Limits
            </li>
            <li className="flex items-center gap-4">
              <div>🤝</div> Collaboration Over Competition
            </li>
            <li className="flex items-center gap-4">
              <div>💫</div> Diversity & Digital Inclusion
            </li>
            <li className="flex items-center gap-4">
              <div>🔐</div> Privacy, Security, and Decentralization
            </li>
            <li className="flex items-center gap-4">
              <div>🎨</div> Creative Expression & Open Access
            </li>
            <li className="flex items-center gap-4">
              <div>🚀</div> Curiosity, Growth, and Future-Readiness
            </li>
          </ul>
        </motion.div>

        {/* WHY IT MATTERS */}
        <motion.div
          variants={slideInVariantLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="bg-black bg-opacity-30 md:p-10 p-6 rounded-xl border border-pink-600 shadow-lg mb-16"
        >
          <h3 className="text-2xl md:text-3xl  font-bold text-pink-400 mb-4 md:text-center">
            Why the Metaverse Expo Matters
          </h3>
          <p className="text-gray-300 leading-relaxed md:text-center max-w-4xl mx-auto">
            In a rapidly evolving world, we need more than adaptation we need
            revolution. The Metaverse Expo is where the change begins, where
            reality bends, and where voices become avatars of innovation.
            Whether you’re a curious explorer, a digital nomad, or a future tech
            leader, this is your stage.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
