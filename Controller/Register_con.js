import bcrypt from "bcrypt"
import { regschema } from "../Schema/registerschema.js";
import mongoose from "mongoose";
const pass = "Bhawishya11";
const collection_name = "ecom";
const mongo = `mongodb+srv://Bhawishya:${pass}@cluster0.ehz40xr.mongodb.net/${collection_name}?retryWrites=true&w=majority`;
mongoose.connect(mongo, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const regcon = async (req, res) => {
  const { name, email, password,  mobile } = req.body;
  let rounds = 10;
  const hashPassword = await bcrypt.hash(password, rounds);

  const Product = mongoose.model("cuvvetlogindatas", regschema);
  let data = new Product({
    name: name,
    password: hashPassword,
    email: email,
    mobile: mobile,
  });
  let result=await data.save();
  res.send(result)
};

export {regcon}