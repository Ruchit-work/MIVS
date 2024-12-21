import mongoose from "mongoose";

const userModel= new mongoose.Schema({
    name:String,
    age:String,
    address:String,
    phone:String,
    email:String,
});
export const User =mongoose.models.users ||  mongoose.model("users",userModel);