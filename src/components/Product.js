import React, { useState } from "react";

export default function Product(props) {
  const { product, addToCart } = props;

  const [chosen, setChosen] = useState(false);

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{`$${product.price}`}</p>

      {chosen ? (
        <button
          onClick={() => {
            setChosen(false);
          }}
        >
          Remove from cart
        </button>
      ) : (
        <button
          onClick={() => {
            setChosen(true);
            const item = { ...product, quantity: 1 };
            addToCart(item);
          }}
        >
          Add to cart
        </button>
      )}
      <hr />
    </div>
  );
}
