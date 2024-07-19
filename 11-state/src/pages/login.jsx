import AuthLayouts from "../components/Layouts/authLayouts";
import FormLogin from "../components/Fragments/formLogin";
const LoginPage = () => {
  return (
    <AuthLayouts title="Login" type="login">
      <FormLogin />
    </AuthLayouts>
  );
};

export default LoginPage;
