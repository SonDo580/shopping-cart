import { useParams } from "react-router-dom";

import Product from "./Product";
import "../css/List.css";

import { Images } from "../constants/images";

const products = [
  {
    id: 1,
    category: "reptile",
    name: "t-rex",
    price: 100,
    image: Images.DINOSAUR,
  },
  {
    id: 2,
    category: "mammal",
    name: "leopard",
    price: 120,
    image: Images.LEOPARD,
  },
  {
    id: 3,
    category: "insect",
    name: "dragonfly",
    price: 110,
    image: Images.MOSQUITO,
  },
  {
    id: 4,
    category: "reptile",
    name: "spinosaurous",
    price: 200,
    image: Images.DINOSAUR,
  },
  {
    id: 5,
    category: "mammal",
    name: "tiger",
    price: 150,
    image: Images.LEOPARD,
  },
  {
    id: 6,
    category: "insect",
    name: "mosquito",
    price: 180,
    image: Images.MOSQUITO,
  },
];

export default function ProductList(props) {
  const { addToCart, removeFromCart, chosenItems } = props;
  const { category } = useParams("category");

  if (category === undefined) {
    return (
      <div className="productList">
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
      <div className="productList">
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
