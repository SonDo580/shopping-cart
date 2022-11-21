import React from "react";
import List from "../components/List";
import SideBar from "../components/SideBar";

export default function Catalog() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr" }}>
      <SideBar />
      <List />
    </div>
  );
}
