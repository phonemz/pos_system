import React, { useState } from "react";
import "./App.css";
import ShowProducts from "./Components/ShowProducts/showProducts";
import CreateProduct from "./Components/CreateProduct/createProduct";
const SimpleProduct = [
  {
    id: "p1",
    productName: "ALOVE Shower",
    price: 5000,
  },
  {
    id: "p2",
    productName: "ALOVE Gel",
    price: 2000,
  },
  {
    id: "p3",
    productName: "Head&Showders",
    price: 5000,
  },
  {
    id: "p4",
    productName: "Pet Milk ",
    price: 3000,
  },
  {
    id: "p5",
    productName: "Game CD",
    price: 15000,
  },
  {
    id: "p6",
    productName: "PS4",
    price: 115000,
  },
  {
    id: "p7",
    productName: "PC",
    price: 555000,
  },
  {
    id: "p8",
    productName: "Perfume",
    price: 35000,
  },
];
const App = () => {
  const [allProduct, SetProduct] = useState(SimpleProduct);
  const ProductHandler = (getNewData) => {
    SetProduct((preventOriginal) => {
      return [getNewData, ...preventOriginal];
    });
  };

  return (
    <div>
      <div className="row">
        <div className="col-1 border-right p-0">
          <h1>First Part</h1>
        </div>
        <div className="col-2 border-right product_background_color">
          <ShowProducts getProduct={allProduct}></ShowProducts>
        </div>
        <CreateProduct
          getCreateData={allProduct}
          product={ProductHandler}
        ></CreateProduct>
      </div>
    </div>
  );
};
export default App;
