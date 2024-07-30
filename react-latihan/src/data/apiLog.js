import axios from "axios";

export const postLogin = (data, cal) => {
  axios
    .post("http://192.168.1.15:3000/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => cal(res))
    .catch((err) => cal(err));
};
