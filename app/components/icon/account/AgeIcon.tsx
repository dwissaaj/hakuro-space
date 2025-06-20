import React from "react";
import type { SVGProps } from "react";

export function AgeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m22.821 2.5l15.548 5.464L45.5 22.821l-5.464 15.548L25.179 45.5L9.631 40.036L2.5 25.179L7.964 9.631z"
      ></path>
      <circle
        cx={24}
        cy={24}
        r={7.531}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></circle>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.794 24L24 9.794L38.206 24L24 38.206z"
      ></path>
    </svg>
  );
}
