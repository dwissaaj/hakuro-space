"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export default function DesignComponent() {
  const parentRef = useRef(null);
  useGSAP(() => {
    gsap.to(parentRef.current, {
      scale: 1.5,
      x: 0,
      y: 100,
      delay: 2,
    });
  });
  return (
    <div className="flex flex-row items-center gap-2">
      <div>
        <p className="font-raleway text-md lg:text-3xl">Design</p>
      </div>
      <div className="relative w-12 h-12 rounded-sm overflow-hidden">
        <div
          ref={parentRef}
          className="absolute inset-0 bg-gradient-to-br from-pink-300 via-sky-300 to-teal-500"
        ></div>
        <div className="absolute inset-0 bg-[url('/home/3.png')] opacity-20 pointer-events-none"></div>
      </div>
    </div>
  );
}
