'use client'
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import { useEffect } from 'react';
export default function PlateSushi() {
  const { rive, RiveComponent } = useRive({
    src: '/onigiri.riv',
    stateMachines: "Rolling",
    autoplay: true,
    artboard: 'Sushi',

  });
  const rollingState = useStateMachineInput(rive, "Rolling", "roll")
  return (
    <RiveComponent
    style={{height: 500, width: 500}}
    onClick={() => {
      console.log('clicked');
      rollingState && rollingState?.value == true
    }}
      
    />
  );
}