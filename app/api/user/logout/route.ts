
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { Client, Account } from "node-appwrite";
export async function DELETE() {

    const cookieStore = cookies()
    const session = cookieStore.get('your-presence-here')?.value

    const client = new Client()
                .setEndpoint(process.env.NEXT_PUBLIC_SET_END_POINT as string)
                .setProject(process.env.NEXT_PUBLIC_SET_PROJECT as string)
                .setSession(`${session}`);

    const account = new Account(client);
    try {
        cookieStore.delete('your-presence-here')
        const logOut = await account.deleteSession('current')
        if(logOut) {
            redirect('/')
        }
        console.log("user log out", logOut)
        return NextResponse.json({status: 200})
    }
    catch(err) {
        console.log("Error when user logout",err)
        return NextResponse.json({status: 400}, {statusText: 'Error at Logout'})
    }
}