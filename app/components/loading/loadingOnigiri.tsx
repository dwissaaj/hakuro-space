'use client'
import { useRive } from '@rive-app/react-canvas';
import { useEffect } from 'react';
export default function LoadingOnigiri() {
  const { rive, RiveComponent } = useRive({
    src: '/onigiri.riv',
    stateMachines: "waiting",
    autoplay: true,
    artboard: 'Onigiri',

  });
    useEffect(() => {
    if (rive) {
      console.log("Rive text was initially: ", rive.getTextRunValue("Run 1"))
      rive.setTextRunValue("Run 1", "New Text!!")
    }
  }, [rive]);
  return (
    <RiveComponent
      
    />
  );
}