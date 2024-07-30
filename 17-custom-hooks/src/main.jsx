import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ErrorPage from "./pages/404.jsx";
import ProductPage from "./pages/product.jsx";
import ProfilePage from "./pages/profile.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
