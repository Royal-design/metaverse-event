import { motion } from "framer-motion";

export const Speakers = () => {
  const speakers = [
    {
      name: "Sophia Zhang",
      title: "Metaverse Researcher & Futurist",
      image:
        "https://img.freepik.com/premium-photo/futuristic-portrait-features-person-wearing-neonlit-glasses-reflective-jacket-against-vibrant-glowing-backdrop-showcasing-bold-modern-aesthetic_95891-140082.jpg?ga=GA1.1.695003139.1726237092&semt=ais_hybrid",
      bio: "A leading researcher in immersive technology and the future of virtual spaces."
    },
    {
      name: "Elijah Carter",
      title: "Blockchain & Web3 Innovator",
      image:
        "https://img.freepik.com/premium-photo/black-man-wearing-neon-glasses_53876-147041.jpg?ga=GA1.1.695003139.1726237092&semt=ais_hybrid",
      bio: "Expert in decentralized technologies, bringing Web3 into mainstream adoption."
    },
    {
      name: "Dr. Sinclair",
      title: "AI & Virtual Reality Engineer",
      image:
        "https://media.istockphoto.com/id/1410177463/photo/stylish-guy-neon-fashion-night-trendy-clothes.jpg?s=612x612&w=0&k=20&c=4XDUmbIVUDmFF_DY6lQ-vDnuhtGpCV49yJ1BSibKh48=",
      bio: "Building the next generation of AI-driven virtual experiences."
    }
  ];

  return (
    <section className="py-8 md:py-12  px-8 md:px-20 text-center">
      <h2 className="text-2xl md:text-4xl  font-extrabold text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text">
        Meet Our Keynote Speakers
      </h2>
      <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
        Get inspired by industry leaders shaping the future of the Metaverse,
        AI, and Web3.
      </p>

      {/* Speakers List */}
      <div className="flex flex-col md:flex-row justify-center gap-8 mt-12">
        {speakers.map((speaker, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 1
            }}
            key={index}
            className="overflow-hidden rounded-tl-[2rem] rounded-br-[2rem] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 shadow-lg"
          >
            {/* Inner Content */}
            <div className="p-6 bg-gradient-to-br from-black to-[#270427] rounded-tl-[2rem] rounded-br-[2rem] flex flex-col items-center">
              {/* Apply Framer Motion here to scale image */}
              <motion.img
                src={speaker.image}
                alt={speaker.name}
                className="rounded-full w-[10rem] h-[10rem] object-top object-cover border border-purple-500 shadow-lg"
                whileHover={{ scale: 1.1 }} // Scale effect on hover
                transition={{ duration: 0.3 }} // Duration for smooth scaling
              />
              <h3 className="mt-4 text-lg md:text-xl font-bold text-white">
                {speaker.name}
              </h3>
              <p className="text-sm text-purple-400">{speaker.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
