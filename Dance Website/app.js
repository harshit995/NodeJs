const express=require("express")
const path=require("path")
const fs=require("fs")
const port=8000;
const bodyparser =require("body-parser")
const app=express();

const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
 await mongoose.connect('mongodb://localhost:27017/contactDance');
 console.log("we are connected.....") 
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

//Define Mongoose Schema
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
  });

  const Contact = mongoose.model('Contact', contactSchema);

//Express Related Stuff
app.use('/static',express.static('static'))
app.use(express.urlencoded())

//pug Related Stuff
app.set('view engine','pug') 
app.set('views',path.join(__dirname,'views')) 

//Endpoints
app.get('/',(req,res)=>{
    const params={}
    res.status(200).render('home.pug',)
})

app.get('/contact',(req,res)=>{
    const params={}
    res.status(200).render('contact.pug')
})
app.post('/contact',(req,res)=>{
   var myData = new Contact(req.body)
   myData.save().then(()=>{
    res.send("This is saved to database...")
   }).catch(()=>{
    res.status(400).send("ITEM WAS NOT SAVED...")
   })
    // res.status(200).render('contact.pug')
})

app.listen(port,()=>{
    console.log(`application running on ${port}`);
})