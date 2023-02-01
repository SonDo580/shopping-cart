import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import "./Cart.css";

export default function Cart(props) {
  const { chosenItems, removeFromCart, updateQuantity, total } = props;

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <div className="head">
        <strong>
          Total: <span className="total">${total}</span>
        </strong>
        <button className="continue">
          <Link to="/catalog">Continue buying</Link>
        </button>
        <button
          className="checkout"
          onClick={() => alert("This feature is not available yet!")}
        >
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
