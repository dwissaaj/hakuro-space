'use client'
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import { useEffect } from 'react';
export default function KaitenSushi() {
  const { rive, RiveComponent } = useRive({
    src: '/onigiri.riv',
    stateMachines: "Rolling",
    autoplay: true,
    artboard: 'Kaiten Sushi',

  });
    

  return (
    <RiveComponent
    
    />
  );
}