import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Product from "./pages/product";
import Detail from "./pages/detail";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/member",
    element: <Product></Product>,
  },
  {
    path: "/member/detail/:id",
    element: <Detail></Detail>,
  },
  {
    path: "/register",
    element: <RegisterPage></RegisterPage>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
