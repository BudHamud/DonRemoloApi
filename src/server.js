import express from "express"
import homeRouter from "./routes/home.router.js"
import "./dao/dbConfig.js"

const app = express()
const PORT = 8080

app.use('/home', homeRouter)

export const server = app.listen(PORT, () => {
    console.log("Connected " + PORT);
})