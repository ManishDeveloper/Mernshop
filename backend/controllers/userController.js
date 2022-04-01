const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/errorHandler");


//@route    POST /api/v1/user/register
//@desc     Add New User
//@access   Private
exports.registerUser = asyncHandler(async (req, res, next)=> {
    

});