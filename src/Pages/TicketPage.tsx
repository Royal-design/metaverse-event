import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export const TicketPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, []);
  return (
    <div>
      <div className="flex justify-center w-full px-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
