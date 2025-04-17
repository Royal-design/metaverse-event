import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useEffect } from "react";

export const ContactPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, []);
  return (
    <div>
      <section className="min-h-screen  text-white">
        <div className="h-[20rem] w-full max-sm:h-full relative">
          <img
            src="https://media.istockphoto.com/id/1337573216/photo/adams-creation-style-hands-with-a-neon-frame.webp?a=1&b=1&s=612x612&w=0&k=20&c=hh80oXPqtSIivzNQWoZDOToIjseeaY0NSF6GM1-JfOU="
            alt="hero"
            className="h-full w-full object-cover"
          />
          <article className="absolute   max-sm:px-4 inset-0 bg-gradient-to-br from-black to-[#27042770]  flex flex-col gap-4 items-center justify-center">
            <motion.h1
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400"
            >
              Let’s Connect
            </motion.h1>
            <motion.p
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-lg text-center max-w-2xl mx-auto text-gray-400"
            >
              Whether you're a speaker, exhibitor, partner, or tech enthusiast.
              We’d love to hear from you. Reach out through any of the channels
              below!
            </motion.p>
          </article>
        </div>

        {/* Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl px-8 md:px-20 py-12 mx-auto">
          {/* Contact Details */}
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className=" text-pink-500">📍</div>
              <div>
                <h3 className="text-lg font-semibold">Our Location</h3>
                <p>Lagos Tech Arena, Victoria Island, Lagos, Nigeria</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className=" text-purple-400">📞</div>
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p>+234 812 345 6789</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className=" text-yellow-400">✉️</div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p>hello@metaverseexpo.com</p>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">
              Connect With Us Online
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="https://twitter.com/metaverseexpo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-pink-400 transition duration-300"
              >
                🐦 Twitter
              </a>
              <a
                href="https://instagram.com/metaverseexpo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-yellow-400 transition duration-300"
              >
                📸 Instagram
              </a>
              <a
                href="https://linkedin.com/company/metaverseexpo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-purple-500 transition duration-300"
              >
                💼 LinkedIn
              </a>
              <a
                href="https://discord.gg/metaverseexpo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue-400 transition duration-300"
              >
                💬 Discord
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
