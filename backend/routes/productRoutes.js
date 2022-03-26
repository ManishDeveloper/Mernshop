const router = require("express").Router();

const {newProduct,getProducts, getSingleProduct, updateProducts, deleteProduct} = require("../controllers/productController");


//Create New Product
router.route('/product/new').post(newProduct);

//Get All Products
router.route('/products').get(getProducts);

//Get Single Product
router.route('/product/:id').get(getSingleProduct);

//Update Product
router.route('/product/:id').put(updateProducts);

//Delete Product
router.route('/product/:id').delete(deleteProduct);






module.exports = router;