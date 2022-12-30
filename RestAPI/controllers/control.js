const Product = require("../models/product")

const getAllProducts =async (req,res)=>{

    const { category, price , sort ,select} =req.query;
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
        let sortFix = sort.split(",").join(" ");
        Apidata=Apidata.sort(sortFix)
    }

    if(select){
        // let selectFix = select.replace(","," ");
        let selectFix = select.split(",").join(" ");
        Apidata=Apidata.select(selectFix)
    }

    let page =Number(req.query.page) ||1;
    let limit= Number(req.query.limit) || 3;

    let skip =(page -1)*limit;

    Apidata =Apidata.skip(skip).limit(limit);

    console.log(queryobject)

const myData = await Apidata;
console.log("my data is...." + myData)
res.status(200).json({myData ,nbHits: myData.length });
};

const getAllProductsTesting =async (req,res)=>{
    const myData = await Product.find(req.query).sort("-id");

    res.status(200).json({myData});
};

module.exports={getAllProducts,getAllProductsTesting};