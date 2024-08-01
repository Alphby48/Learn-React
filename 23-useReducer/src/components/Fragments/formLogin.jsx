import FormLabel from "../Elements/Input";
import ButtonBlue from "../Elements/Buttons";
import { useEffect, useRef, useState } from "react";
import { auth } from "../../services/auth.service";
const FormLogin = () => {
  const [failedLogin, setFailedLogin] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    // localStorage.setItem("email", e.target.email.value);
    // localStorage.setItem("password", e.target.password.value);
    // console.log(e.target.email.value);
    // console.log(e.target.password.value);

    // console.log("login");
    const dataAuth = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    auth(dataAuth, (status, res) => {
      if (status) {
        localStorage.setItem("token", res.data.token);
        window.location.href = "/product";
      } else {
        setFailedLogin(res.response.data);
      }
    });
  };

  //
  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  return (
    <form action="" onSubmit={handleLogin}>
      <FormLabel
        textLabel={"Username"}
        type="username"
        placeholder="evan dimas"
        name="username"
        ref={usernameRef}
      ></FormLabel>
      <FormLabel
        textLabel={"Password"}
        type="password"
        placeholder="*****"
        name="password"
      ></FormLabel>

      <ButtonBlue classname="bg-blue-600 w-full" type="submit">
        Login
      </ButtonBlue>
      {failedLogin && (
        <p className="text-red-600 text-center mt-5">{failedLogin}</p>
      )}
    </form>
  );
};

export default FormLogin;
