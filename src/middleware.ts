import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(req:NextRequest){
    // return NextResponse.redirect(new URL("/",req.url))

    const response = NextResponse.next();
    const themePreference = req.cookies.get("theme")
    if(!themePreference){
        response.cookies.set("theme","dark")
    }
    return response
}

export const config = {
    matcher : "/profile",
}