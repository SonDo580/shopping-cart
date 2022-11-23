import React, { useState } from "react";

export default function CartItem(props) {
  const { item, removeFromCart, changeTotal } = props;

  const [quantity, setQuantity] = useState(item.quantity);

  const changeQuantityByOne = (amount) => {
    if (quantity === 1 && amount === -1) {
      return;
    }
    // changeTotal(item.price * amount);
    setQuantity((prevQuantity) => prevQuantity + amount);
  };

  const changeQuantity = (event) => {
    if (event.tartget === "") {
      // changeTotal(-item.price);
      setQuantity(0);
      return;
    }

    let { value } = event.target;
    if (!isNaN(Number(value))) {
      // changeTotal((value - 1) * item.price);
      setQuantity(Number(value));
    }
  };

  return (
    <div>
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{`$${quantity * item.price}`}</p>
      <p>
        <button onClick={() => changeQuantityByOne(-1)}>-</button>
        <input value={quantity} onChange={changeQuantity} />
        <button onClick={() => changeQuantityByOne(1)}>+</button>
      </p>
      <button
        onClick={() => {
          removeFromCart(item.id);
        }}
      >
        Remove from cart
      </button>
      <hr />
    </div>
  );
}
