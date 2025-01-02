import mongoose from "mongoose";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { Admin } from "../../../lib/model/admin";
import { MONGO_URL } from "@/lib/db";

// Persistent MongoDB Connection
if (!mongoose.connection.readyState) {
  mongoose.connect(MONGO_URL).catch((err) => console.error("MongoDB Connection Error:", err));
}

export async function GET() {
  try {
    const data = await Admin.find();
    return NextResponse.json({ result: data, success: true });
  } catch (error) {
    console.error("Error fetching admin data:", error);
    return NextResponse.json({ result: "error", success: false, error: error.message });
  }
}


export async function POST(req) {
  try {
      const { email, password } = await req.json();
      await mongoose.connect(MONGO_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });

      // Find admin by email
      const user = await Admin.findOne({ email });
      if (!user) {
          console.error("User not found for email:", email);
          return NextResponse.json({ success: false, error: "Invalid email or password" });
      }

      // Match the password (assuming plain text here; use hashing in production)
      if (user.password !== password) {
          console.error("Invalid password for user:", email);
          return NextResponse.json({ success: false, error: "Invalid email or password" });
      }

      console.log("Login successful for user:", user._id);
      return NextResponse.json({ success: true, message: "Login successful", userId: user._id });
  } catch (error) {
      console.error("Error during authentication:", error);
      return NextResponse.json({ success: false, error: "An error occurred during login" });
  }
}