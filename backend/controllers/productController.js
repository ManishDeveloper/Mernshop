const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const asyncHandler = require("express-async-handler");

//@route    POST /api/v1/product/new
//@desc     Add New Product
//@access   Private
exports.newProduct = asyncHandler(
    async (req, res, next) => {
    
    const product = await Product.create(req.body);

    return res.status(201).json({
        success:true,
        product
    });
}); 


//@route    GET /api/v1/products
//@desc     Get All Products
//@access   Private
exports.getProducts = asyncHandler(async (req, res, next) => {
    
    const products = await Product.find();

    return res.status(200).json({
        success:true,
        count:products.length,
        products
    });
}); 


//@route    GET /api/v1/product/:id
//@desc     Get Single Product
//@access   Private
exports.getSingleProduct = asyncHandler(async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler('Product not found', 404));
    }

    return res.status(200).json({
        success:true,
        product
    });
}); 



//@route    PUT /api/v1/product/:id
//@desc     Update Product
//@access   Private
exports.updateProducts = asyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if(!product){
        return res.status(404).json({
            success:false,
            message:'Product not found!'
        })
    }

    const updateProduct  = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators: true});

    return res.status(200).json({
        success: true,
        updateProduct
    });    

}); 


//@route    DELETE /api/v1/product/:id
//@desc     Delete Product
//@access   Private
exports.deleteProduct = asyncHandler(async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if(!product){
        return res.status(404).json({
            success:false,
            message:'Product not found!'
        })
    }

    await product.deleteOne();

    return res.status(200).json({
        success:true,
        message:'Delete Product'
    });

});
