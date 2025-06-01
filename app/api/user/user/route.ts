import { NextResponse } from "next/server";
import { Client, Account } from "node-appwrite";
import { cookies } from "next/headers";
export async function GET() {
  const cookieStore = cookies();
  const session = cookieStore.get("your-presence-here")?.value;

  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_SET_END_POINT as string)
    .setProject(process.env.NEXT_PUBLIC_SET_PROJECT as string)
    .setSession(`${session}`);

  const account = new Account(client);
  try {
    const userCurrent = await account.get();
    let userData = {
      id: userCurrent.$id,
      email: userCurrent.email,
      created: userCurrent.$createdAt,
      verification: userCurrent.emailVerification,
    };
    return NextResponse.json(userData);
  } catch (err) {
    console.log("Error at fetching user", err);
    return NextResponse.json(
      { status: 401 },
      { statusText: "Error at fetching user" },
    );
  }
}
