import axios from "axios";
export const PostData = (data, cal) => {
  axios
    .post("http://192.168.1.15:3000/register", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => cal(res))
    .catch((err) => err);
};
