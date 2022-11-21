import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

export default function Catalog() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr" }}>
      <SideBar />
      <Outlet />
    </div>
  );
}
