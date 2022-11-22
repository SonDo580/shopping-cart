import React, { useState } from "react";

export default function Product(props) {
  const { product } = props;

  const { total, setTotal } = useState(product.price);
  const { quantity, setQuantity } = useState(1);

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{total}</p>
      <p>
        <button>-</button>
        <span>{quantity}</span>
        <button>+</button>
      </p>
      <button>Add to cart</button>
      <hr />
    </div>
  );
}
