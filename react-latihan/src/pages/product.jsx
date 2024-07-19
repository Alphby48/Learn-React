import ProductLayout from "../components/layout/productLayout";
import Navbar from "../components/fragments/navbar";
import Card from "../components/fragments/card";
import stores from "../data/data";
import Cart from "../components/fragments/cart";
import { useState, useEffect } from "react";

const Product = () => {
  const [count, setCount] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setCount(JSON.parse(localStorage.getItem("keranjang")) || []);
  }, []);

  useEffect(() => {
    if (count.length > 0) {
      const totall = count.reduce((acc, item) => {
        const product = stores.find((s) => s.id === item.id);
        return acc + product.harga * item.qty;
      }, 0);
      setTotal(totall);
      localStorage.setItem("keranjang", JSON.stringify(count));
    }
  }, [count]);
  const handleClick = (e) => {
    const id = e.target.getAttribute("datatype");
    const fil = stores.filter((s) => s.id.toString() === id);
    console.log(id);

    const data2 = count.find((c) => c.id === parseInt(id));

    if (data2) {
      setCount(
        count.map((c) => (c.id === parseInt(id) ? { ...c, qty: c.qty + 1 } : c))
      );
    } else {
      setCount([
        ...count,
        {
          id: parseInt(id),
          qty: 1,
        },
      ]);
    }

    console.log(count);
  };

  const hapusItem = (e) => {
    const id = e.target.getAttribute("datatype");
    const hapus = count.filter((c) => c.id !== parseInt(id));
    const totall = hapus.reduce((acc, item) => {
      const product = stores.find((s) => s.id === item.id);
      return acc + product.harga * item.qty;
    }, 0);
    setTotal(totall);
    localStorage.removeItem("keranjang");
    setCount(hapus);
  };
  return (
    <>
      <ProductLayout>
        <Navbar />
        <h1>Product</h1>
        <div className="boxx">
          <div className="box-card">
            {stores.map((s, i) => (
              <Card
                keys={i}
                val={s.id}
                title={s.jdlPrdt}
                price={s.harga}
                image={s.imgPrdt}
                onClick={handleClick}
              />
            ))}
          </div>
          <div className="box-cart">
            <h3>Cart</h3>
            {count.map((c) => {
              const prd = stores.find((s) => s.id === c.id);
              return (
                <Cart
                  val={prd.id}
                  title={prd.jdlPrdt}
                  price={`Harga Satuan: ${prd.harga.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}`}
                  pcs={`Jumlah Unit: ${c.qty}`}
                  total={`Total Harga: ${(prd.harga * c.qty).toLocaleString(
                    "id-ID",
                    {
                      style: "currency",
                      currency: "IDR",
                    }
                  )}`}
                  onClick={hapusItem}
                />
              );
            })}

            <h4>
              Total Harga:{" "}
              {total.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </h4>
          </div>
        </div>
      </ProductLayout>
    </>
  );
};

export default Product;
