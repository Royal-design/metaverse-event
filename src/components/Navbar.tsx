import logo from "@/assets/corex.png";
import { NavLink } from "react-router-dom";
import { NavBarSheet } from "./NavBarSheet";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md flex items-center justify-between px-4 md:px-20 py-4">
      <img src={logo} alt="corex" className="size-12 object-contain" />
      <div className="md:hidden">
        <NavBarSheet />
      </div>
      <div className="font-lato hidden md:flex gap-6 font-light">
        <NavLink to="/" className="text-white hover:text-purple-400 transition">
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
          className="text-white hover:text-neon-pink transition"
        >
          Get Ticket
        </NavLink>
      </div>
    </nav>
  );
};
