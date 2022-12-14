import React from "react";
import { useParams } from "react-router-dom";

import Product from "./Product";
import "../css/List.css";

import leopardImg from "../images/leopard.jpeg";
import dinosaurImg from "../images/dinosaur.jpeg";
import mosquitoImg from "../images/mosquito.jpeg";

const products = [
  {
    id: 1,
    category: "reptile",
    name: "t-rex",
    price: 100,
    image: dinosaurImg,
  },
  {
    id: 2,
    category: "mammal",
    name: "leopard",
    price: 120,
    image: leopardImg,
  },
  {
    id: 3,
    category: "insect",
    name: "dragonfly",
    price: 110,
    image: mosquitoImg,
  },
  {
    id: 4,
    category: "reptile",
    name: "spinosaurous",
    price: 200,
    image: dinosaurImg,
  },
  {
    id: 5,
    category: "mammal",
    name: "tiger",
    price: 150,
    image: leopardImg,
  },
  {
    id: 6,
    category: "insect",
    name: "mosquito",
    price: 180,
    image: mosquitoImg,
  },
];

export default function List(props) {
  const { addToCart, removeFromCart, chosenItems } = props;
  const { category } = useParams("category");

  if (category === undefined) {
    return (
      <div className="catalog">
        {products.map((product) => {
          return (
            <Product
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              chosenItems={chosenItems}
              key={product.id}
              product={product}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="catalog">
        {products
          .filter((product) => product.category === category)
          .map((product) => {
            return (
              <Product
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                chosenItems={chosenItems}
                key={product.id}
                product={product}
              />
            );
          })}
      </div>
    );
  }
}
