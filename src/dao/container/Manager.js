import { productModel } from "../models/product.model.js";

class Manager {
  async getProds() {
    try {
      const prod = await productModel.find();
      return prod;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async addProd(obj) {
    try {
      const aux = {
        name: "Pizza Mediana",
        description: "Con quesito roquefort",
        price: 1600,
        img: "pizzaMediana.jpg",
        category: "pizzas",
        quantity: 1,
      };
      const elif = obj ? obj : aux
      await productModel.create({ elif });
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}

export default Manager;
