import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  const loginPage = location.pathname === "/login";
  const registerPage = location.pathname === "/register";
  return (
    <div className="bg-gradient-to-br from-black to-[#270427] min-h-screen">
      {!loginPage && !registerPage && <Navbar />}
      <main className="pt-20">
        <Outlet />
      </main>
    </div>
  );
};
