import AuthLayouts from "../components/Layouts/authLayouts";
import FormRegister from "../components/Fragments/formRegister";
const RegisterPage = () => {
  return (
    <AuthLayouts title="Register">
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPage;
