import AuthLayouts from "../components/Layouts/authLayouts";
import FormLogin from "../components/Fragments/formLogin";
const LoginPage = () => {
  return (
    <AuthLayouts title="Login">
      <FormLogin />
    </AuthLayouts>
  );
};

export default LoginPage;
