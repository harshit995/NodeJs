const getAllProducts =async (req,res)=>{
res.status(200).json({msg:"i am getting All products"});
};

const getAllProductsTesting =async (req,res)=>{
res.status(200).json({msg:"i am getting Allproducts Testing"});
};

module.exports={getAllProducts,getAllProductsTesting};