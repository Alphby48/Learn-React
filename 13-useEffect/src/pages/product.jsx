import CardProduct from "../components/Fragments/cardProduct";
import ButtonBlue from "../components/Elements/Buttons";
import Counter from "../components/Fragments/counter";
import { useState, useEffect } from "react";
import { json } from "react-router-dom";
const products = [
  {
    id: 1,
    image: "/sepatu.jpg",
    title: "Sepatu",
    price: 1000000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iureperspiciatis repellat maxime eligendi porro beatae",
  },
  {
    id: 2,
    image: "/sepatu.jpg",
    title: "Sepatu kont",
    price: 2000000,
    description: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    id: 4,
    image: "/sepatu.jpg",
    title: "Sepatu 3",
    price: 3000000,
    description: "Lorem ipsum dolor sit amet consectetur",
  },
];

const email = localStorage.getItem("email");
const logoutsys = () => {
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  window.location.href = "/login";
};
const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((p) => p.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);
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

  const rem = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        <p className="px-5">{email}</p>
        <ButtonBlue onClick={logoutsys}>Log out</ButtonBlue>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.map((p) => {
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
              {cart.map((c) => {
                const produk = products.find((p) => p.id === c.id);
                return (
                  <tr key={c.id}>
                    <td>{produk.title}</td>
                    <td>
                      {produk.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{c.qty}</td>
                    <td>
                      {(c.qty * produk.price).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    {totalPrice.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
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
