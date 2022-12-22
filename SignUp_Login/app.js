const express=require("express");
const { dirname } = require("path");
const path=require("path");
const app = express();
const fs=require("fs");
const { urlencoded } = require("body-parser");
const port=80;
const collection=require("./mongodb")

//Express Related stuff
app.use('/static',express.static('static'))
app.use(express.urlencoded())

//pug related stuff

app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))


//endpoint
app.get("/",(req,res)=>{
    res.status(200).render("login.pug")
})

app.get("/signUp",(req,res)=>{
    res.status(200).render("signUp.pug")
})


app.post("/signUp",async (req,res)=>{

const data={
    name:req.body.name,
    password:req.body.password
}

await collection.insertMany([data])
res.render("base.pug")
})

app.post("/login",async (req,res)=>{
 try{
    const check=await collection.findOne({name:req.body.name})
    if(check.password===req.body.password){
        res.status(200).render("base.pug")
    }
    else{
        res.send("wrong password...")
    }
 }
 catch{
    res.send("wrong details....")
 }

})

app.listen(port,()=>{
    console.log(`application running on ${port}`);
})