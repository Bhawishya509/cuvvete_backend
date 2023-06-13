import mongoose from "mongoose";
import bcrypt from "bcrypt"
import {logschema} from "../Schema/loginschema.js"
const pass = "Bhawishya11";
const collection_name = "ecom";
const mongo = `mongodb+srv://Bhawishya:${pass}@cluster0.ehz40xr.mongodb.net/${collection_name}?retryWrites=true&w=majority`;
mongoose.connect(mongo, {
  useUnifiedTopology: true,
  useNewUrlParser: true, 
});
const logincon = async (req, res) => {

    const { email, password } = req.body;
    const Product = mongoose.model('cuvvetlogindata', logschema);
    let data = await Product.findOne({ "email": email });
        if (data) {
            let checking = await bcrypt.compare(password, data.password);
            if (checking == true) res.status(200).send("rightpassword")
            else if (checking == false) res.send({})
        }
        else {
            res.send({})
        }
    
}
export {logincon}