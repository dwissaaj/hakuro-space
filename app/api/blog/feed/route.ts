import { DatabaseHandler } from "@/app/lib/server/appwrite";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const result = await (await DatabaseHandler()).databaseHandle.listDocuments(
            process.env.NEXT_DATABASE_ID as string,
            process.env.NEXT_DATABASE_COLLECTION_FEEDBLOG as string,
            
        )
        return NextResponse.json(result)
    } catch (error) {
        console.log(error)
        return NextResponse.json("Error at fetching blog")
    }
    
}