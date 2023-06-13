import mongoose from "mongoose"
const pass = "Bhawishya11";
const collection_name = "ecom";
const mongo = `mongodb+srv://Bhawishya:${pass}@cluster0.ehz40xr.mongodb.net/${collection_name}?retryWrites=true&w=majority`;
mongoose.connect(mongo, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
import { homeschema } from "../Schema/homeschema.js"
const voting = async(req, res, next) =>
{
    
    const Product = mongoose.model("comment", homeschema);
    let data = await Product.findOne({ '_id': req.body._id })
    let voting_count = data.voting_count;
    voting_count++;

    let update_Data =await  Product.updateOne(
        { '_id': req.body._id },
        {
            $set: { 'voting_count': voting_count }
        }
    )
    let finaldata = await Product.findOne({ '_id': req.body._id })
    res.send(finaldata)
    
}
export {voting}