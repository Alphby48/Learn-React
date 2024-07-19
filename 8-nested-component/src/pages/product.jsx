import ButtonBlue from "../components/Elements/Buttons";
import CardProduct from "../components/Fragments/cardProduct";
const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/sepatu.jpg"></CardProduct.Header>
        <CardProduct.Body title="Sepatu">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          perspiciatis repellat maxime eligendi porro beatae fugit aliquam sed
          consequatur asperiores quidem voluptatibus consequuntur assumenda
          adipisci vero, illo nemo quo officia?
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 1.000.000"></CardProduct.Footer>
      </CardProduct>
    </div>
  );
};
export default ProductPage;
