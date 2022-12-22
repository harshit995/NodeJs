const express=require("express");
const { dirname } = require("path");
const path=require("path");
const app = express();
const fs=require("fs");
const { urlencoded } = require("body-parser");
const port=80;

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

app.post("/base",async (req,res)=>{
    
})

app.listen(port,()=>{
    console.log(`application running on ${port}`);
})