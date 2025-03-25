import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { useState } from "react";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

import { IoCloseOutline } from "react-icons/io5";

export const NavBarSheet = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {!open ? (
          <div>
            <div onClick={() => setOpen(!open)}>
              <HiMiniBars3BottomLeft size={20} />
            </div>
          </div>
        ) : (
          <div>
            <IoCloseOutline size={20} />
          </div>
        )}
      </SheetTrigger>
      <SheetContent
        side="left"
        className="overflow-auto bg-gradient-to-br from-black to-[#270427]  scrollbar-hidden"
      >
        <SheetTitle />
        <SheetDescription />
        <div className=" flex w-full mt-4 flex-col justify-between gap-4 px-4">
          <NavLink
            onClick={() => setOpen(!open)}
            to="/"
            className="text-white hover:text-purple-400 transition"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setOpen(!open)}
            to="/experience"
            className="text-white hover:text-purple-400 transition"
          >
            Experience
          </NavLink>
          <NavLink
            onClick={() => setOpen(!open)}
            to="/about"
            className="text-white hover:text-purple-400 transition"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setOpen(!open)}
            to="/contact"
            className="text-white hover:text-purple-400 transition"
          >
            Contact
          </NavLink>
          <NavLink
            onClick={() => setOpen(!open)}
            to="/generate-ticket"
            className="text-white hover:text-neon-pink transition"
          >
            Get Ticket
          </NavLink>
        </div>
      </SheetContent>
    </Sheet>
  );
};
