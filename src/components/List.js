import React from "react";
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
    price: "$100",
    image: dinosaurImg,
  },
  {
    id: 2,
    category: "mammal",
    name: "leopard",
    price: "$120",
    image: leopardImg,
  },
  {
    id: 3,
    category: "insect",
    name: "dragonfly",
    price: "$110",
    image: mosquitoImg,
  },
  {
    id: 4,
    category: "reptile",
    name: "spinosaurous",
    price: "$200",
    image: dinosaurImg,
  },
  {
    id: 5,
    category: "mammal",
    name: "tiger",
    price: "$150",
    image: dinosaurImg,
  },
  {
    id: 6,
    category: "insect",
    name: "mosquito",
    price: "$180",
    image: mosquitoImg,
  },
];

export default function List() {
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
