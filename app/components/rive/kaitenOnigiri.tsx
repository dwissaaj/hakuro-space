"use client";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { useEffect } from "react";
export default function KaitenOnigiri() {
  const { rive, RiveComponent } = useRive({
    src: "/onigiri.riv",
    stateMachines: "rolling",
    autoplay: true,
    artboard: "Kaiten Onigiri",
  });

  return <RiveComponent />;
}
