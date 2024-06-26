import Button from "../elements/button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-xs bg-gray-600 border border-gray-700 rounded-lg shadow mx-3 my-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="#">
      <img
        src={image}
        alt="products"
        className="p-8 rounded-t-lg h-60 w-full object-cover object-center"
      />
    </a>
  );
};

const Body = (props) => {
  const { children, name } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-[20px] font-semibold tracking-tight text-white">
          {name.substring(0, 20)} ...
        </h5>
        <p className="text-s text-white">{children.substring(0, 100)}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, handleAddToCard, id } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">$ {price.toLocaleString('id-ID', { styles: 'currency', currency: 'USD' })}</span>
      <Button variant="bg-black" className="bg-blue-600" onClick={() => handleAddToCard(id)}>Add to cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
