import { sessionHandler } from "@/app/lib/server/appwrite";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const account = await sessionHandler()
    const data = await request.json()
    try {
        const verify = await account.sessions.updateVerification(
            data.userId as string,
            data.secret as string
        )
        console.log(verify)
        if(verify) {
            return NextResponse.json({status: 200}, {statusText: 'Success at Verifying User'})
        }
    }
    catch(error: any){
        console.log("Error ar thanks page", error)
        console.log(error['response'].message)
        return NextResponse.json({status: error['code'] as number}, {statusText: error['response'].message})
    }
}