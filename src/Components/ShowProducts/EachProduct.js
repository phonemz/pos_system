import React from "react";
import "./EachProduct.css";

const SingleProduct = (props) => {
  return (
    <div className="width-10 single_product">
      <h3>{props.Item}</h3>
      <p>{props.Price}MMK</p>
      <button className="add_to_cart">Add To Cart</button>
    </div>
  );
};
export default SingleProduct;
