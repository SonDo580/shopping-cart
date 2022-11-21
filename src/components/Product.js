import React from "react";

export default function Product(props) {
  const { product } = props;
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p>
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </p>
      <button>Add to cart</button>
      <hr />
    </div>
  );
}
