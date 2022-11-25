import React from "react";

export default function Product(props) {
  const { product, addToCart } = props;

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{`$${product.price}`}</p>

      <button
        onClick={() => {
          const item = { ...product, quantity: 1 };
          addToCart(item);
        }}
      >
        Add to cart
      </button>
      <hr />
    </div>
  );
}
