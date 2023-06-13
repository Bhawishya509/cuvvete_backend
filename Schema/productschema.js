
import mongoose from "mongoose";
// const pass = "Bhawishya11";
// const collection_name = "ecom";
// const mongo = `mongodb+srv://Bhawishya:${pass}@cluster0.ehz40xr.mongodb.net/${collection_name}?retryWrites=true&w=majority`;
// mongoose.connect(mongo, {
//   useUnifiedTopology: true,
//   useNewUrlParser: true, 
// });

const productschema = new mongoose.Schema({
    name: String,
    category: String,
    imgurl: String,
    voting_count: Number,
    product_name: String,
    desc: String,
    comment:[String]

});
export {productschema}