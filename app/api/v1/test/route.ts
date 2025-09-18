import { NextRequest, NextResponse } from "next/server";

export async function PUT(req:NextRequest){
    const headers = req.headers;

    const body = await req.json();
    console.log("Body : ", body);

    const origin = headers.get("origin");
    // @ts-ignore
    const origin2 = headers.origin;
    const forwarded = headers.get("x-forwarded-host")
    const referrer = headers.get("referrer");

    console.log("origin", origin);  
    console.log("origin2", origin2);
    console.log("forwarded", forwarded);
    console.log("referrer", referrer);

    return NextResponse.json({origin, forwarded, headers})
}

export async function GET(req:NextRequest) {
    const headers = req.headers;

    const origin = headers.get("origin");
    const forwarded = headers.get("x-forwarded-host")
    const referrer = headers.get("referrer");

    console.log("origin", origin);  
    console.log("forwarded", forwarded);
    console.log("referrer", referrer);

    return NextResponse.json({origin, forwarded, headers})
}
