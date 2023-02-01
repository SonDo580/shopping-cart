import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productListSelector } from "../../redux/selectors";

import Product from "./Product";
import "./ProductList.css";

export default function ProductList(props) {
  const { addToCart, removeFromCart, chosenItems } = props;
  const { category } = useParams("category");

  const productList = useSelector(productListSelector);

  if (category === undefined) {
    return (
      <div className="productList">
        {productList.map((product) => {
          return (
            <Product
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              chosenItems={chosenItems}
              key={product.id}
              product={product}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="productList">
        {productList
          .filter((product) => product.category === category)
          .map((product) => {
            return (
              <Product
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                chosenItems={chosenItems}
                key={product.id}
                product={product}
              />
            );
          })}
      </div>
    );
  }
}
