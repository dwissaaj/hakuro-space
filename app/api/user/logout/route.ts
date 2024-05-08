
import { createAdminClient } from "@/app/lib/server/appwrite";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function DELETE() {
    const {account} = await  createAdminClient()
    try {
        const logOut = await account.deleteSession('current')
        
        if(logOut) {
            redirect('/')
        }
        return NextResponse.json({status: 200}, {statusText: 'Redirect'})
    }
    catch(err) {
        console.log("Error when user logout")
        return NextResponse.json({status: 400}, {statusText: 'Error at Logout'})
    }
}