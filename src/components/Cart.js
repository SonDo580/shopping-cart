import React, { useState } from "react";
import CartItem from "./CartItem";

export default function Cart(props) {
  const { chosenItems, removeFromCart } = props;

  const initialTotal = chosenItems.reduce((sum, item) => sum + item.price, 0);
  const [total, setTotal] = useState(initialTotal);

  const changeTotal = (amount) => {
    setTotal((prevTotal) => prevTotal + amount);
  };

  return (
    <div>
      <div className="head">
        <h1>Your Cart</h1>
        <strong>Total: ${total}</strong>
        <button>Continue buying</button>
        <button>Check out</button>
      </div>
      <hr />
      <div className="cartItems">
        {chosenItems.map((item) => {
          return (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
              changeTotal={changeTotal}
            />
          );
        })}
      </div>
    </div>
  );
}
