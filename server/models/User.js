import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password_hash:{type:String,required:true},
    createdAt:{type:Date, default:Date.now},
})

const profile = new mongoose.Schema({
    fullName:{type:String, required:true},
    email:{type:String, required:true},
    phoneNumber:String,
    address:String,
    bio:String,
});



export default mongoose.model("User", userSchema,profile)