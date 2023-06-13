import mongoose from "mongoose"
import { homeschema } from "../Schema/homeschema.js"
import {Data} from "../data/data.js"
const pass = "Bhawishya11";
const collection_name = "ecom";
const mongo = `mongodb+srv://Bhawishya:${pass}@cluster0.ehz40xr.mongodb.net/${collection_name}?retryWrites=true&w=majority`;
mongoose.connect(mongo, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const Home = async(req, res, next) =>
{
  const Product = mongoose.model("comment", homeschema);
  let data = await Product.find();
  if (data.length) {
    res.send(data)
  }
  else {
    await Product.collection.insertMany(Data, (error) => {
      if (error) {
        res.send({})
      }
      else {
        next()
      }
  
    })
  }

}
export {Home}