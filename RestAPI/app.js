require("dotenv").config();
const express=require("express");
const app=express();
const PORT=process.env.PORT
const connectDb= require("./db/connect")
const bodyParser = require("body-parser")


const products_routes=require("./routes/products")



app.use(bodyParser.urlencoded({ extended: true }));
app.get('/',(req,res)=>{
    res.send("Hi i am live")
})


// middlewares
app.use("/api/products", products_routes);


const start = async ()=>{
    try {
        await connectDb(process.env.Mongo_URL);
        app.listen(PORT,()=>{
            console.log(`application running on ${PORT}`);
        })
    } catch (error) {
        console.log("error")
    }
}

start();
