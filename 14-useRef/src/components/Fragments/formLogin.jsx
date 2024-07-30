import FormLabel from "../Elements/Input";
import ButtonBlue from "../Elements/Buttons";
import { useEffect, useRef } from "react";
const FormLogin = () => {
  const emailRef = useRef(null);
  useEffect(() => {
    emailRef.current.focus();
  }, []);
  return (
    <form action="" onSubmit={handleLogin}>
      <FormLabel
        textLabel={"Email"}
        type="email"
        placeholder="example@gmail.com"
        name="email"
        ref={emailRef}
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
    </form>
  );
};

const handleLogin = (e) => {
  e.preventDefault();
  localStorage.setItem("email", e.target.email.value);
  localStorage.setItem("password", e.target.password.value);
  console.log(e.target.email.value);
  console.log(e.target.password.value);
  window.location.href = "/product";
  console.log("login");
};

export default FormLogin;
