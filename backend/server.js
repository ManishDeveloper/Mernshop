const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
//envirorment variable
require("dotenv").config();


//Handle Uncaught exceptions
process.on('uncaughtException', err=>{
    console.log(`Error: ${err.stack}`);
    console.log(`server shutting down due to uncaught exceptions`);
    process.exit(1);
});


//DB connect
require("./config/DB");

//Body Parser middleware
app.use(express.json());

//Import all routes
app.use('/api/v1/product',require("./routes/productRoutes"));
app.use('/api/v1/user', require("./routes/userRoutes"));

//Middleware for handler error
app.use(errorMiddleware);


//Server Start
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT,()=>console.log(`Server is running on PORT: ${PORT} in ${process.env.NODE_ENV} mode`));

//Handle Unhandle Promise Rejection
process.on('unhandledRejection', err => {
    console.log(`Error: ${err.stack}`);
    console.log(`Shutting down the server due to Unhandle Promise Rejection`);
    server.close(()=>{
        process.exit(1);
    })
});