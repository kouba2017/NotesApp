const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    firstName : {
        type:String,
        required:[true, "First Name required"]
    },
    lastName : {
        type:String,
        required:[true, "Last Name required"]
    },
    email: {
        type : String,
        required : [true, "*** Email is required"],
        unique: true,
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    password : {
        type: String,
        required : [true, "Password required "],
    }
},{timestamps:true})
    UserSchema.virtual('confirmPassword')
        .get(()=> this._confirmPassword)
        .set(value => this._confirmPassword = value);
    UserSchema.pre('validate', function(next){
        console.log("Validaion Hook ");
        if(this.password !== this.confirmPassword || this.password==""){
            this.invalidate('confirmPassword', "Password must match")
        }
        next()
    })
    UserSchema.pre('save', async function(next){
        console.log("Pre Save Hook");
        try{
            const hashedPassword = await bcrypt.hash(this.password,10)
            this.password = hashedPassword;
            console.log("Hashed Password  == "+ hashedPassword);
        }catch (error){
            console.log(error);
        }
        next();
    })
    const User  = mongoose.model('user', UserSchema);
    module.exports = User;
