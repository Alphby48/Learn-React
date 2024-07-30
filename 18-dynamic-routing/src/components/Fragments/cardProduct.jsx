import { Link } from "react-router-dom";
import ButtonBlue from "../Elements/Buttons";
const CardProduct = (props) => {
  const { children, id } = props;
  return (
    <div
      className="max-w-64 bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 my-2 flex flex-col justify-between"
      datatype={id}
    >
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image, id } = props;
  return (
    <Link to={`/products/${id}`}>
      <img
        src={image}
        alt="sepatu"
        className="p-8 rounded-t-lg h-60 w-full object-cover"
      />
    </Link>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {title.substring(0, 20)}...
        </h5>
        <p className="text-m text-white">{children.substring(0, 100)}...</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, handleAddToCart, id } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-sm font-bold text-white">
        {price.toLocaleString("id-ID", {
          style: "currency",
          currency: "USD",
        })}
      </span>
      <ButtonBlue className="bg-blue-600" onClick={() => handleAddToCart(id)}>
        Cart
      </ButtonBlue>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
