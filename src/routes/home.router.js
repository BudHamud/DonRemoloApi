import { Router } from "express";
import Manager from "../dao/container/Manager.js";
import Local from "../dao/container/Local.js";

const homeRouter = new Router();
const manager = new Manager();
const local = new Local("./src/dao/db/products.json");

homeRouter.get("/", async (req, res) => {
  const result = await manager.getProds();
  res.json(result);
});

homeRouter.post("/", async (req, res) => {
  const result = await manager.addProd(req.body);
  res.json(result);
});

homeRouter.delete("/:id", async (req, res) => {
  const result = await manager.deleteProd(req.params.id);
  res.json(result);
});

homeRouter.get("/json", async (req, res) => {
  const result = await local.getProds();
  res.json(result);
});

homeRouter.post("/json", async (req, res) => {
  const result = await local.addProd(req.body);
  res.json(result);
});

homeRouter.delete("/json/:id", async (req, res) => {
    const result = await local.deleteProd(req.params.id);
    res.json(result);
  });

export default homeRouter;
