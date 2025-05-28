// src/lib/server/appwrite.js

import { Client, Account, Databases } from "node-appwrite";
import { cookies } from "next/headers";
export { ID } from "node-appwrite";

export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_SET_END_POINT)
    .setProject(process.env.NEXT_PUBLIC_SET_PROJECT);

  const session = cookies().get("your-presence-here");
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

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_SET_END_POINT)
    .setProject(process.env.NEXT_PUBLIC_SET_PROJECT)
    .setKey(process.env.NEXT_APPWRITE_KEY);

  return {
    get account() {
      return new Account(client);
    },
  };
}

export async function SessionController({ cookiesPresence }) {
  const cookiesSession = cookies().get("your-presence-here");
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_SET_END_POINT)
    .setProject(process.env.NEXT_PUBLIC_SET_PROJECT)
    .setSession(`${cookiesPresence}`);

  return new Account(client);
}
// DB Server

export async function databaseAdmin() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_SET_END_POINT)
    .setProject(process.env.NEXT_PUBLIC_SET_PROJECT)
    .setKey(process.env.NEXT_APPWRITE_KEY);
  const database = new Databases(client);

  return {
    database,
  };
}

// session handler user
export async function sessionHandler() {
  const cookiesSession = cookies().get("your-presence-here");
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_SET_END_POINT)
    .setProject(process.env.NEXT_PUBLIC_SET_PROJECT)
    .setSession(`${cookiesSession}`);

  const sessions = new Account(client);
  return {
    sessions,
  };
}

export async function AccountHandler() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_SET_END_POINT)
    .setProject(process.env.NEXT_PUBLIC_SET_PROJECT);

  const accountHandler = new Account(client);

  return {
    accountHandler,
  };
}

export async function DatabaseHandler() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_SET_END_POINT)
    .setProject(process.env.NEXT_PUBLIC_SET_PROJECT)
    .setKey(process.env.NEXT_APPWRITE_KEY);
  const databaseHandle = new Databases(client);

  return {
    databaseHandle,
  };
}
