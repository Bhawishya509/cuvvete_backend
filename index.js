import express from "express"
import cors from "cors"
const app = express();
import { route } from "./routes/pathroutes.js";
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(route)
app.listen(8000,() =>
{
    console.log("connect with server")
})