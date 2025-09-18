import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(){
    const headerList = await headers();

    const originHeader = headerList.get("origin");
    const forwarded    = headerList.get("x-forwarded-host")

    console.log("originHeader", originHeader);  
    console.log("forwarded", forwarded);
    
    return NextResponse.json({originHeader, forwarded, headerList})
}

export async function GET() {
    const headerList = await headers();

    const originHeader = headerList.get("origin");
    const forwarded    = headerList.get("x-forwarded-host")

    console.log("originHeader", originHeader);  
    console.log("forwarded", forwarded);
    

    return NextResponse.json({originHeader, forwarded, headerList})
}
