
import mongoose from "mongoose";
// const pass = "Bhawishya11";
// const collection_name = "ecom";
// const mongo = `mongodb+srv://Bhawishya:${pass}@cluster0.ehz40xr.mongodb.net/${collection_name}?retryWrites=true&w=majority`;
// mongoose.connect(mongo, {
//   useUnifiedTopology: true,
//   useNewUrlParser: true, 
// });
const homeschema = new mongoose.Schema({
    imgurl: String,
    name: String,
    desc: String,
    voting_count: Number,
    product_name: String,
    category: String,
    comment:[String]
    

});
export {homeschema}