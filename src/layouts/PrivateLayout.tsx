import { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/store";
import { Navigate, Outlet } from "react-router-dom";
import { SpinnerLoader } from "@/components/SpinnerLoader";

export const PrivateLayout = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <SpinnerLoader />;
  if (!user) return <Navigate to="/login" replace />;

  return <Outlet />;
};
