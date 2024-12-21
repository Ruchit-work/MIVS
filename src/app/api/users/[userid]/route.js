import mongoose from "mongoose";
import { NextResponse } from "next/server";
import {User} from "@/lib/model/user"
import {MONGO_URL} from "@/lib/db";

export async function PUT(request, content){
    const userID=content.params.userid;
    const filter={_id:userID}
    const payload = await request.json()
    console.log(filter);
    await mongoose.connect(MONGO_URL);
    const result=await User.findOneAndUpdate(filter,payload)
    return NextResponse.json({result,successs:true})
}

export async function GET(request, content){
    const userID=content.params.userid;
    const recored={_id:userID}

    await mongoose.connect(MONGO_URL);
    const result=await User.findById(recored)
    return NextResponse.json({result,successs:true})
}
export async function DELETE(request,content){
    const userID= content.params.userid;
    const recored={_id:userID}
    await mongoose.connect(MONGO_URL);
    const result=await User.deleteOne(recored);
    return NextResponse.json({result,success:true})
}
