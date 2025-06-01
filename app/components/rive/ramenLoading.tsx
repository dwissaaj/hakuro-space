"use client";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
export default function RamenLoader() {
  const { RiveComponent } = useRive({
    src: "/onigiri.riv",
    stateMachines: "hot",
    autoplay: true,
    artboard: "Ramen",
  });

  return <RiveComponent style={{ height: 500, width: 500 }} />;
}
