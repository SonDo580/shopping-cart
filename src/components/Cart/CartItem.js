import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../../redux/slices/cartSlice";

export default function CartItem(props) {
  const { item } = props;

  const dispatch = useDispatch();

  return (
    <div className="cartItem">
      <div className="img">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="main">
        <h3>{item.name}</h3>
        <p>{`$${item.quantity * item.price}`}</p>
        <p>
          <label>Quantity: </label>
          <input
            type="number"
            min="0"
            step="1"
            value={item.quantity}
            onChange={(event) => {
              dispatch(updateQuantity(item.id, event.target.value));
            }}
          />
        </p>
        <button
          className="remove"
          onClick={() => {
            dispatch(removeItem(item.id));
          }}
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
}
