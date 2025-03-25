import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left - Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text">
            Metaverse Expo 2025
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-400">
            Experience the future of AI, Web3, and the Metaverse.
          </p>
        </div>

        {/* Middle - Navigation Links */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-6">
          <NavLink
            to="/"
            className="text-white hover:text-purple-400 transition"
          >
            Home
          </NavLink>
          <NavLink
            to="/experience"
            className="text-white hover:text-purple-400 transition"
          >
            Experience
          </NavLink>
          <NavLink
            to="/about"
            className="text-white hover:text-purple-400 transition"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="text-white hover:text-purple-400 transition"
          >
            Contact
          </NavLink>
          <NavLink
            to="/generate-ticket"
            className="text-white hover:text-purple-400 transition"
          >
            Get Ticket
          </NavLink>
        </nav>

        {/* Right - Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-pink-500 transition">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-pink-500 transition">
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-pink-500 transition">
            <i className="fab fa-discord text-xl"></i>
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Metaverse Expo. All rights reserved.
      </div>
    </footer>
  );
};
