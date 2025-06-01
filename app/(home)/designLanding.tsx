"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export default function DesignComponent() {
  const parentRef = useRef(null);
  const textRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 4 });

    tl.fromTo(
      parentRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.8,
        ease: "power1.out",
      },
    );

    tl.fromTo(
      parentRef.current,
      {
        x: 150,
      },
      {
        x: 0,
        rotate: 360,
        duration: 1,
        ease: "power2.out",
      },
    );

    tl.to(parentRef.current, {
      duration: 0.5,
    });

    tl.to(parentRef.current, {
      scaleX: 3,
      skewX: 10,
      duration: 1.5,
      ease: "power1.inOut",
    });
  });

  useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
      },
      {
        delay: 3,
        opacity: 1,
      },
    );
  });
  return (
    <div className="relative w-fit">
      <div className="relative inline-block">
        <div
          ref={parentRef}
          className="absolute top-1/2 left-1/2 w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-sm overflow-hidden z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-sky-300 to-teal-500"></div>
          <div className="absolute inset-0 bg-[url('/home/3.png')] opacity-20 pointer-events-none"></div>
        </div>

        <p
          ref={textRef}
          className="relative z-20 font-raleway text-md lg:text-3xl"
        >
          Design
        </p>
      </div>
    </div>
  );
}
