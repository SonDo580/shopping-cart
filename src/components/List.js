import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Product from "./Product";

import leopardImg from "../images/leopard.jpeg";
import dinosaurImg from "../images/dinosaur.jpeg";
import mosquitoImg from "../images/mosquito.jpeg";

const originalProducts = [
  {
    id: 1,
    category: "reptile",
    name: "t-rex",
    price: 100,
    image: dinosaurImg,
    chosen: false,
  },
  {
    id: 2,
    category: "mammal",
    name: "leopard",
    price: 120,
    image: leopardImg,
    chosen: false,
  },
  {
    id: 3,
    category: "insect",
    name: "dragonfly",
    price: 110,
    image: mosquitoImg,
    chosen: false,
  },
  {
    id: 4,
    category: "reptile",
    name: "spinosaurous",
    price: 200,
    image: dinosaurImg,
    chosen: false,
  },
  {
    id: 5,
    category: "mammal",
    name: "tiger",
    price: 150,
    image: leopardImg,
    chosen: false,
  },
  {
    id: 6,
    category: "insect",
    name: "mosquito",
    price: 180,
    image: mosquitoImg,
    chosen: false,
  },
];

export default function List(props) {
  const { addToCart, removeFromCart } = props;
  const { category } = useParams("category");

  const [products, setProducts] = useState(originalProducts);

  if (category === undefined) {
    return (
      <div>
        {products.map((product) => {
          return (
            <Product
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              key={product.id}
              product={product}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        {products
          .filter((product) => product.category === category)
          .map((product) => {
            return (
              <Product
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                key={product.id}
                product={product}
              />
            );
          })}
      </div>
    );
  }
}
