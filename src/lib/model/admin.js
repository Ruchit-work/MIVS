import mongoose from "mongoose";

const adminModel= new mongoose.Schema({
   email:String,
   password:String
});
export const Admin =mongoose.models.admins ||  mongoose.model("admins",adminModel);