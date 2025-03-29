import { Form1 } from "@/components/Form1";
import { Form2 } from "@/components/Form2";
import { Ticket } from "@/components/Ticket";
import { useAppSelector } from "@/redux/store";
import { useEffect } from "react";

export const TicketPage = () => {
  const step = useAppSelector((state) => state.form.step);
  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, []);
  return (
    <div className="flex justify-center w-full px-4">
      {step === 1 && <Form1 />}
      {step === 2 && <Form2 />}
      {step === 3 && <Ticket />}
    </div>
  );
};
