import React from "react";
import { useState } from "react";

const ProductCreate = () => {
  const initialState = {
    nama: "",
    deskripsi: "",
    imageURL: "",
  };
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const { nama, deskripsi, imageURL } = formData;
  const handleShow = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialState);
    setShowForm(false);
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="product-create">
      <div className="toggle-add">
        <button onClick={handleShow} className="edit-input-submit add-toogle">
          {showForm ? "Close product" : "Add product"}
        </button>
      </div>
      {showForm && (
        <form onSubmit={handleSubmit} className="form">
          <div className="form-add-title">Add Product</div>
          <div className="form-group">
            <input
              type="text"
              className="add-input-text"
              placeholder="Nama Product"
              name="nama"
              value={nama}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="add-input-text"
              placeholder="Deskripsi Product"
              name="deskripsi"
              value={deskripsi}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="add-input-text"
              placeholder="Image Product"
              name="imageURL"
              value={imageURL}
              onChange={handleChange}
            />
          </div>
        <input type="submit" className="edit-input-submit add" />
        </form>
      )}
    </div>
  );
};

export default ProductCreate;
