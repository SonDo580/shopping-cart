import React from "react";

export default function Product(props) {
  const { chosenItems, product, addToCart } = props;

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{`${product.unit}${product.price}`}</p>
      <button
        onClick={() => {
          for (let item of chosenItems) {
            if (item.id === product.id) {
              alert("You already chose this product!");
              return;
            }
          }
          addToCart(product);
        }}
      >
        Add to cart
      </button>
      <hr />
    </div>
  );
}
