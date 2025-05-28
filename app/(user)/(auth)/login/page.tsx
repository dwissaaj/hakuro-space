import React from "react";
import LoginClient from "./LoginC";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getLoggedInUser } from "@/app/lib/auth/loginState";
import WelcomeSushi from "@/app/components/rive/welcomeSushi";
export const metadata: Metadata = {
  title: "Login | Hakuro ",
  description: "Hakuro Tech Dwi Aji Personal Website",
  applicationName: "Hakuro Sakura App ",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Dwis Aji",
    "Front End Developer",
    "indonesia",
    "Japan",
    "Data Analyst",
    "UI/UX Designer",
  ],
  authors: [
    { name: "Dwis Aji" },
    { name: "Dwis Aji", url: "https://hakuro.tech" },
  ],
  creator: "Dwis Aji",
  publisher: "Dwis Aji",
};

export default async function Page() {
  const user = await getLoggedInUser();

  if (user) redirect("/account");

  return (
    <div className="minh-screen min-w-screen">
      <div className="w-full h-full gap-3 flex flex-col lg:flex-row">
        <div className="w-full flex justify-center items-center">
          <LoginClient />
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-[500px] h-[500px] w-[750px] h-[750px]">
            <WelcomeSushi />
          </div>
        </div>
      </div>
    </div>
  );
}
