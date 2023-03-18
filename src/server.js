import express from "express"
import homeRouter from "./routes/home.router.js"
import "./dao/dbConfig.js"
import "dotenv/config";

const app = express()
const PORT = process.env.MONGOPORT;

app.use('/', homeRouter)

export const server = app.listen(PORT, () => {
    console.log("Connected " + PORT);
})