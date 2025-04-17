import { TestimonialSwiper } from "@/components/TestimonialSwiper";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";

export const ExperiencePage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, []);

  return (
    <div>
      <section className="relative experience font-roboto flex flex-col items-center ">
        <div className="md:h-[30rem] max-sm:pb-12  w-full h-full relative">
          <img
            src="https://media.istockphoto.com/id/1390456645/photo/metaverse-and-blockchain-technology-concepts-person-with-an-experiences-of-metaverse-virtual.webp?a=1&b=1&s=612x612&w=0&k=20&c=jHsN5XXNnjCauD_ICdJJWPBnuPn3k2cTFOtMOEBThwI="
            alt="hero"
            className="h-full w-full object-cover"
          />
          <article className="absolute h-full max-sm:px-4 text-center inset-0 bg-gradient-to-br from-black to-[#27042770]  flex flex-col  items-center justify-center">
            <motion.h1
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl max-sm:mt-4 md:text-4xl font-extrabold text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text"
            >
              Step Into the Future
            </motion.h1>

            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-300 max-w-4xl mt-4 text-lg md:text-xl leading-relaxed"
            >
              Experience the Metaverse Expo like never before. Immerse yourself
              in interactive virtual worlds, AI-powered experiences, and
              next-gen Web3 innovations.
            </motion.p>
            <motion.p
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-gray-400 mt-4 md:text-lg max-sm:mb-4 max-w-2xl mx-auto"
            >
              Whether you're a tech enthusiast, developer, or business leader,
              this is your gateway to the digital revolution.
            </motion.p>
          </article>
        </div>
        <div className="w-full px-8 md:px-20 md:text-center pt-12">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true, amount: 0.1 }}
            className="max-w-5xl  mb-16"
          >
            <h2 className="text-2xl font-extrabold ">
              🌌{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text">
                Explore the Metaverse
              </span>
            </h2>
            <p className="text-gray-300 mt-4 md:text-lg leading-relaxed">
              The <span className="text-purple-400">Metaverse</span> is an
              expansive universe where the boundaries between physical and
              virtual realities blur. Explore immersive virtual worlds and
              discover a new realm of entertainment, learning, and connection.
            </p>
            <p className="text-gray-400 mt-4 text-sm md:text-base max-w-2xl mx-auto">
              Take part in cutting-edge experiences and virtual interactions
              that will challenge your understanding of reality. The Metaverse
              Expo offers a range of{" "}
              <span className="text-yellow-400">immersive VR experiences</span>,{" "}
              <span className="text-purple-400">virtual conferences</span>, and{" "}
              <span className="text-yellow-400">interactive showcases</span>.
            </p>
          </motion.div>

          <motion.div
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 max-w-6xl"
          >
            {/* Virtual Reality Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, border: "1px solid yellow" }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 1
              }}
              className="p-[1px] rounded-lg   bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500"
            >
              <div className="p-6 bg-black rounded-lg">
                <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                  🕶️{" "}
                  <span className="text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text">
                    Virtual Reality Worlds
                  </span>
                </h3>
                <p className="text-gray-300 mt-2">
                  Dive into fully immersive{" "}
                  <span className="text-yellow-400">VR environments</span> where
                  you can explore{" "}
                  <span className="text-purple-400">3D spaces</span>, engage in{" "}
                  <span className="text-yellow-400">virtual meetings</span>, and
                  experience the next generation of interaction.
                </p>
                <p className="text-gray-400 mt-2 text-sm md:text-base">
                  Experience next-level entertainment, explore digital
                  landmarks, or attend live virtual events. The future of human
                  interaction is here, and you’re invited to take part.
                </p>
              </div>
            </motion.div>

            {/* AI-Powered Interactions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, border: "1px solid yellow" }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                duration: 1
              }}
              className="p-[1px] rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500"
            >
              <div className="p-6 bg-black rounded-lg">
                <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                  🤖{" "}
                  <span className="text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text">
                    AI-Powered Engagements
                  </span>
                </h3>
                <p className="text-gray-300 mt-2">
                  Witness how{" "}
                  <span className="text-purple-400">
                    AI transforms conversations
                  </span>{" "}
                  in the Metaverse.
                  <span className="text-yellow-400">
                    {" "}
                    Chat with intelligent avatars
                  </span>
                  , get personalized recommendations, and{" "}
                  <span className="text-purple-400">
                    interact in real-time
                  </span>{" "}
                  with cutting-edge technologies.
                </p>
                <p className="text-gray-400 mt-2 text-sm md:text-base">
                  From AI-guided tours to virtual assistants that enhance your
                  event experience, AI is at the heart of the Metaverse,
                  improving your interactions in ways you never imagined.
                </p>
              </div>
            </motion.div>

            {/* NFT & Web3 Marketplace */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, border: "1px solid yellow" }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                duration: 1
              }}
              className="p-[1px] rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500"
            >
              <div className="p-6 bg-black rounded-lg">
                <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                  🎨{" "}
                  <span className="text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text">
                    NFT & Web3 Marketplace
                  </span>
                </h3>
                <p className="text-gray-300 mt-2">
                  Trade, collect, and showcase{" "}
                  <span className="text-purple-400">NFTs</span> in a
                  decentralized marketplace. Explore the world of{" "}
                  <span className="text-yellow-400">Web3</span> and discover how
                  it’s reshaping digital ownership, art, and commerce.
                </p>
                <p className="text-gray-400 mt-2 text-sm md:text-base">
                  Whether you’re an NFT creator or a digital art enthusiast, our
                  Web3 marketplace lets you buy, sell, and showcase your
                  collection in a **secure, decentralized environment**.
                </p>
              </div>
            </motion.div>

            {/* Networking & Community */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, border: "1px solid yellow" }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                duration: 1
              }}
              className="p-[1px] rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500"
            >
              <div className="p-6 bg-black rounded-lg">
                <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                  🌐{" "}
                  <span className="text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text">
                    Global Networking
                  </span>
                </h3>
                <p className="text-gray-300 mt-2">
                  Meet with{" "}
                  <span className="text-yellow-400">industry leaders</span>,{" "}
                  <span className="text-purple-400">developers</span>, and{" "}
                  <span className="text-yellow-400">investors</span> in
                  real-time virtual events. Whether you’re here to learn or
                  collaborate, the Metaverse Expo offers you a chance to connect
                  like never before.
                </p>
                <p className="text-gray-400 mt-2 text-sm md:text-base">
                  Engage in live Q&A sessions, participate in panel discussions,
                  or simply network with like-minded professionals in a virtual
                  space designed for collaboration and growth.
                </p>
              </div>
            </motion.div>
          </motion.div>
          {/* Interactive Workshops */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 30 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:max-w-5xl mt-12 md:text-center"
          >
            <h2 className="text-2xl font-extrabold ">
              🛠️{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text">
                Hands-On Workshops
              </span>
            </h2>
            <p className="text-gray-300 mt-4 md:text-lg md:max-w-2xl mx-auto">
              Get hands-on experience with the latest Metaverse development
              tools, AI integrations, and Web3 frameworks. Our expert-led
              workshops offer exclusive insights into building virtual
              experiences.
            </p>

            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03, border: "1px solid yellow" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 1
                }}
                className="bg-gradient-to-br from-black to-[#270427] border-l border-yellow-400 p-6 rounded-lg rounded-tl-3xl rounded-br-3xl  text-white"
              >
                <h3 className="text-xl font-bold">🕹️ VR & AR Development</h3>
                <p className="mt-2 text-gray-300">
                  Learn how to build immersive virtual worlds and interactive AR
                  filters with industry-leading tools like Unity, Unreal Engine,
                  and WebXR.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03, border: "1px solid yellow" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 1
                }}
                className="bg-gradient-to-br from-black to-[#270427] rounded-tl-3xl rounded-br-3xl   p-6 rounded-lg text-white"
              >
                <h3 className="text-xl font-bold">💡 AI in the Metaverse</h3>
                <p className="mt-2 text-gray-300">
                  Discover how AI-powered avatars and generative AI are
                  revolutionizing digital interactions in the Metaverse.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03, border: "1px solid yellow" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 1
                }}
                className="bg-gradient-to-br from-black to-[#270427] rounded-tl-3xl rounded-br-3xl border-r border-yellow-400 p-6 rounded-lg text-white"
              >
                <h3 className="text-xl font-bold">🔗 Web3 & NFT Creation</h3>
                <p className="mt-2 text-gray-300">
                  Learn how to mint your own NFTs, build smart contracts, and
                  create decentralized apps (dApp) that power the future of
                  digital ownership.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <TestimonialSwiper />
          </motion.div>

          {/* Final CTA Section */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="mt-12 md:text-center z-10"
          >
            <h2 className="text-2xl font-extrabold text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text">
              Ready to Enter the Future?
            </h2>
            <p className="text-gray-300 mt-4 md:text-lg md:max-w-2xl mx-auto">
              Don't miss your chance to be part of this groundbreaking event.
              The Metaverse Expo is more than just an event, it's a movement.
            </p>

            <NavLink
              to="/generate-ticket"
              className="px-8 py-3 mt-6 cursor-pointer z-10 inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-black font-bold rounded-full text-lg hover:scale-105 transition"
            >
              Secure Your Spot 🚀
            </NavLink>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
