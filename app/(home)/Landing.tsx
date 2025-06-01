"use client";
import { Link } from "@nextui-org/react";
import KaitenOnigiri from "../components/rive/kaitenOnigiri";
import SushiStore from "../components/rive/sushiStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import SplitText from "gsap/dist/SplitText";
import Flip from "gsap/dist/Flip";
import DesignComponent from "./designLanding";
gsap.registerPlugin(SplitText, Flip);

export default function Landing() {
  const paraRef = useRef(null);
  const paraRef2 = useRef(null);
  const paraRef3 = useRef(null);
  useGSAP(() => {
    const split1 = new SplitText(paraRef.current, {
      type: "lines",
      linesClass: "line-child",
    });

    const split2 = new SplitText(paraRef2.current, {
      type: "chars",
      charsClass: "char-child",
    });
    const split3 = new SplitText(paraRef3.current, {
      type: "lines",
      linesClass: "line-child",
    });
    gsap.from(split1.lines, {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });

    gsap.from(split2.chars, {
      y: 20,
      opacity: 0,
      duration: 1,
      stagger: 0.05,
      ease: "back.out(1.7)",
      delay: 0.6,
    });
    gsap.from(split3.lines, {
      y: 20,
      opacity: 0,
      duration: 1,
      stagger: 0.05,
      delay: 2,
    });

    return () => {
      split1.revert();
      split2.revert();
      split3.revert();
    };
  }, []);

  return (
    <main>
      <div className="mt-8 flex flex-col items-center justify-center w-full h-full gap-4 ">
        <section className="w-1/2 h-1/4 flex flex-col gap-2 text-md lg:text-4xl text-left font-raleway">
          <p ref={paraRef}>This animation was built with GSAP & Rive.</p>
          <p ref={paraRef2}>
            <Link
              className="underline font-raleway text-lg lg:text-4xl"
              href="https://rive.app/"
            >
              Rive.app
            </Link>
          </p>
          <div className="font-raleway text-md lg:text-xl">
            <p ref={paraRef3}>
              このアニメーションRIVE作りますた. Yeah it&apos;s disgusting{" "}
            </p>
          </div>
          <DesignComponent />
        </section>
        <section className="w-24 h-24 lg:w-96 lg:h-96">
          <SushiStore />
        </section>
      </div>
    </main>
  );
}
