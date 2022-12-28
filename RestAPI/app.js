const express=require("express");
const app=express();
const PORT=process.env.PORT || 5000;
// const bodyParser = require("body-parser")

const products_routes=require("./routes/products")

app.get('/',(req,res)=>{
    res.send("Hi i am live")
})


// middlewares
app.use("/", products_routes);

app.listen(PORT,()=>{
    console.log(`application running on ${PORT}`);
})