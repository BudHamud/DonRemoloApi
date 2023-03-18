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

  async addProd(obj = aux) {
    try {
      const aux = {
        name: "Pizza Mediana",
        description: "Con quesito roquefort",
        price: 1600,
        img: "pizzaMediana.jpg",
        category: "pizzas",
        quantity: 1,
      };
      await productModel.create(obj)
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async deleteProd(id) {
    try {
      const deleted = await productModel.findByIdAndDelete(id)
      return deleted 
    }
    catch(err) {
      console.log(err);
    }
  }
}

export default Manager;
