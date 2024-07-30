import FormLabel from "../elements/Input/index";
import Button from "../elements/button";
import { PostData } from "../../data/apiReg";
import { json } from "react-router-dom";
const FormRegister = () => {
  const handleClick1 = (e) => {
    e.preventDefault();
    const dataAuth = {
      username: e.target.text.value,
      password: e.target.password.value,
    };
    PostData(dataAuth, (res) => {
      console.log(res);
    });
    console.log(dataAuth);
  };
  return (
    <form method="post" action="/register" onSubmit={handleClick1}>
      <FormLabel
        textLabel={"Username"}
        type="text"
        placeholder="your name"
        name="text"
      ></FormLabel>

      <FormLabel
        textLabel={"Password"}
        type="password"
        placeholder="*****"
        name="password"
      ></FormLabel>

      <button type="submit">submit</button>
    </form>
  );
};

export default FormRegister;
