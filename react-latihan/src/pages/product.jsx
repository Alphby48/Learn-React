import ProductLayout from "../components/layout/productLayout";
import Navbar from "../components/fragments/navbar";
import Card from "../components/fragments/card";
// import stores from "../data/data";
import Cart from "../components/fragments/cart";
import { useState, useEffect, useRef } from "react";
import { getDataProduct } from "../data/api";

const Product = () => {
  const [stores, setStores] = useState([]);
  //

  useEffect(() => {
    getDataProduct((data) => {
      setStores(data);
    });
  }, []);

  const handleClick = (id) => {
    console.log(id);
    window.location.href = `/member/detail/${id}`;
  };

  return (
    <>
      <ProductLayout>
        <Navbar />
        <h1>Product</h1>
        <div className="boxx">
          <div className="box-card">
            {stores.length > 0 &&
              stores.map((s) => (
                <Card
                  keys={s.id}
                  val={s.id}
                  title={s.name}
                  price={s.memberStatus}
                  image={s.image}
                  onClick={handleClick}
                />
              ))}
          </div>
        </div>
      </ProductLayout>
    </>
  );
};

export default Product;
