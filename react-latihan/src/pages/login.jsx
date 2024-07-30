import AuthLayouts from "../components/layout/authLayouts";
import FormLogin from "../components/fragments/formLogin";
const LoginPage = () => {
  return (
    <AuthLayouts title="Login" type="login">
      <FormLogin />
    </AuthLayouts>
  );
};

export default LoginPage;
