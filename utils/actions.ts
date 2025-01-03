'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigate"
import { title } from "process"

export const createCamps = async (prevState:any,FormData:FormData) => {
    await new Promise((resolve) => setInterval(resolve,1000))
    const rawData = Object.fromEntries(FormData)
    console.log(rawData)
    revalidatePath('/camp') //reหาที่ใส่ไว้
    //redirect('/') //หลังจากsubmit จะไปหน้าที่ใส่pathไว้
    return 'crate camp success'
}

export const fetchCamp = async () => {
    const camp = [
        {id : 1 , title : 'กรุงเทพ', location : 'กรุงเทพ'},
        {id : 2 , title : 'เชียงใหม่', location : 'เชียงใหม่'},
    ]
    return camp
}