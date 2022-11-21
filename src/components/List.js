import React from "react";
import { useParams } from "react-router-dom";

export default function List() {
  let { category } = useParams("category");
  if (category === undefined) {
    category = "all product";
  }

  return <div>{category}</div>;
}
