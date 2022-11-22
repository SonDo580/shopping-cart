import React, { useState } from "react";

export default function Product(props) {
  const { product } = props;

  const [total, setTotal] = useState(product.price);
  const [quantity, setQuantity] = useState(1);

  const changeQuantity = (amount) => {
    if (quantity === 1 && amount === -1) {
      return;
    }
    setQuantity((prevQuantity) => prevQuantity + amount);
    setTotal((prevTotal) => prevTotal + amount * product.price);
  };

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{`${product.unit}${total}`}</p>
      <p>
        <button onClick={() => changeQuantity(-1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => changeQuantity(1)}>+</button>
      </p>
      <button>Add to cart</button>
      <hr />
    </div>
  );
}
