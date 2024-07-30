import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { hapusCart } from "../../redux/slices/cartSlice";
import ButtonBlue from "../Elements/Buttons";

const TableCart = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();

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

  const totalPriceRef = useRef(null);
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  const rem = () => {
    setTotalPrice(0);
    localStorage.removeItem("cart");
    cart([]);
  };

  return (
    <>
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
      <ButtonBlue onClick={() => dispatch(hapusCart())}>remove</ButtonBlue>
    </>
  );
};

export default TableCart;