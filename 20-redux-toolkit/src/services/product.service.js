import axios from "axios";

export const getProduct = (call) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => call(res.data))
    .catch((err) => console.log(err));
};

export const getDetailProduct = (id, call) => {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => call(res.data))
    .catch((err) => console.log(err));
};
