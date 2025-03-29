import { useForm } from "react-hook-form";
import { Separator } from "./ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "./ui/form";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "./ui/select";
import { ChevronDown } from "lucide-react";
import { ticketSchema } from "@/schema/schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { incrementStep, resetForm, updateForm } from "@/redux/slice/formSlice";
import { useAppDispatch } from "@/redux/store";
import { useEffect } from "react";

const ticketType: {
  option: "Regular Access" | "VIP Access" | "VVIP Access";
  price: string;
  date: string;
}[] = [
  {
    option: "Regular Access",
    price: "free",
    date: "20/52"
  },
  {
    option: "VIP Access",
    price: "$150",
    date: "20/52"
  },
  {
    option: "VVIP Access",
    price: "$150",
    date: "20/52"
  }
];

const stepOneFormSchema = ticketSchema.pick({
  ticketNumber: true,
  ticketType: true
});

type StepOneFormSchema = z.infer<typeof stepOneFormSchema>;
export const Form1 = () => {
  const dispatch = useAppDispatch();

  const storedFormData = JSON.parse(localStorage.getItem("formStep1") || "{}");

  const form = useForm<StepOneFormSchema>({
    resolver: zodResolver(stepOneFormSchema),
    defaultValues: {
      ticketNumber: storedFormData.ticketNumber || undefined,
      ticketType: storedFormData.ticketType || undefined
    }
  });

  const selectedType = form.watch("ticketType");

  useEffect(() => {
    const subscription = form.watch((value) => {
      localStorage.setItem("formStep1", JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [form.watch]);

  const onSubmit = async (data: StepOneFormSchema) => {
    dispatch(updateForm({ ...data }));
    dispatch(incrementStep());
    window.location.href = "/generate-ticket/step2";
    window.scrollTo({
      top: 0
    });
  };

  useEffect(() => {
    if (window.location.pathname === "/") {
      window.history.replaceState({}, "", "/generate-ticket/step1");
    }
  }, []);
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-[700px]   max-md:w-full p-[48px]  max-md:p-0 flex-col justify-center items-center gap-[32px] max-md:rounded-[32px] rounded-[40px] border  max-md:border-0 border-border-heavy bg-gradient-to-br from-black to-background-heavy max-md:bg-transparent"
      >
        <div className=" max-md:hidden w-full"></div>
        <div className="flex flex-col justify-center items-start gap-8 self-stretch p-6 rounded-[32px] border border-border-heavy bg-gradient-to-br from-black to-background-heavy">
          <div className=" md:hidden w-full"></div>
          <section className="flex h-[200px] max-md:h-[243px] max-md:p-[16px_24px] max-md:justify-between flex-col items-center gap-2 self-stretch p-6 rounded-[24px] border-r-[2px] border-b-[2px] border-l-[2px] border-border-heavy bg-[rgba(17,10,15,0.1)] bg-[radial-gradient(57.42%_106.59%_at_14.02%_32.06%,rgba(212,52,254,0.2)_0%,rgba(212,52,254,0)_100%)] backdrop-blur-[7px]">
            <main className="flex flex-col items-center gap-2 w-full">
              <p className="text-[#FAFAFA] max-md:w-[246px] items-stretch text-center font-road-rage text-[62px] max-md:text-[48px] font-normal leading-[100%]">
                Metaverse Expo ”25
              </p>
              <p className="w-[340px] max-md:w-[239px] text-[#FAFAFA] text-center font-roboto text-[16px] max-md:text-[14px] font-normal leading-[150%]">
                Join us for an unforgettable experience at COREX! Secure your
                spot now.
              </p>
            </main>
            <div className="flex items-start max-md:flex-col max-md:gap-1 max-md:justify-center max-md:items-center gap-4">
              <p className="text-[#FAFAFA] font-roboto text-[16px] font-normal leading-[150%]">
                📍 Lagos Tech Arena, Victoria Island
              </p>
              <p className="text-[#FAFAFA] max-md:hidden font-roboto text-[16px] font-normal leading-[150%]">
                | |
              </p>
              <p className="text-[#FAFAFA] font-roboto text-[16px] font-normal leading-[150%]">
                May 31, 2025 | 9:00 AM
              </p>
            </div>
          </section>
          <Separator className="h-[4px] self-stretch bg-border-heavy" />
          <div className="flex flex-col gap-[32px] w-full">
            <FormField
              control={form.control}
              name="ticketType"
              render={({ field }) => (
                <FormItem className="space-y-[8px] w-full">
                  <FormLabel className="text-[#FAFAFA] text-[16px] font-roboto">
                    Select Ticket Type:
                  </FormLabel>
                  <div className="flex flex-col w-full justify-center items-center gap-4  p-4 rounded-[24px] border border-[#4f0e3c] bg-[#270427]">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex max-md:flex-col max-md:w-full gap-4 max-md:gap-6"
                      >
                        {ticketType.map((type) => (
                          <FormItem
                            key={type.option}
                            className="flex w-full cursor-pointer items-center space-x-3"
                          >
                            <FormControl>
                              <RadioGroupItem
                                value={type.option}
                                className="hidden"
                              />
                            </FormControl>
                            <div
                              onClick={() =>
                                form.setValue("ticketType", type.option)
                              }
                              className={`flex w-[158px] max-md:w-full h-[110px] flex-col items-start gap-3 p-3 rounded-[12px] border border-border-light ${
                                selectedType === type.option
                                  ? "bg-background-light"
                                  : "bg-background-heavy"
                              } duration-200`}
                            >
                              <p className="text-white font-roboto text-[24px] font-semibold leading-[110%]">
                                {type.price}
                              </p>
                              <div className="flex flex-col justify-center items-start self-stretch">
                                <p className="text-[#FAFAFA] font-roboto text-[16px] font-normal leading-[150%] uppercase">
                                  {type.option}
                                </p>
                                <p className="text-[#D9D9D9] font-roboto text-[14px] font-normal leading-[150%]">
                                  {type.date}
                                </p>
                              </div>
                            </div>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ticketNumber"
              render={({ field }) => (
                <FormItem className="space-y-[8px]">
                  <FormLabel className="text-[#FAFAFA] text-[16px] font-roboto">
                    Select Ticket Number:
                  </FormLabel>

                  <Select
                    key={form.watch("ticketNumber")}
                    onValueChange={field.onChange}
                    value={field.value || undefined}
                  >
                    <FormControl>
                      <SelectTrigger className="relative h-[48px] p-[16px] text-white border border-border-heavy text-[16px] leading-[28px] font-roboto">
                        <SelectValue placeholder="Select Ticket Number" />
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white w-6 h-6" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-background-heavy text-white text-[18px]">
                      {Array.from({ length: 3 }, (_, i) =>
                        (i + 1).toString()
                      ).map((num) => (
                        <SelectItem
                          key={num}
                          value={num}
                          className="px-4 py-2 text-[18px] focus:bg-background-light focus:text-white"
                        >
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex max-md:hidden font-nanum-myeongjo max-md:flex-col items-start gap-4 flex-[1_0_0]">
              <Button
                type="button"
                onClick={() => {
                  localStorage.removeItem("formStep1");
                  form.reset({
                    ticketNumber: undefined,
                    ticketType: undefined
                  });
                  dispatch(resetForm());
                }}
                className="flex bg-button-background-heavy max-md:w-full transition-colors duration-200 hover:bg-button-background-light max-md:py-[12px] text-white py-6 justify-center items-center gap-2 flex-1 rounded-md border border-border-light"
              >
                Cancel
              </Button>
              <Button className="hover:bg-button-background-lightest max-md:w-full transition-colors duration-200 flex px-6 py-6 max-md:py-[12px] justify-center items-center gap-2 flex-1 rounded-md bg-button-background-lighter">
                Next
              </Button>
            </div>
            <div className="flex md:hidden font-nanum-myeongjo max-md:flex-col items-start gap-4 flex-[1_0_0]">
              <Button className="hover:bg-button-background-lightest max-md:w-full transition-colors duration-200 flex px-6 py-6 max-md:py-[12px] justify-center items-center gap-2 flex-1 rounded-md bg-button-background-lighter">
                Next
              </Button>
              <Button
                type="button"
                onClick={() => {
                  localStorage.removeItem("formStep1");
                  form.reset({
                    ticketNumber: undefined,
                    ticketType: undefined
                  });
                  dispatch(resetForm());
                }}
                className="flex bg-button-background-heavy max-md:w-full transition-colors duration-200 hover:bg-button-background-light max-md:py-[12px] text-white justify-center items-center gap-2 flex-1 rounded-md border border-border-light"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};
