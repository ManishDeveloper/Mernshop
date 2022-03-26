const Product = require("../models/productModel");
const products = require("../data/products.json");
//db
require("../config/DB");


const seedProducts = async () => {
    try {
        await Product.deleteMany();
        console.log('Products are deleted');

        await Product.insertMany(products);
        console.log('All Product are added.');

        process.exit();
        
    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

seedProducts();
