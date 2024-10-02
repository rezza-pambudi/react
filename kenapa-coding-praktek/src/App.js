import "./App.css";

const ProductCard = () => {
  return <div className="card">
    <img style={{ width: "100%", height: "300px" }} src="https://via.placeholder.com/300" alt="product" />

    <div className="container">
      <h4>
        <b>Product Name</b>
      </h4>
      <p>Product Description</p>
    </div>
  </div>;
};

function App() {
  return (
    <div className="cards">
      <ProductCard />
    </div>
  );
}

export default App;
