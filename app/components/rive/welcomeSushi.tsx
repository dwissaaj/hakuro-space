"use client";
import { useRive } from "@rive-app/react-canvas";
import { useEffect } from "react";
export default function WelcomeSushi() {
  const { rive, RiveComponent } = useRive({
    src: "/onigiri.riv",
    stateMachines: "waiting",
    autoplay: true,
    artboard: "Onigiri Ikura",
  });
  useEffect(() => {
    if (rive) {
      console.log(
        "Rive text was initially: ",
        rive.getTextRunValue("LabelText"),
      );
      rive.setTextRunValue("LabelText", "Nice to meet you - Onigiri");
    }
  }, [rive]);

  return <RiveComponent />;
}
