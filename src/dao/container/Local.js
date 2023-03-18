import fs from "fs/promises";

class Local {
  constructor(path) {
    this.path = path;
  }

  async getProds() {
    try {
      const read = await fs.readFile(this.path, "utf-8");
      return JSON.parse(read);
    } catch (err) {
      console.log(err);
    }
  }

  async addProd(obj = aux) {
    try {
      const read = await fs.readFile(this.path, "utf-8");
      const prods = JSON.parse(read);
      const id = prods.length === 0 ? 0 : prods[0].id + 1
      prods.push({ id, ...obj })
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async deleteProd(id) {
    try {
      const deleted = await productModel.findByIdAndDelete(id);
      return deleted;
    } catch (err) {
      console.log(err);
    }
  }
}

export default Local;
