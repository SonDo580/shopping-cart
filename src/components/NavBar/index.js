import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { quantitySelector } from "../../redux/selectors";
import "./NavBar.css";

export default function NavBar() {
  const quantity = useSelector(quantitySelector);

  return (
    <nav>
      <Link className="logo" to="/">
        Mega Robot
      </Link>
      <Link to="/catalog">Shop Now</Link>
      <Link to="/cart">Go to Cart ({quantity})</Link>
    </nav>
  );
}
