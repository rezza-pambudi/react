import React from "react";
import ProductCard from "../components/ProductCard";
import { Products } from "../data/Product";

const ProductList = () => {
    return (
        <div className="cards">
            {Products.map((product) => {
                return <ProductCard key={product.id} {...product} />;
            })}
        </div>
    );
};

export default ProductList;