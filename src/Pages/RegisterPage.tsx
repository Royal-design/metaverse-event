"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RegisterFormData, registerSchema } from "@/schema/registerSchema";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { useAppDispatch } from "@/redux/store";
import { Link, useNavigate } from "react-router-dom";
import corexLogo from "@/assets/corex.png";

import { toast } from "sonner";
import { registerUser } from "@/redux/slice/authSlice";
import { AuthLoader } from "@/components/AuthLoader";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      name: "",
      password: ""
    }
  });

  const handleSubmit = async (userData: RegisterFormData) => {
    const response = await dispatch(
      registerUser(userData.email, userData.password, userData.name)
    );

    if (response.success) {
      form.reset();
      navigate("/cart");
      toast.success("User registered successfully");
    } else {
      toast.error(response.message || "Registration failed");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-8 h-full flex flex-col p-8  justify-center  items-center w-full"
      >
        <Card className="max-w-sm  w-full mx-auto p-2 md:p-4 md:border  border-border-heavy  border-0 bg-gradient-to-br from-black to-[#270427] rounded-md ">
          <CardHeader className="text-center flex flex-col items-center text-xl md:text2xl mb-4 font-bold">
            <img
              src={corexLogo}
              alt="chatty-bee"
              className="size-12 object-contain"
            />
            <CardTitle className="text-gray-200">
              {" "}
              Join the CoreX Conference!
            </CardTitle>
            <p className="text-sm text-gray-300  mt-2">
              Step Into the Future of Innovation & the Metaverse
            </p>
          </CardHeader>
          <CardContent className="p-0 flex flex-col gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your name"
                      {...field}
                      className=" border border-border-light text-gray-200"
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
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      {...field}
                      className=" border border-border-light text-gray-200"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      className=" border border-border-light text-gray-200"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>

          <CardFooter className="p-0 flex flex-col gap-1">
            <Button
              disabled={form.formState.isSubmitting}
              type="submit"
              className="w-full border border-border-light bg-button-background-light hover:bg-button-background-lighter "
            >
              {form.formState.isSubmitting ? <AuthLoader /> : "Register"}
            </Button>
            <p className=" text-sm mt-2 text-gray-200">
              {" "}
              You have an account?{" "}
              <Link to="/login" className=" text-sm text-gray-200 transition">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};
