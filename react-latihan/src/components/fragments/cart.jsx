import Button from "../elements/button";
const Cart = (props) => {
  const { title, price, val, pcs, total, onClick } = props;
  return (
    <div className="cart" key={val}>
      <p>{title}</p>
      <p>{price}</p>
      <p>{pcs}</p>
      <p>{total}</p>
      <Button onClick={onClick} datatype={val}>
        hapus
      </Button>
    </div>
  );
};

export default Cart;
