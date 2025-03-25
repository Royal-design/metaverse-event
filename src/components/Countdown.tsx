import { useEffect, useState } from "react";

export const Countdown = () => {
  const eventDate = new Date("2025-06-01T00:00:00Z").getTime(); // Set event date
  const [timeLeft, setTimeLeft] = useState(eventDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(eventDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  const formatTime = (milliseconds: number) => {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="flex  flex-col md:justify-center md:items-center px-8 py-4 md:px-20 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-transparent text-center bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text">
        Prepare for the Ultimate Metaverse Experience!
      </h2>

      <div className="mt-6  flex gap-4 text-center">
        {[
          { label: "Days", value: days },
          { label: "Hours", value: hours },
          { label: "Minutes", value: minutes },
          { label: "Seconds", value: seconds }
        ].map(({ label, value }) => (
          <div
            key={label}
            className="p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 rounded-lg"
          >
            <div className="flex flex-col items-center justify-center w-17 h-17 md:w-20 md:h-20 bg-gradient-to-br from-black to-[#270427] rounded-lg shadow-lg">
              <span className="text-xl md:text-2xl font-lato text-white drop-shadow-lg">
                {value < 10 ? `0${value}` : value}
              </span>
              <span className="text-xs text-gray-300 uppercase mt-1">
                {label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
