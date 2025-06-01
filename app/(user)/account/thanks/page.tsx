import React from "react";
import CallBackVerify from "./verifyC";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thanks From Hakuro ",
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

export default function page() {
  return <CallBackVerify />;
}
