import React from "react";
import "./createProduct.css";
import ProductForm from "./ProductForm";
const createProduct = (props) => {
  const SaveDataForm = (enterfromProduct) => {
    const AddNewProduct = {
      ...enterfromProduct,
      id: `p${props.getCreateData.length + 1}`,
    };
    props.product(AddNewProduct);
    console.log(AddNewProduct);
  };
  return (
    <div className="col-1">
      <ProductForm getDataForm={SaveDataForm}></ProductForm>
    </div>
  );
};
export default createProduct;
