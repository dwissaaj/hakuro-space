import { ID, createAdminClient } from "@/app/lib/server/appwrite";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
 
    const data = await request.json()
    const {account} = await  createAdminClient()
    try {
        const registration = await account.create(
            ID.unique(),
            data.email as string,
            data.password as string,
            data.name as string
        )
        const session = await account.createEmailPasswordSession(data.email as string,  data.password as string)
        console.log(session)
        cookies().set("your-presence-here", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        })
        console.log(registration)
        return NextResponse.json({status: 200}, {statusText: 'Success at Registration You can Login Now'})
        
    }
    catch(error) {
        console.log('Error at register user', error)
        return NextResponse.json({message: 'Error at registration'}, {status: 400})
    }
    
}