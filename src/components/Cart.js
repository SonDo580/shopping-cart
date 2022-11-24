import React from "react";
import CartItem from "./CartItem";

export default function Cart(props) {
  const {
    chosenItems,
    removeFromCart,
    updateQuantity /* total, changeTotal */,
  } = props;

  return (
    <div>
      <div className="head">
        <h1>Your Cart</h1>
        {/* <strong>Total: ${total}</strong> */}
        <strong>Total: $???</strong>
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
              updateQuantity={updateQuantity}
              // changeTotal={changeTotal}
            />
          );
        })}
      </div>
    </div>
  );
}
