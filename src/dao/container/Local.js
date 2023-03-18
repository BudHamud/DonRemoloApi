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
      const id = prods.length === 0 ? 0 : Number(prods[0].id) + 1
      prods.push({ id, ...obj })
      await fs.writeFile(this.path, JSON.stringify(prods, null, 2), "utf-8");
      return prods
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async deleteProd(id) {
    try {
      const read = await fs.readFile(this.path, "utf-8");
      const prods = JSON.parse(read);
      const isHere = prods.find((e) => e.id === id);
      if (isHere) {
        const filter = prods.filter((e) => e.id !== id);
        await fs.writeFile(this.path, JSON.stringify(filter, null, 2), "utf-8");
        return { message: "Producto eliminado", prods: prods };
      } else {
        return { error: "No encontrado" };
      }
    } catch (err) {
      console.log(err);
    }
  }
}

export default Local;
