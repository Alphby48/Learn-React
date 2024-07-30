import CardProduct from "../components/Fragments/cardProduct";
import ButtonBlue from "../components/Elements/Buttons";
import Counter from "../components/Fragments/counter";
import { useState, useEffect, useRef } from "react";
import { getProduct } from "../services/product.service";
// import { json } from "react-router-dom";

const email = localStorage.getItem("email");
const logoutsys = () => {
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  window.location.href = "/login";
};
const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((p) => p.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);
  const handleAddToCart = (id) => {
    if (cart.find((c) => c.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  // useRef
  // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")));

  // const handleAddToCartRef = (id) => {
  //   cartRef.current = [...cartRef.current, { id, qty: 1 }];
  //   localStorage.setItem("cart", JSON.stringify(cartRef.current));
  // };

  const totalPriceRef = useRef(null);
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);
  const rem = () => {
    localStorage.removeItem("cart");
    setCart([]);
    setTotalPrice([]);
  };
  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        <p className="px-5">{email}</p>
        <ButtonBlue onClick={logoutsys}>Log out</ButtonBlue>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((p) => {
              return (
                <CardProduct key={p.id} id={p.id}>
                  <CardProduct.Header image={p.image}></CardProduct.Header>
                  <CardProduct.Body title={p.title}>
                    {p.description}
                  </CardProduct.Body>
                  <CardProduct.Footer
                    price={p.price}
                    id={p.id}
                    handleAddToCart={handleAddToCart}
                  ></CardProduct.Footer>
                </CardProduct>
              );
            })}
        </div>
        <div className="w-auto border border-black">
          <h1 className="text-3xl font-bold text-blue-600">Cart</h1>

          <table className="text-left table-auto border border-separate border-spacing-1 border-black">
            <thead>
              <tr>
                <th>title</th>
                <th>price</th>
                <th>deskripsi</th>
                <th>total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((c) => {
                  const produk = products.find((p) => p.id === c.id);
                  return (
                    <tr key={c.id}>
                      <td>{produk.title.substring(0, 10)}...</td>
                      <td>
                        {produk.price.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </td>
                      <td>{c.qty}</td>
                      <td>
                        {(c.qty * produk.price).toLocaleString("id-ID", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </td>
                    </tr>
                  );
                })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    {totalPrice.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
          <ButtonBlue onClick={rem}>remove</ButtonBlue>
        </div>
      </div>
    </>
  );
};
export default ProductPage;
