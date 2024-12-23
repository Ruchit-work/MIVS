import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Admin } from "../../../lib/model/admin";
import { MONGO_URL } from "@/lib/db";


// GET Method: Retrieve all admin data
export async function GET() {
  let data = [];
  let success = true;
  try {
    await mongoose.connect(MONGO_URL);
    data = await Admin.find();
  } catch (error) {
    console.error("Error fetching admin data:", error);
    data = { result: "error" };
    success = false;
  }
  return NextResponse.json({ result: data, success });
}

export async function POST(req) {
    try {
      const {email,password } = await req.json();
      await mongoose.connect(MONGO_URL);
  
      const user = await Admin.findOne({ email });
      if (!user) {
        console.error("User not found for email:", email);
        return NextResponse.json({ error: "Invalid email " });
      }
  
      // Compare the entered password with the stored password directly (plain text)
    if (user.password !== password) {
        return NextResponse.json({ error: "Invalid password" });
      }
  
      return NextResponse.json({ message: "Login successful", success: true, userId: user._id });
    } catch (error) {
      console.error("Error during authentication:", error);
      return NextResponse.json({ error: "An error occurred", details: error.message });
    }
  }
