import AuthLayouts from "../components/Layouts/authLayouts";
import FormLogin from "../components/Fragments/formLogin";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <AuthLayouts title="Login">
      <FormLogin />
      <p className="text-sm mt-5 text-center">
        Don't have account?{" "}
        <Link to="/register" className="font-bold text-blue-600">
          Sign up
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default LoginPage;
