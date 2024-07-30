import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/darkMode";
const AuthLayouts = (props) => {
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  console.log(isDarkMode);
  console.log(`83r5^_`);
  return (
    <div
      className={`flex justify-center min-h-screen items-center ${
        isDarkMode && "bg-slate-900"
      }`}
    >
      <div className="w-full max-w-xs">
        <button
          className="absolute right-2 top-2 bg-blue-600 text-white rounded"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "dark" : "light"}
        </button>
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500">
          Welcome, Please enter your details
        </p>
        {children}
        <p className="text-sm mt-5 text-center">
          {type === "login"
            ? "Dont have account? "
            : "Already have an account? "}
          {type === "login" && (
            <Link to="/register" className="font-bold text-blue-600">
              Register
            </Link>
          )}
          {type === "register" && (
            <Link to="/login" className="font-bold text-blue-600">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayouts;
