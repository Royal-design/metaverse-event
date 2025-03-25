import { BackgroundBeams } from "./ui/background-beams";

export const ProgrammeSchedule = () => {
  const schedule = [
    {
      period: "Morning Session",
      time: "10:00 AM - 12:30 PM",
      events: [
        "Opening Ceremony & Keynote Speech",
        "Panel Discussion: The Future of the Metaverse"
      ]
    },
    {
      period: "Afternoon Session",
      time: "2:00 PM - 4:30 PM",
      events: [
        "Live Demonstrations & Hands-on Workshops",
        "AI & Blockchain in Web3 - Expert Talks"
      ]
    },
    {
      period: "Evening Session",
      time: "6:00 PM - 8:00 PM",
      events: [
        "Networking & VR Experience",
        "Closing Ceremony & Metaverse Party"
      ]
    }
  ];

  return (
    <section className="relative font-roboto py-8 md:py-12  mt-8 px-8 md:px-20 flex flex-col md:flex-row gap-4 md:gap-12 items-center md:items-start justify-between">
      {/* Left Section - Intro Text */}
      <div className="max-w-lg   mb-10 md:mb-0">
        <h2 className="text-2xl text-center md:text-start md:text-4xl font-extrabold text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text">
          Programme Schedule
        </h2>
        <p className="text-gray-300 mt-4 text-base  leading-relaxed">
          Experience an immersive journey through the{" "}
          <span className="text-purple-400 font-extrabold">Metaverse, AI,</span>{" "}
          and{" "}
          <span className="text-purple-400 font-extrabold">
            Web3 innovations
          </span>
          . Our carefully curated sessions feature visionary speakers,
          groundbreaking discussions, and hands-on activities that will shape
          the future of digital interactions.
        </p>
        <p className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed">
          Whether you're an industry leader, a developer, or simply an
          enthusiast, this event is designed to provide you with deep insights,
          <strong> cutting-edge knowledge</strong>, and invaluable networking
          opportunities.
        </p>
        <p className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed">
          Prepare to engage, explore, and experience the next evolution of the
          virtual world like never before!
        </p>
      </div>

      {/* Right Section - Schedule List */}
      <div className="max-w-xl space-y-4 w-full flex flex-col md:flex-row items-center md:gap-4">
        <div className="flex flex-col gap-4">
          {schedule.slice(0, 2).map(({ period, time, events }, index) => (
            <div
              key={index}
              className="relative p-[2px] rounded-tl-[2rem] rounded-br-[2rem] overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500"
            >
              <div className="p-6 bg-gradient-to-br from-black to-[#270427] rounded-tl-[2rem] rounded-br-[2rem]">
                <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                  {period}
                </h3>
                <p className="text-sm md:text-lg text-gray-300 mt-1">{time}</p>
                <ul className="mt-3 space-y-2">
                  {events.map((event, idx) => (
                    <li key={idx} className="text-sm text-gray-400">
                      - {event}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Last Event */}
        <div className="relative p-[2px] max-sm:w-full rounded-tl-[2rem] rounded-br-[2rem] overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500">
          {/* Inner Box with Black Background */}
          <div className="p-6 bg-gradient-to-br from-black to-[#270427] rounded-tl-[2rem] rounded-br-[2rem]">
            <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
              {schedule[2].period}
            </h3>
            <p className="text-sm md:text-lg text-gray-300 mt-1">
              {schedule[2].time}
            </p>
            <ul className="mt-3 space-y-2">
              {schedule[2].events.map((event, idx) => (
                <li key={idx} className="text-sm text-gray-400">
                  - {event}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <BackgroundBeams />
    </section>
  );
};
