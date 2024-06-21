import { Fragment, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/elements/button";


const products = [
  {
    id: 1,
    name: "Sepatu Adidas",
    price: 1000000,
    image: "/images/shoes-1.jpg",
    description: `lorem ipsum sit amet dolor lorem ipsum sit amet dolor lorem ipsum sit
        amet dolor lorem ipsum sit amet dolor lorem ipsum sit amet dolor`,
  },
  {
    id: 2,
    name: "Sepatu Nike",
    price: 500000,
    image: "/images/shoes-1.jpg",
    description: `lorem ipsum sit amet dolor lorem ipsum sit amet dolor`,
  },
  {
    id: 3,
    name: "Sepatu Puma",
    price: 800000,
    image: "/images/shoes-1.jpg",
    description: `lorem ipsum sit amet dolor lorem`,
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {

    const [cart, setCart] = useState([
      {
        id : "Sepatu Puma",
        qty : 1,
      }
    ]);
    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = '/login';
    };

    const handleAddToCard = (id) => {
      setCart([
        ...cart,
        {
          id,
          qty : 1,
        },
      ]);
    };

  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button variant='bg-black' className="" onClick={handleLogout}>Logout</Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image}></CardProduct.Header>
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} id={product.id} handleAddToCard={handleAddToCard}></CardProduct.Footer>
          </CardProduct>
        ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {
                cart.map((item) => {
                  const product = products.find((product) => product.id === item.id);
                  return (
                    <tr key={item.id}>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{item.qty}</td>
                      <td>{product.price * item.qty}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
