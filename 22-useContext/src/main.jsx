import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ErrorPage from "./pages/404.jsx";
import ProductPage from "./pages/product.jsx";
import ProfilePage from "./pages/profile.jsx";
import DetailProductPage from "./pages/detailProduct.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import DarkModeContextProvider from "./context/darkMode.jsx";

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
  {
    path: "/products/:id",
    element: <DetailProductPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <RouterProvider router={router} />
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>
);
