import { Router } from "express";
import Manager from "../dao/container/Manager.js"

const homeRouter = new Router()
const manager = new Manager()

homeRouter.get("/", async (req, res) => {
    const result = await manager.getProds()
    res.json(result)
})

// homeRouter.post("/", async (req, res) => {
//     const result = await manager.addProd(req.body)
//     res.json(result)
// })

export default homeRouter;