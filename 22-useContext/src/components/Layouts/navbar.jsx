import { useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import ButtonBlue from "../Elements/Buttons";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { DarkMode } from "../../context/darkMode";
const Navbar = () => {
  const [totalCart, setTotalCart] = useState(0);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const cart = useSelector((state) => state.cart.data);
  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);
  const username = useLogin();
  const logoutsys = () => {
    localStorage.removeItem("token");

    window.location.href = "/login";
  };
  return (
    <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
      <p className="px-5">{username}</p>
      <ButtonBlue onClick={logoutsys}>Log out</ButtonBlue>
      <div className="flex items-center bg-gray-800 p-2 ml-5">{totalCart}</div>
      <button
        className="p-2 bg-black text-white rounded"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "dark" : "light"}
      </button>
    </div>
  );
};
export default Navbar;
