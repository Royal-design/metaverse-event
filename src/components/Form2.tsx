import { useEffect, useState } from "react";
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
import { Button } from "./ui/button";
import { ticketSchema } from "@/schema/schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { updateForm } from "@/redux/slice/formSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Mail } from "lucide-react";
import { Textarea } from "./ui/textarea";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const stepTwoFormSchema = ticketSchema.pick({
  name: true,
  email: true,
  request: true,
  image: true
});

type StepTwoFormSchema = z.infer<typeof stepTwoFormSchema>;
const apiKey = import.meta.env.VITE_API_KEY;
export const Form2 = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const type = useAppSelector((state) => state.form.ticketType);
  const savedData = JSON.parse(localStorage.getItem("formStepTwo") || "{}");

  const [uploadError, setUploadError] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(
    savedData.image || null
  );
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const form = useForm<StepTwoFormSchema>({
    resolver: zodResolver(stepTwoFormSchema),
    defaultValues: {
      name: savedData.name || "",
      email: savedData.email || "",
      request: savedData.request || "",
      image: savedData.image || ""
    }
  });

  useEffect(() => {
    const subscription = form.watch((values) => {
      localStorage.setItem("formStepTwo", JSON.stringify(values));
    });

    return () => subscription.unsubscribe();
  }, [form]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setUploadProgress(0);
    setUploadError(null);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        formData,
        {
          onUploadProgress: (progressEvent) => {
            if (progressEvent.total) {
              setUploadProgress(
                Math.round((progressEvent.loaded * 100) / progressEvent.total)
              );
            }
          }
        }
      );

      const imageUrl = response.data?.data?.url;
      if (!imageUrl) throw new Error("No image URL returned from server");

      setImagePreview(imageUrl);
      form.setValue("image", imageUrl);
      localStorage.setItem(
        "formStepTwo",
        JSON.stringify({ ...form.getValues(), image: imageUrl })
      );
    } catch (error: any) {
      console.error("Error uploading image:", error);
      setUploadError(
        error.response?.data?.error?.message ||
          "Failed to upload image. Please try again."
      );
    } finally {
      setUploading(false);
    }
  };

  const onSubmit = async (data: StepTwoFormSchema) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(updateForm(data));
        localStorage.removeItem("formStepTwo");
        navigate("/generate-ticket/ticket");
        window.scrollTo({ top: 0, behavior: "smooth" });
        resolve(true);
      }, 2000);
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex  max-md:w-full p-[48px]  max-md:p-0 flex-col justify-center items-center gap-[32px] max-md:rounded-[32px] rounded-[40px] border  max-md:border-0 border-border-heavy bg-gradient-to-br from-black to-background-heavy max-md:bg-transparent"
      >
        <div className="flex w-full p-[24px] flex-col justify-center gap-[32px] self-stretch rounded-[32px] border border-border-heavy bg-background-heavy">
          <div className="w-full">
            <FormField
              control={form.control}
              name="image"
              render={() => (
                <FormItem className="flex flex-col w-[556px] max-md:w-full p-[24px] pb-[48px] gap-[32px] border border-border-light bg-background-light rounded-[24px]">
                  <FormLabel className="text-[#FAFAFA] text-[16px] font-roboto">
                    Upload Profile Photo
                  </FormLabel>

                  <Input
                    id="photo"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                  <div className="flex h-[200px]  justify-center items-center gap-[10px] w-full bg-[rgba(0,0,0,0.20)] max-md:bg-transparent">
                    <div
                      onClick={() => document.getElementById("photo")?.click()}
                      className="flex w-[240px] max-md:w-full h-[240px] p-[24px] max-md:p-0 flex-col justify-center items-center gap-[16px] rounded-[32px] border-[4px] border-border-light bg-borderborder-border-heavy"
                    >
                      {imagePreview ? (
                        <img
                          src={imagePreview}
                          alt="Uploaded"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      ) : (
                        <>
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M25.2639 14.816C24.6812 10.2267 20.7505 6.66669 16.0052 6.66669C12.3305 6.66669 9.13854 8.81469 7.68121 12.2C4.81721 13.056 2.67188 15.76 2.67188 18.6667C2.67188 22.3427 5.66254 25.3334 9.33854 25.3334H10.6719V22.6667H9.33854C7.13321 22.6667 5.33854 20.872 5.33854 18.6667C5.33854 16.7947 6.93721 14.9907 8.90254 14.6454L9.67721 14.5094L9.93321 13.7654C10.8705 11.0307 13.1972 9.33335 16.0052 9.33335C19.6812 9.33335 22.6719 12.324 22.6719 16V17.3334H24.0052C25.4759 17.3334 26.6719 18.5294 26.6719 20C26.6719 21.4707 25.4759 22.6667 24.0052 22.6667H21.3385V25.3334H24.0052C26.9465 25.3334 29.3385 22.9414 29.3385 20C29.337 18.8047 28.9347 17.6444 28.196 16.7047C27.4574 15.7649 26.425 15.0999 25.2639 14.816Z"
                              fill="#FAFAFA"
                            />
                            <path
                              d="M17.3385 18.6667V13.3334H14.6719V18.6667H10.6719L16.0052 25.3334L21.3385 18.6667H17.3385Z"
                              fill="#FAFAFA"
                            />
                          </svg>

                          <p className="text-center text-[#FAFAFA] font-roboto text-[16px] font-normal leading-[150%]">
                            Drag & drop or click to upload
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                  {uploadError && (
                    <p className="text-red-500 text-sm ">{uploadError}</p>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {uploading ? (
            <div className="w-full bg-border border-border-heavy  rounded-full h-1 mt-2">
              <div
                className="bg-background-light h-1 rounded-full"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          ) : (
            <Separator className="h-[4px] self-stretch bg-border-light" />
          )}

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start w-full gap-2">
                <FormLabel className="text-[#FAFAFA] text-[16px] font-roboto">
                  Enter your name
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    {...field}
                    className="text-[#FAFAFA] w-full  focus:border-border-light duration-200 h-[48px] p-[12px] border border-border-heavy rounded-[12px] bg-background-light"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start w-full gap-2">
                <FormLabel className="text-[#FAFAFA] text-[16px] font-roboto">
                  Enter your email *
                </FormLabel>
                <div className="relative w-full">
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Your valid email"
                      {...field}
                      className="text-[#FAFAFA] focus:border-border-light duration-200 w-full h-[48px] p-[12px] pl-[44px] border border-border-heavy rounded-[12px] bg-background-light"
                    />
                  </FormControl>
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white w-5 h-5" />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="request"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start w-full gap-2">
                <FormLabel className="text-[#FAFAFA] text-[16px] font-roboto">
                  Special request?
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Text area"
                    {...field}
                    className="text-[#FAFAFA] w-full h-[127px] focus:border-border-light duration-200 p-[12px] border border-border-heavy rounded-[12px] bg-background-light"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex max-md:hidden  justify-between gap-4 font-nanum-myeongjo">
            <Button
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: 0
                });
                navigate("/generate-ticket/step1");
              }}
              className="bg-button-background-heavy transition-colors duration-200 hover:bg-button-background-light text-white w-1/2 py-6 border border-border-light rounded-md"
            >
              Back
            </Button>

            <Button
              disabled={form.formState.isSubmitting}
              className="px-6 py-6 bg-button-background-lighter text-white hover:bg-button-background-lightest flex-1 rounded-md flex items-center justify-center"
            >
              {form.formState.isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Generating...
                </>
              ) : (
                `Get My ${type} Ticket`
              )}
            </Button>
          </div>

          <div className="flex md:hidden w-full font-nanum-myeongjo max-md:flex-col items-start gap-4 flex-[1_0_0]">
            <Button
              disabled={form.formState.isSubmitting}
              className="hover:bg-button-background-lightest text-white  max-md:w-full transition-colors duration-200 flex px-6 py-6 max-md:py-[12px] justify-center items-center gap-2 flex-1 rounded-md bg-button-background-lighter"
            >
              {form.formState.isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Generating...
                </>
              ) : (
                `Get My ${type} Ticket`
              )}
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: 0
                });
                navigate("/generate-ticket/step1");
              }}
              className="flex bg-button-background-heavy max-md:w-full transition-colors duration-200 hover:bg-button-background-light max-md:py-[12px] text-white justify-center items-center gap-2 flex-1 rounded-md border border-border-light"
            >
              Back
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};
