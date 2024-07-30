import FormLabel from "../Elements/Input";
import ButtonBlue from "../Elements/Buttons";
const FormRegister = () => {
  return (
    <form action="">
      <FormLabel
        textLabel={"Username"}
        type="text"
        placeholder="your name"
        name="text"
      ></FormLabel>
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
      <FormLabel
        textLabel={"Confirm Password"}
        type="password"
        placeholder="*****"
        name="confirmPassword"
      ></FormLabel>

      <ButtonBlue classname="bg-blue-600 w-full">Register</ButtonBlue>
    </form>
  );
};

export default FormRegister;
