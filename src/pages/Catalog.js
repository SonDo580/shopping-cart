import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

const products = [
  { id: 1, category: "reptile", name: "t-rex" },
  { id: 2, category: "mammal", name: "leopard" },
  { id: 3, category: "insect", name: "dragonfly" },
  { id: 4, category: "reptile", name: "spinosaurous" },
  { id: 5, category: "mammal", name: "tiger" },
  { id: 6, category: "insect", name: "mosquito" },
];

export default function Catalog() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr" }}>
      <SideBar />
      <Outlet />
    </div>
  );
}
