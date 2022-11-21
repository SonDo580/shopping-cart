import React from "react";
import { useParams } from "react-router-dom";

export default function List() {
  const { category } = useParams("category");

  return <div>{category}</div>;
}
