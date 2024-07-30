import CardProduct from "../components/Fragments/cardProduct";
import ButtonBlue from "../components/Elements/Buttons";
import Counter from "../components/Fragments/counter";
import { useState, useEffect, useRef } from "react";
import { getProduct } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import { getUsername } from "../services/auth.service";
import TableCart from "../components/Fragments/tableCard";
import Navbar from "../components/Layouts/navbar";
import { useContext } from "react";
import { DarkMode } from "../context/darkMode";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  useLogin();

  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div
        className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}
      >
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((p) => {
              return (
                <CardProduct key={p.id} id={p.id}>
                  <CardProduct.Header
                    image={p.image}
                    id={p.id}
                  ></CardProduct.Header>
                  <CardProduct.Body title={p.title}>
                    {p.description}
                  </CardProduct.Body>
                  <CardProduct.Footer
                    price={p.price}
                    id={p.id}
                  ></CardProduct.Footer>
                </CardProduct>
              );
            })}
        </div>
        <div className="w-auto border border-black">
          <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
    </>
  );
};
export default ProductPage;
