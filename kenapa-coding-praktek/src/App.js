import "./App.css";
import ProductList from "./components/ProductList";
import { useState } from "react";   
import { Products } from "./data/Product";
import ProductCreate from "./components/ProductCreate";

const App = () => {
  const [products, setProducts] = useState(Products)
  return (
    <>
    <div className="app-title">Product List</div>
    <ProductCreate />
    <ProductList products={products} />
    </>
  );
};

export default App;
