const mongoose = require("mongoose");
require("dotenv").config();


mongoose.connect(process.env.MONGO_URI)
.then(conn=>console.log(`DB Connected on ${conn.connection.host}`))
.catch(err=>console.log(err));