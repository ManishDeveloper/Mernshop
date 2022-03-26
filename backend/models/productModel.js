const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please enter product name'],
        trim:true,
        maxlength:[100,'Product name cannot exceed 100 Characters']
    },
    price:{
        type:Number,
        required:[true,'Please enter product price'],
        maxlength:[5,'Product price cannot exceed 5 Characters'],
        default:0.0
    },
    description:{
        type:String,
        required:[true,'Please enter product description']
    },
    ratings:{
        type:Number,
        default:0
    },
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                reqiured:true
            }
        }
    ],
    category:{
        type:String,
        required:[true,'Please select product category'],
        enum:{
            values:[
                'Electronics',
                'Cameras',
                'Laptops',
                'Accessories',
                'Headphones',
                'Food',
                "Books",
                'Clothes/Shoes',
                'Beauty/Health',
                'Sports',
                'Outdoor',
                'Home'
            ],
            message: 'Please select correct category for product'
        }
    },
    seller:{
        type:String,
        required:[true,'Please enter product seller']
    },
    stock:{
        type:Number,
        required:[true,'Please enter product stock'],
        maxlength:[5,'Product stock cannot exceed 5 Characters']
    },
    numofReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ]
},{timestamps:true});

module.exports = mongoose.model('products',productSchema);