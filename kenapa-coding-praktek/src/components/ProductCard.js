import React from "react";

const ProductCard = (props) => {
  return (
    <>
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
      </div>
    </>
  );
};

export default ProductCard;
