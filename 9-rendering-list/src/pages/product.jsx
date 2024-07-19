import CardProduct from "../components/Fragments/cardProduct";

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

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((p) => {
        return (
          <CardProduct key={p.id} id={p.id}>
            <CardProduct.Header image={p.image}></CardProduct.Header>
            <CardProduct.Body title={p.title}>{p.description}</CardProduct.Body>
            <CardProduct.Footer price={p.price}></CardProduct.Footer>
          </CardProduct>
        );
      })}
    </div>
  );
};
export default ProductPage;
