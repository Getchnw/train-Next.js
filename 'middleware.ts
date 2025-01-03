import { NextResponse } from "next/server"

export const middleware = async (req:Request) => {
    console.log('middleware')
    return NextResponse.redirect(new URL("/",req.url))
};

export const config = {
    matcher: ['/about/:path*' , '/camp/:path*']
}