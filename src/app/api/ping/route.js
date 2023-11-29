import { NextResponse } from "next/server"
import { connectDB } from "@/utils/moongose-cn";
export function GET(){
    connectDB()
    return NextResponse.json({
        message:'hello world',
    });
}