import React from "react";
import { useState } from "react";

const ProductCreate = () => {
  const [showForm, setShowForm] = useState(false);
  const handleShow = () => {
      setShowForm(!showForm);
  }
  return (
    <div className="product-create">
    <div className="toggle-add">
      <button onClick={handleShow}
        className="edit-input-submit add-toogle">
        {showForm ? "Close product" : "Add product"}
      </button>
    </div>
      {showForm && <form className="form">
        <div className="form-add-title">Add Product</div>
        <div className="form-group">
          <input
            type="text"
            className="add-input-text"
            placeholder="Nama Product"
            name="nama"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="add-input-text"
            placeholder="Deskripsi Product"
            name="deskripsi"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="add-input-text"
            placeholder="Image Product"
            name="imageURL"
          />
        </div>
      </form>}
    </div>
  );
};

export default ProductCreate;
