import { fetchCamp } from "@/utils/actions";
import { NextResponse } from "next/server";

export const GET =  async (req:NextResponse)=>{
    const { searchParams } = new URL(req.url);
    const search = searchParams.get('search');
     console.log(search);
    const listcamp = await fetchCamp();
    // returm Response.json({listcamp})
    return NextResponse.redirect(new URL('/',req.url))
}