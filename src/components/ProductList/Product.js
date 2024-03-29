import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../redux/slices/cartSlice";

export default function Product(props) {
  const dispatch = useDispatch();

  const { product, cartItems } = props;

  const indexInCart = cartItems.findIndex((item) => item.id === product.id);

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{`$${product.price}`}</p>

      {indexInCart !== -1 ? (
        <button
          className="btn btn-secondary"
          onClick={() => {
            dispatch(removeItem(product.id));
          }}
        >
          Remove from cart
        </button>
      ) : (
        <button
          className="btn btn-primary"
          onClick={() => {
            const item = { ...product, quantity: 1 };
            dispatch(addItem(item));
          }}
        >
          Add to cart
        </button>
      )}
    </div>
  );
}
