const router = require("express").Router();

const {newProduct,getProducts, getSingleProduct, updateProducts, deleteProduct} = require("../controllers/productController");


//Add New Product ---> /api/v1/product/add
router.post('/add',newProduct);

//Get All Products ---> /api/v1/product/get
router.get('/get',getProducts);

//Get Single Product
router.get('/get/:id',getSingleProduct);

//Update Product
router.put('/update/:id',updateProducts);

//Delete Product
router.delete('/delete/:id',deleteProduct);






module.exports = router;