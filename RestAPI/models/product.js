const mongoose=require("mongoose");

const ProductSchema =new mongoose.Schema({
    id:{
         type:Number
    },
    title: {
        type:String,
        required:true
    },
    price:{
        type: Number,
        required:[true , "price must be provided"]
    },
    description:{
        type: String,
        
    },
    category:{
        type: String,
        enum:{
            values :["electronics", "men's clothing","jewelery","women's clothing"],
            message:`{VALUE} is not supported`,
   
        }
    },
    image:{
        // type:Image,
        type:String
    },
    rating:{ 
        rate :{
            type:Number,
            default:4.9
        } ,
        count :{
            type:Number,
            default:130

    }
}
})

module.exports=mongoose.model("Product",ProductSchema)