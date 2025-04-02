import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  const loginPage = location.pathname === "/login";
  const registerPage = location.pathname === "/register";
  return (
    <div className="bg-gradient-to-br w-full from-black to-[#270427] min-h-screen">
      <Toaster
        theme="dark"
        toastOptions={{
          style: {
            background: "linear-gradient(to bottom right, black, #270427)",
            color: "white",
            borderRadius: "8px"
          }
        }}
      />
      {!loginPage && !registerPage && <Navbar />}
      <main className="pt-20 w-full flex flex-col justify-between min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};
