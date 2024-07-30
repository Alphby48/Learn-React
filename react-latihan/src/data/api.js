import axios from "axios";
export const getDataProduct = (callback) => {
  axios
    .get("http://192.168.1.15:3000/member")
    .then((res) => callback(res.data))
    .catch((err) => err);
};
export const getDetailProduct = (id, callback) => {
  axios
    .get(`http://192.168.1.80:3000/member/detail/${id}`)
    .then((res) => callback(res.data))
    .catch((err) => err);
};
