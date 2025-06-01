"use client";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
export default function PlateSushi() {
  const { rive, RiveComponent } = useRive({
    src: "/onigiri.riv",
    stateMachines: "rotate",
    autoplay: true,
    artboard: "Sushi",
  });
  const rollingState = useStateMachineInput(rive, "rotate", "isRolled");
  return (
    <RiveComponent
      style={{ height: 500, width: 500 }}
      onClick={() => {
        console.log("clicked");
        rollingState && rollingState?.value == true;
      }}
    />
  );
}
