const connectDb=require("./db/connect");
const Product =require("./models/product")
require("dotenv").config();

const ProductJson =require("./products.json");

const start = async()=>{
try {
    await connectDb(process.env.Mongo_URL)
    await Product.deleteMany();
    await Product.create(ProductJson)
     console.log("Success...")
} catch (error) {
    console.log("ERROR..")
}
}


start();