'use client'
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
export default function ErrorGate() {
  const { RiveComponent } = useRive({
    src: '/onigiri.riv',
    stateMachines: "erroractive",
    artboard: 'Error',
    autoplay: true,
    animations: 'Error code'

  });
  
  return (
    <RiveComponent
    style={{height: 500, width: 500}}
    
    />
  );
}