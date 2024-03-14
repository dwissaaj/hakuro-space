import { ID } from "@/app/lib/server/appwrite";
import { account } from "@/app/utils/client/appwrite";
import { NextResponse } from "next/server";

export async function POST(request: Request) {

    const data = await request.json()
    try {
        const sdkAccound = await account.create(
            ID.unique(),
            data.email as string,
            data.password as string,
            data.name as string
        )
        console.log(sdkAccound)
        return NextResponse.json({status: 200}, {statusText: 'Success at register'})
    }
    catch(error) {
        console.log('Error at register user', error)
        return NextResponse.json({message: 'Error at register'}, {status: 400})
    }
    
}