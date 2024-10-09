import "./App.css";
import ProductCard from "./components/ProductCard";
import { Products } from "./data/Product";

const App = () => {
  return (
    <div className="cards">
      {Products.map((product) => {
        return <ProductCard key={product.id} {...product} />;
      })}
    </div>
  );
};

export default App;
