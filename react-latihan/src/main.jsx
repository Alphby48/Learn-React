import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Product from "./pages/product";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Product />
  </React.StrictMode>
);
