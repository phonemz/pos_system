import "./showProducts.css";
import SingleProduct from "./EachProduct";
const showProducts = (props) => {
  return (
    <div className="product_list_row">
      {props.getProduct.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            Item={product.productName}
            Price={product.price}
          ></SingleProduct>
        );
      })}
    </div>
  );
};
export default showProducts;
