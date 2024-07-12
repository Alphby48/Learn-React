import FormLabel from "../Elements/Input";
import ButtonBlue from "../Elements/Buttons";
const FormLogin = () => {
  return (
    <form action="">
      <FormLabel
        textLabel={"Email"}
        type="email"
        placeholder="example@gmail.com"
        name="email"
      ></FormLabel>
      <FormLabel
        textLabel={"Password"}
        type="password"
        placeholder="*****"
        name="password"
      ></FormLabel>

      <ButtonBlue classname="bg-blue-600 w-full">Login</ButtonBlue>
    </form>
  );
};

export default FormLogin;
