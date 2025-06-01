import React from "react";
import { Metadata } from "next";
import {
  Card,
  CardFooter,
  Image,
  Button,
  CardHeader,
  CardBody,
} from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import CardBlog from "./cardblog";
import BlogCard from "./blogCardSoon";
import BlogCardSoon from "./blogCardSoon";
import BlogCardReady from "./blogCardReady";
export const metadata: Metadata = {
  title: "Blogs Hakuro",
  description: "Hakuro Tech Dwi Aji Personal Website",
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
    <div className="w-screen font-raleway ">
      <div className="w-full p-2  flex flex-col items-center justify-center ">
        <div className="">
          <div className="w-full h-full  text-center">
            <p className="text-xl lg:text-4xl ">Topic (On Development)</p>
          </div>
          <div className="w-full grid grid-cols-12 gap-4 p-2">
            <BlogCardReady
              link="/blog/coding"
              src="/blog/coding.jpg"
              imageAlt="Coding Image"
              headline="CODING"
              caption="Not a CS graduate but I love this."
            />
            <BlogCardReady
              caption="Artistic side of me."
              headline="PHOTOGRAPHY"
              link="/blog/photography"
              src="/blog/photography.jpg"
              imageAlt="Camera"
            />

            <BlogCard
              src="/blog/japan.jpg"
              imageAlt="Japan Castle"
              tag="もうすぐ"
              headline="Learn Japanese, 坂道グループ大好きです"
            />
            <BlogCard
              src="/blog/data.jpg"
              imageAlt="data image"
              headline="Text Processing, Machine Learning and Report"
              tag="Soon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
