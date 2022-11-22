import React, { useState } from "react";

export default function Product(props) {
  const { product } = props;

  const { total, setTotal } = useState(product.price);
  const { quantity, setQuantity } = useState(1);

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
