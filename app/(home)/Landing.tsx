"use client";
import { Link } from "@nextui-org/react";
import KaitenOnigiri from "../components/rive/kaitenOnigiri";
import SushiStore from "../components/rive/sushiStore";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export default function Landing() {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 1.5,
      effects: true,
    });
  }, {});

  return (
   <div className="mt-8 flex flex-col items-center justify-center w-full h-full gap-4 ">
      <section className="w-1/2 h-1/4 flex flex-col gap-2 text-md lg:text-4xl text-center">
        <p>This Animation built with <Link className="underline text-md lg:text-4xl"  href="https://rive.app/">Rive</Link></p>
        <h1>このアニメーションRIVE作りますた. Yeah it&apos;s disgusting design</h1>
      </section>
      <section className="w-24 h-24 lg:w-96 lg:h-96">
      <SushiStore />
      </section>
      
    </div>
  );
}

//  <main  ref={wrapperRef} id="smooth-wrapper" className="bg-red-500 mt-8 flex flex-col items-center justify-center w-full h-44 gap-4">
//     <div ref={contentRef}
//           id="smooth-content"
//           className="flex flex-col gap-2 text-4xl text-center"></div>
