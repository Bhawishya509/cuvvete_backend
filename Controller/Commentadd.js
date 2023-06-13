import mongoose from "mongoose"
const pass = "Bhawishya11";
const collection_name = "ecom";
const mongo = `mongodb+srv://Bhawishya:${pass}@cluster0.ehz40xr.mongodb.net/${collection_name}?retryWrites=true&w=majority`;
mongoose.connect(mongo, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
import {homeschema} from "../Schema/homeschema.js"
const comments_add=async (req, res, next) =>
{
    const Product = mongoose.model("comment",homeschema);
    let data = await Product.findOne({ '_id': req.body._id })
    data.comment.push(req.body.comment)
    let ans = await data.save()
    res.send(ans)
}
export {comments_add}