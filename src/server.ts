import express, { response } from "express"
import "./database"
import { routes } from "../routes"

const app = express();

app.use(express.json())

app.use(routes)

app.listen(3001, () => console.log("Server running on port 3001"))