import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <aside>
      <ul>
        <li>
          <Link to="">All Robots</Link>
        </li>
        <li>
          <Link to="reptile">Reptile</Link>
        </li>
        <li>
          <Link to="mammal">Mammal</Link>
        </li>
        <li>
          <Link to="insect">Insect</Link>
        </li>
      </ul>
    </aside>
  );
}
