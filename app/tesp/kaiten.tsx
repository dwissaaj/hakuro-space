'use client'
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
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