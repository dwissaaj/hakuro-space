'use client'
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import { useEffect } from 'react';
export default function LoadingSushi() {
  const { rive, RiveComponent } = useRive({
    src: '/onigiri.riv',
    stateMachines: "waiting",
    autoplay: true,
    artboard: 'Sushi',
    
  });
 
  return (
    <RiveComponent
      
    />
  );
}