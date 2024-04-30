// src/lib/server/appwrite.js

import { Client, Account } from "node-appwrite";
import { cookies } from "next/headers"
export {ID} from 'node-appwrite'

export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_SET_END_POINT)
    .setProject(process.env.NEXT_PUBLIC_SET_PROJECT)
    
  const session = cookies().get("your-presence-here")
  if (!session || !session.value) {
    throw new Error("No session");
  }

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
  };
}





// Admin client, used to create new accounts
export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_SET_END_POINT)
    .setProject(process.env.NEXT_PUBLIC_SET_PROJECT)
    .setKey(process.env.NEXT_PUBLIC_SET_KEY); 

  return {
    get account() {
      return new Account(client);
    },
  };
}

// session client
