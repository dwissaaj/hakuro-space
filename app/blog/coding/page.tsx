import React from "react";
import CodingCard from "./codingcard";
import CodingCardSoon from "./codingcardsoon";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Coding Category",
  description:
    "Hakuro Tech Dwi Aji Personal Website Blog Content Coding Category",
  applicationName: "Hakuro Sakura App ",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Dwis Aji",
    "Front End Developer",
    "Indonesia",
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
  return (
    <div className="w-screen font-raleway mt-8 flex items-center justify-center">
      <div className="w-full lg:w-3/4 flex flex-col justify-center items-center">
        <p className="text-white uppercase text-center text-xl w-full bg-red-500">
          Still on Development!!!
        </p>
        <div className="w-full gap-4 grid grid-cols-12 grid-rows-2 p-2 items-center justify-center">
          <CodingCardSoon
            subtitle="Amazing Framework for your app UI"
            buttonTitle="Soon"
            style="col-span-12 lg:col-span-6 h-[300px] underlined"
            source="/blog/coding/graphic designer.jpg"
            altImg="next ui Logo"
            headline="Next UI A New Hero"
          />

          <CodingCard
            styleHeadline="text-white"
            styleSubHeadline="text-white"
            style="col-span-12 lg:col-span-6 h-[300px]"
            source="/blog/coding/designer.jpg"
            altImg="designer"
            headline="framer"
            subHeadline="amazing website builder for company & agency"
            link="/"
          />

          <CodingCard
            styleHeadline=" text-white"
            styleSubHeadline="text-white "
            style="col-span-12 lg:col-span-4 h-[300px] text-black"
            source="/blog/coding/macbook.jpg"
            altImg="macbook"
            headline="rive app"
            subHeadline="Add identity to your app"
            link="/"
          />

          <CodingCard
            styleHeadline=" text-white"
            styleSubHeadline="text-white "
            style="col-span-12 lg:col-span-4 h-[300px] text-black"
            source="/blog/coding/server.jpg"
            altImg="server pics"
            headline="Appwrite vs Supabase"
            subHeadline="Which one for your app?"
            link="/"
          />

          <CodingCardSoon
            subtitle="Which one to choose?"
            buttonTitle="Soon"
            style="col-span-12 lg:col-span-4 h-[300px] text-black"
            source="/blog/coding/coding.jpg"
            altImg="coding pics"
            headline="Next, Nuxt or Sveltekit?"
          />
        </div>
      </div>
    </div>
  );
}
