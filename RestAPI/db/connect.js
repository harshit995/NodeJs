// const mongoose= require("mongoose");

// uri="mongodb+srv://Harshit:9958328356@restapi.hdgzce4.mongodb.net/RestAPI?retryWrites=true&w=majority"

// const connectDB = () =>{
//     return mongoose.connect(uri,options,callback)
// }

const mongoose = require('mongoose');

 const connectDb = async (uri)=> {
  await mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology: true});
  console.log("Database is connected..")
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}


module.exports =connectDb;