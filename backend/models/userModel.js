const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please enter your name'],
        trim:true,
        maxlength:[30,'Name cannot be exceed 30 Characters']
    },
    email:{
        type:String,
        required:[true,'Please enter your email'],
        unique:true,
        validate:[validator.isEmail,'Please enter valid email address']
    },
    password:{
        type:String,
        required:[true,'Please enter your password'],
        minLength:[6,'Your password must be longer then 6 characters'],
        select:false
    },
    avatar:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    role:{
        type:String,
        default:'user'
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date

},{timestamps:true});



//Encrypting Password before saving user
userSchema.pre('save', async function(next){

    if(!this.isModified('password')){
        next();
    }

    this.password = await bcrypt.hash(this.password, 10);
});

//Compare user Password
userSchema.methods.comparePassword = async function(enterPassword){
    
    return await bcrypt.compare(enterPassword, this.password);

}

//Return JWT Token
userSchema.methods.getJwtToken = async function(){
    
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
        expiresIn:process.env.JWT_EXPIRES_TIME
    });
    
}

module.exports = mongoose.model('users',userSchema);