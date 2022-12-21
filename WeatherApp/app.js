const express=require("express");
const { dirname } = require("path");
const path=require("path");
const app = express();
const fs=require("fs")
const port=80;


//Express related stuff
app.use('/static', express.static('static')) // for serving static files
app.use(express.urlencoded())

//PUG related stuff
app.set('view engine','pug')//set the template engine as pug
app.set('views', path.join(__dirname,'views'))  //set the view directory //some uses template


app.get('/' ,(req,res)=>{
    res.status(200).render('home.pug')
})


app.listen(port,()=>{
    console.log(`application running on ${port}`);
})