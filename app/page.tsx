import { Metadata } from "next";

import Landing from "./(home)/Landing";

export const metadata: Metadata = {
  title: "Sakura Hakuro ",
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
    { name: "Dwis Aji", url: "https://Hakuro.space" },
  ],
  creator: "Dwis Aji",
  publisher: "Dwis Aji",
};
export default function App() {
  return (
    <div className="">
      <Landing />
    </div>
  );
}
