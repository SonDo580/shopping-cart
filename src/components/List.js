import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Product from "./Product";

import leopardImg from "../images/leopard.jpeg";
import dinosaurImg from "../images/dinosaur.jpeg";
import mosquitoImg from "../images/mosquito.jpeg";

const products = [
  {
    id: 1,
    category: "reptile",
    name: "t-rex",
    price: 100,
    unit: "$",
    image: dinosaurImg,
  },
  {
    id: 2,
    category: "mammal",
    name: "leopard",
    price: 120,
    unit: "$",
    image: leopardImg,
  },
  {
    id: 3,
    category: "insect",
    name: "dragonfly",
    price: 110,
    unit: "$",
    image: mosquitoImg,
  },
  {
    id: 4,
    category: "reptile",
    name: "spinosaurous",
    price: 200,
    unit: "$",
    image: dinosaurImg,
  },
  {
    id: 5,
    category: "mammal",
    name: "tiger",
    price: 150,
    unit: "$",
    image: leopardImg,
  },
  {
    id: 6,
    category: "insect",
    name: "mosquito",
    price: 180,
    unit: "$",
    image: mosquitoImg,
  },
];

export default function List() {
  // Add and remove products logic
  const [chosenProducts, setChosenProducts] = useState([]);

  const addToCart = () => {};
  const removeFromCart = () => {};

  // Rendering
  let { category } = useParams("category");
  if (category === undefined) {
    return (
      <div>
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    );
  } else {
    return (
      <div>
        {products
          .filter((product) => product.category === category)
          .map((product) => {
            return <Product key={product.id} product={product} />;
          })}
      </div>
    );
  }
}
