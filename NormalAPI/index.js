const express=require("express");
const { dirname } = require("path");
const path=require("path");
const app = express();
const fs=require("fs")
const port=80;

const data =fs.readFileSync(`${__dirname}/data.json`,"utf-8")
const objData=JSON.parse(data);

//Express Related Stuff
app.use('/static',express.static('static'))
app.use(express.urlencoded())


//Endpoint
app.get("/",(req,res)=>{
res.status(200).send("Creating our own Api....")
})

app.get("/api",(req,res)=>{
// res.writeHead(200,{"content-type":"application/json"});
// res.status(200).send(data)
res.status(200).send(objData[2].name)
})

app.listen(port,()=>{
    console.log(`application running on ${port}`);
})