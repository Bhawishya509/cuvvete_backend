import express from "express"
const route = express.Router();
import { regcon } from "../Controller/Register_con.js"
import { logincon } from "../Controller/login_con.js";
import { Home } from "../Controller/Home.js";
import {voting} from "../Controller/Voting.js"
import mongoose from "mongoose";
import { comments_add } from "../Controller/Commentadd.js"
import { product_add_con } from "../Controller/addproduct.js"
import { homeschema } from "../Schema/homeschema.js";
const pass = "Bhawishya11";
const collection_name = "ecom";
const mongo = `mongodb+srv://Bhawishya:${pass}@cluster0.ehz40xr.mongodb.net/${collection_name}?retryWrites=true&w=majority`;
mongoose.connect(mongo, {
  useUnifiedTopology: true,
  useNewUrlParser: true, 
});
route.get("/", Home, async(req, res) =>
{
   
    const Product = mongoose.model("comment", homeschema);
    let data = await Product.find();
    res.send(data)
})
route.post("/Login",logincon)
route.post("/Register", regcon) 
route.post("/update_voting", voting)
route.post("/comment", comments_add)
route.post("/add_product",product_add_con)
export {route}