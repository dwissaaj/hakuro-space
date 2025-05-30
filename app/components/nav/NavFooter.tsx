import React from "react";
import { Divider } from "@nextui-org/react";
import Link from "next/link";

export default function NavFooter() {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <div className="w-full flex justify-center my-4 ">
      <div className="flex flex-col">
        <div>
          <p className="text-xl">Hakuro Tech</p>
        </div>
        <div className="flex items-center space-x-4 border-b-2 text-white">
          <Link color="foreground" href="/">
            {year}
          </Link>
          <Divider orientation="vertical" />
          <Link color="foreground" href="https://sakamichi.cloud/">
            Japan
          </Link>
          <Divider orientation="vertical" />
          <Link href="/blog" color="foreground">
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
