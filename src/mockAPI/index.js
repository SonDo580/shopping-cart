import { createServer, Model } from "miragejs";
import { Images } from "../constants/images";

const productList = [
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

export function setupServer() {
  let server = createServer({
    models: {
      product: Model,
    },

    seeds(server) {
      productList.forEach((product) => server.create("product", product));
    },

    routes() {
      this.namespace = "api";

      this.get("/products", (schema) => {
        return schema.products.all();
      });
    },
  });

  return server;
}
