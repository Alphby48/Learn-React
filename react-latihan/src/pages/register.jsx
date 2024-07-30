import AuthLayouts from "../components/layout/authLayouts";
import FormRegister from "../components/fragments/formRegister";
const RegisterPage = () => {
  return (
    <AuthLayouts title="Register" type="register">
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPage;
