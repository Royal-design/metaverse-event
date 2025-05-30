import { lazy, Suspense, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SpinnerLoader } from "./components/SpinnerLoader";
import { RootLayout } from "./layouts/RootLayout";
import { ErrorPage } from "@/Pages/ErrorPage";
import { useAppDispatch } from "./redux/store";
import { setProducts } from "./redux/slice/productSlice";
import { products } from "./assets/data/products";
import { Form2 } from "./components/Form2";
import { Form1 } from "./components/Form1";
import { PublicLayout } from "./layouts/PublicLayout";
import { PrivateLayout } from "./layouts/PrivateLayout";
import { checkAuthState } from "./redux/slice/authSlice";
import { MyTicket } from "./components/MyTicket";
const HomePage = lazy(() =>
  import("@/Pages/HomePage").then(({ HomePage }) => ({ default: HomePage }))
);
const AboutPage = lazy(() =>
  import("@/Pages/Aboutpage").then(({ Aboutpage }) => ({ default: Aboutpage }))
);
const ContactPage = lazy(() =>
  import("@/Pages/ContactPage").then(({ ContactPage }) => ({
    default: ContactPage
  }))
);
const TicketPage = lazy(() =>
  import("@/Pages/TicketPage").then(({ TicketPage }) => ({
    default: TicketPage
  }))
);

const ExperiencePage = lazy(() =>
  import("@/Pages/ExperiencePage").then(({ ExperiencePage }) => ({
    default: ExperiencePage
  }))
);
const CartPage = lazy(() =>
  import("@/Pages/CartPage").then(({ CartPage }) => ({
    default: CartPage
  }))
);
const LoginPage = lazy(() =>
  import("@/Pages/LoginPage").then(({ LoginPage }) => ({
    default: LoginPage
  }))
);
const RegisterPage = lazy(() =>
  import("@/Pages/RegisterPage").then(({ RegisterPage }) => ({
    default: RegisterPage
  }))
);
const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<SpinnerLoader />}>
        <RootLayout />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<SpinnerLoader />}>
        <ErrorPage />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/experience",
        element: <ExperiencePage />
      },
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/contact",
        element: <ContactPage />
      },
      {
        path: "/generate-ticket",
        element: <TicketPage />,
        children: [
          {
            index: true,
            element: <Form1 />
          },
          {
            path: "step1",
            element: <Form1 />
          },
          {
            path: "step2",
            element: <Form2 />
          },
          {
            path: "ticket",
            element: <MyTicket />
          }
        ]
      },
      {
        element: <PrivateLayout />,
        children: [
          {
            path: "/cart",
            element: <CartPage />
          }
        ]
      },
      {
        element: <PublicLayout />,
        children: [
          { path: "/register", element: <RegisterPage /> },
          { path: "/login", element: <LoginPage /> }
        ]
      }
    ]
  }
]);

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkAuthState());
    dispatch(setProducts(products));
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
