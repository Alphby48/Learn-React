import AuthLayouts from "../components/Layouts/authLayouts";
import FormRegister from "../components/Fragments/formRegister";
const RegisterPage = () => {
  return (
    <AuthLayouts title="Register" type="register">
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPage;
