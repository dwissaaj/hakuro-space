import { NextResponse } from "next/server";
import { Client, Account } from "node-appwrite";
import { cookies } from 'next/headers'
export async function POST() {
    const cookieStore = cookies()
    const session = cookieStore.get('your-presence-here')?.value
    const client = new Client()
                .setEndpoint(process.env.NEXT_PUBLIC_SET_END_POINT as string)
                .setProject(process.env.NEXT_PUBLIC_SET_PROJECT as string)
                .setSession(`${session}`);

    const account = new Account(client);
    try {
        
        const verify = await account.createVerification("http://localhost:3000/account/thanks")
        console.log("verify", verify)
        return NextResponse.json({verify})
    }
    catch(error) {
        console.log('Error at Verify Serverless Function')
        return NextResponse.json({message: error}, {status: 400})
    }
}