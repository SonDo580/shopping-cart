import { NavLink } from "react-router-dom";
import "./SideBar.scss";

export default function SideBar() {
  return (
    <aside>
      <ul>
        <li>
          <NavLink to="" end>
            All Robots
          </NavLink>
        </li>
        <li>
          <NavLink to="reptile">Reptile</NavLink>
        </li>
        <li>
          <NavLink to="mammal">Mammal</NavLink>
        </li>
        <li>
          <NavLink to="insect">Insect</NavLink>
        </li>
      </ul>
    </aside>
  );
}
