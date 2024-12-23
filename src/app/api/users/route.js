import mongoose from "mongoose";
import { NextResponse } from "next/server";
import {MONGO_URL} from "@/lib/db";
import {User} from "@/lib/model/user"

export async function GET() {
    let data = [];
    let success =true;
    try{
        await mongoose.connect(MONGO_URL);
        data =await User.find();
    }
    catch (error){
            data={result:"error"}
            success=false
            console.error("issue",error);
    }
    return NextResponse.json({result:data,success})
}

export async function POST(req) {
    const payload = await req.json();
    await mongoose.connect(MONGO_URL);
    let user = new User(payload);
    const result = await user.save();
    return NextResponse.json({result,success:true})
}