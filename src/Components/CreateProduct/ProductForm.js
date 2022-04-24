import React, { useState } from "react";
import "./ProductForm.css";

const ProductForm = (props) => {
  const [OriginalTitle, SetTitle] = useState("");
  const [OriginalPrice, SetPrice] = useState("");
  const TitleChangeHandler = (event) => {
    SetTitle(event.target.value);
  };
  const PriceChangeHandler = (event) => {
    SetPrice(event.target.value);
  };
  const SubmitHandler = (event) => {
    event.preventDefault();
    const FormData = {
      newTitle: OriginalTitle,
      newPrice: OriginalPrice,
    };
    props.getDataForm(FormData);
    SetTitle("");
    SetPrice("");
  };
  return (
    <form action="" className="form-mt" onSubmit={SubmitHandler}>
      <div className="row center product_name mb">
        <div className="col-1">
          <span>Product Name</span>
        </div>
        :
        <div className="col-2">
          <input
            type="text"
            className="name_box ml-2"
            onChange={TitleChangeHandler}
            value={OriginalTitle}
          />
        </div>
      </div>
      <div className="row center product_name mb">
        <div className="col-1">
          <span>Product Price</span>
        </div>
        :
        <div className="col-2">
          <input
            type="number"
            className="name_box ml-2"
            onChange={PriceChangeHandler}
            value={OriginalPrice}
          />
        </div>
      </div>
      <div>
        <button className="create_btn" type="submit">
          Create
        </button>
      </div>
    </form>
  );
};
export default ProductForm;
