export const MainSection = () => {
  return (
    <section className="md:px-20 px-8  w-full pt-12">
      <main className="flex flex-col md:flex-row w-full gap-12">
        <div className="flex flex-col md:flex-row w-full md:w-[50%] items-center gap-4">
          <div className="rounded-tl-4xl max-sm:hidden overflow-hidden relative">
            <img
              src="https://img.freepik.com/free-photo/metaverse-concept-collage-design_23-2149419859.jpg?ga=GA1.1.695003139.1726237092&semt=ais_hybrid"
              alt="image"
              className="w-[20rem] h-[18rem] md:w-[10rem] md:h-[12rem] object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-tr-4xl max-sm:hidden rounded-bl-4xl overflow-hidden relative">
              <img
                src="https://img.freepik.com/free-photo/portrait-young-african-american-man-with-vr-glasses_23-2148932803.jpg?ga=GA1.1.695003139.1726237092&semt=ais_hybrid"
                alt="image"
                className="w-[20rem] h-[18rem] md:w-[10rem] md:h-[12rem] object-cover"
              />
            </div>
            <div className="rounded-tr-4xl rounded-bl-4xl overflow-hidden relative">
              <img
                src="https://img.freepik.com/free-photo/young-woman-man-with-vr-glasses_23-2148932820.jpg?ga=GA1.1.695003139.1726237092&semt=ais_hybrid"
                alt="image"
                className="w-[20rem] h-[18rem] md:w-[10rem] md:h-[12rem] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:max-w-3xl  md:p-6 bg-black/80 rounded-lg shadow-lg">
          <h1 className="text-xl md:text-3xl max-sm:text-center font-extrabold text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text">
            The Future is Now: Experience CorEX Metaverse!
          </h1>

          <p className="mt-4 text-gray-300">
            Step into a futuristic digital universe where innovation meets
            reality.
            <span className="text-purple-400 font-semibold">
              {" "}
              CorEX Metaverse Expo
            </span>{" "}
            is your gateway to the next generation of technology, blending{" "}
            <span className="text-purple-400 font-semibold">
              VR, AR, AI, and Web3
            </span>{" "}
            into an immersive experience like never before.
          </p>

          <ul className="mt-6 space-y-4 text-sm text-gray-300">
            <li className="relative p-4 bg-black/30 rounded-lg border border-transparent before:absolute before:inset-0 before:rounded-lg before:border-[1px] before:border-gradient-to-r before:from-purple-500 before:via-pink-500 before:to-yellow-500 before:opacity-20">
              🌌 <span className="font-semibold text-purple-400">Explore</span>{" "}
              groundbreaking innovations in virtual reality, augmented reality,
              blockchain, and AI-driven interactions.
            </li>
            <li className="relative p-4 bg-black/30 rounded-lg border border-transparent before:absolute before:inset-0 before:rounded-lg before:border-[1px] before:border-gradient-to-r before:from-purple-500 before:via-pink-500 before:to-yellow-500 before:opacity-20">
              🚀 <span className="font-semibold text-pink-400">Engage</span>{" "}
              with top industry leaders, tech pioneers, and creators shaping the
              **digital frontier**.
            </li>
            <li className="relative p-4 bg-black/30 rounded-lg border border-transparent before:absolute before:inset-0 before:rounded-lg before:border-[1px] before:border-gradient-to-r before:from-purple-500 before:via-pink-500 before:to-yellow-500 before:opacity-20">
              🔗{" "}
              <span className="font-semibold text-yellow-400">Experience</span>{" "}
              the future of digital connectivity through interactive exhibits,
              live demonstrations, and networking opportunities.
            </li>
          </ul>
        </div>
      </main>
    </section>
  );
};
