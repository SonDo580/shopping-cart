import React from "react";
import CartItem from "./CartItem";

export default function Cart(props) {
  const { chosenItems, removeFromCart, updateItemQuantity } = props;

  return (
    <div>
      <div className="head">
        <h1>Your Cart</h1>
        <strong>Total: {}</strong>
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
              updateItemQuantity={updateItemQuantity}
            />
          );
        })}
      </div>
    </div>
  );
}
