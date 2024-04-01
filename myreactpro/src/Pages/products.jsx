import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/elements/button";
import Counter from "../components/Fragments/Counter";

const products = [
  {
    id: 1,
    name: "Sepatu Adidas",
    price: "Rp. 1.000.000",
    image: "/images/shoes-1.jpg",
    description: `lorem ipsum sit amet dolor lorem ipsum sit amet dolor lorem ipsum sit
        amet dolor lorem ipsum sit amet dolor lorem ipsum sit amet dolor`,
  },
  {
    id: 2,
    name: "Sepatu Nike",
    price: "Rp. 500.000",
    image: "/images/shoes-1.jpg",
    description: `lorem ipsum sit amet dolor lorem ipsum sit amet dolor`,
  },
  {
    id: 3,
    name: "Sepatu Puma",
    price: "Rp. 800.000",
    image: "/images/shoes-1.jpg",
    description: `lorem ipsum sit amet dolor lorem`,
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = '/login';
    };
  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button className="ml-2 bg-black" onClick={handleLogout}>Logout</Button>
      </div>
      <div className="flex justify-center py-5">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image}></CardProduct.Header>
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price}></CardProduct.Footer>
          </CardProduct>
        ))}
      </div>
      <div className="flex w-100 justify-center">
        <Counter></Counter>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
