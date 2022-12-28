const Product = require("../models/product")

const getAllProducts =async (req,res)=>{

    const { category, price , sort } =req.query;
    const queryobject= {};
    
    if(category){
        // queryobject.category=category;
        queryobject.category={$regex : category ,  $options:"i"};
        // console.log(queryobject.category)
    }
    if(price){
        queryobject.price=price;
        // console.log(queryobject.price)
    }

    let Apidata= Product.find(queryobject)

    if(sort){
        let sortFix = sort.replace(","," ");
        Apidata=Apidata.sort(sortFix)
    }
    console.log(queryobject)

const myData = await Apidata;

res.status(200).json({myData});
};

const getAllProductsTesting =async (req,res)=>{
    const myData = await Product.find(req.query).sort("-id");

    res.status(200).json({myData});
};

module.exports={getAllProducts,getAllProductsTesting};