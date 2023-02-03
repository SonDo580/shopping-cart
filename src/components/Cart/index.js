import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartItemsSelector, totalSelector } from "../../redux/selectors";
import "./Cart.scss";
import CartItem from "./CartItem";

export default function Cart() {
  const cartItems = useSelector(cartItemsSelector);
  const total = useSelector(totalSelector);

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <div className="head">
        <strong>
          Total: <span className="total">${total}</span>
        </strong>
        <button className="btn" style={{ padding: 0 }}>
          <Link
            to="/catalog"
            className="btn btn-primary"
            style={{ textDecoration: "none" }}
          >
            Continue buying
          </Link>
        </button>
        <button
          className="btn btn-danger"
          onClick={() => alert("This feature is not available yet!")}
        >
          Check out
        </button>
      </div>
      <hr />
      <div className="cartItems">
        {cartItems.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}
