import CardProduct from "../components/Fragments/cardProduct";
import ButtonBlue from "../components/Elements/Buttons";
const products = [
  {
    id: 1,
    image: "/sepatu.jpg",
    title: "Sepatu",
    price: "Rp 1.000.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iureperspiciatis repellat maxime eligendi porro beatae",
  },
  {
    id: 2,
    image: "/sepatu.jpg",
    title: "Sepatu kont",
    price: "Rp 1.000.000",
    description: "Lorem ipsum dolor sit amet consectetur",
  },
];

const email = localStorage.getItem("email");
const logoutsys = () => {
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  window.location.href = "/login";
};
const ProductPage = () => {
  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        <p className="px-5">{email}</p>
        <ButtonBlue onClick={logoutsys}>Log out</ButtonBlue>
      </div>
      <div className="flex justify-center py-5">
        {products.map((p) => {
          return (
            <CardProduct key={p.id} id={p.id}>
              <CardProduct.Header image={p.image}></CardProduct.Header>
              <CardProduct.Body title={p.title}>
                {p.description}
              </CardProduct.Body>
              <CardProduct.Footer price={p.price}></CardProduct.Footer>
            </CardProduct>
          );
        })}
      </div>
    </>
  );
};
export default ProductPage;
