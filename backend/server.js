const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");

//envirorment variable
require("dotenv").config();

//DB connect
require("./config/DB");

//Body Parser middleware
app.use(express.json());

//Import all routes
app.use('/api/v1/product',require("./routes/productRoutes"));


//Middleware for handler error
app.use(errorMiddleware);


//Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server is running on PORT: ${PORT} in ${process.env.NODE_ENV} mode`));