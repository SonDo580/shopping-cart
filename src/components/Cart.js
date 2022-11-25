import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

export default function Cart(props) {
  const { chosenItems, removeFromCart, updateQuantity, total } = props;

  return (
    <div>
      <div className="head">
        <h1>Your Cart</h1>
        <strong>Total: ${total}</strong>
        <button>
          <Link to="/catalog">Continue buying</Link>
        </button>
        <button onClick={() => alert("This feature is not available yet!")}>
          Check out
        </button>
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
            />
          );
        })}
      </div>
    </div>
  );
}
