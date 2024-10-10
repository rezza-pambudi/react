import React from "react";
import { useState } from "react";

const ProductCard = (props) => {
  const [jumlahProduct, setJumlahProduct] = useState(0);
  const kurangProduct = () => {
    setJumlahProduct(jumlahProduct - 1);
  };
  const tambahProduct = () => {
    setJumlahProduct(jumlahProduct + 1);
  };
  return (
    <div className="card">
      <img
        style={{
          width: "100%",
          height: "200px",
          borderRadius: "10px 10px 0 0",
        }}
        src={props.imageURL}
        alt=""
      />
      <div className="container">
        <h4>
          <b>{props.nama}</b>
        </h4>
        <p>{props.deskripsi}</p>
      </div>
      <div className="card-keranjang jumlah-product">
        {jumlahProduct > 0 ? (
          <>
          <button onClick={kurangProduct} className="button">
          -
        </button>
        <div>{jumlahProduct}</div>
        <button onClick={tambahProduct} className="button">
          +
        </button>
          </>
        ) : (
          <button onClick={tambahProduct} className="button">
            Keranjang
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
