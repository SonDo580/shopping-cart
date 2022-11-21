import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

const products = [
  { id: 1, category: "reptile", name: "t-rex", price: "$100" },
  { id: 2, category: "mammal", name: "leopard", price: "$120" },
  { id: 3, category: "insect", name: "dragonfly", price: "$110" },
  { id: 4, category: "reptile", name: "spinosaurous", price: "$200" },
  { id: 5, category: "mammal", name: "tiger", price: "$150" },
  { id: 6, category: "insect", name: "mosquito", price: "$180" },
];

export default function Catalog() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr" }}>
      <SideBar />
      <Outlet />
    </div>
  );
}
