import React, { useState } from "react";

export default function CartItem(props) {
  const { item, removeFromCart } = props;

  const [quantity, setQuantity] = useState(1);

  const changeQuantityByOne = (amount) => {
    if (quantity === 1 && amount === -1) {
      return;
    }
    setQuantity((prevQuantity) => prevQuantity + amount);
  };

  const changeQuantity = (event) => {
    if (event.tartget === "") {
      setQuantity(0);
      return;
    }

    let { value } = event.target;
    if (!isNaN(Number(value))) {
      setQuantity(Number(value));
    }
  };

  return (
    <div>
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{`${item.unit}${quantity * item.price}`}</p>
      <p>
        <button onClick={() => changeQuantityByOne(-1)}>-</button>
        <input value={quantity} onChange={changeQuantity} />
        <button onClick={() => changeQuantityByOne(1)}>+</button>
      </p>
      <button
        onClick={() => {
          removeFromCart();
        }}
      >
        Remove from cart
      </button>
      <hr />
    </div>
  );
}
