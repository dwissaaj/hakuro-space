import { ID, createAdminClient } from "@/app/lib/server/appwrite";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { NextResponse } from "next/server";

export async function POST(request: Request) {

    const data = await request.json()
    const {account} = await  createAdminClient()
    try {
        const session = await account.createEmailPasswordSession(
            data.email as string,
            data.password as string)
            
        cookies().set("your-presence-here", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        })
        console.log("Success at login")
        return NextResponse.json({message: 'redirec to account'} , {status: 200})
        
    }
    catch(error : any) {
        let numberError = error['code'] as number
        console.log('error', error)
        return NextResponse.json({message: `${error['response']}`},
         {status: numberError})
    }   
    
}