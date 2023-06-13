
import mongoose from "mongoose";
import { productschema } from "../Schema/productschema.js";

const pass = "Bhawishya11";
const collection_name = "ecom";
const mongo = `mongodb+srv://Bhawishya:${pass}@cluster0.ehz40xr.mongodb.net/${collection_name}?retryWrites=true&w=majority`;
mongoose.connect(mongo, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const product_add_con = async (req, res) => {
    
  const { company, category, logoUrl,  productLink,description } = req.body;
  const Product = mongoose.model("comments", productschema);
  let data = new Product({
    name: company,
    category: category,
    imgurl: logoUrl,
    voting_count: 0,
    product_name: productLink,
    desc: description,
      
      comment:["demo1"]
  });
  let result = await data.save();
  res.send(result)
};

export {product_add_con}