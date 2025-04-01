import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { logoutUser } from "@/redux/slice/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { LogOut, UserRound } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const ProfileMenu = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState<boolean>(false);
  const { user } = useAppSelector((state) => state.auth);
  const signOut = async () => {
    const response = await dispatch(logoutUser());
    if (response.success) {
      toast.success("User logged out successfully");
    } else {
      toast.error(response.message || "Logout failed");
    }
  };
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <div className="cursor-pointer">
          {user?.photo ? (
            <img
              src={user.photo}
              className="w-6 h-6 rounded-full border border-border-light shadow-sm"
            />
          ) : (
            <UserRound
              strokeWidth={1.5}
              className="border border-border-light rounded-full p-1"
            />
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-transparent border-border-light text-gray-200 ">
        <DropdownMenuItem className="hover:bg-button-background-light cursor-pointer">
          <LogOut className="text-gray-200" />
          <span
            onClick={() => {
              signOut();
              navigate("/");
            }}
          >
            Log out
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
