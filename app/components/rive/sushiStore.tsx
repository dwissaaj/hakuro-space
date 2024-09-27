'use client'
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import { useEffect } from 'react';
export default function SushiStore() {
  const { rive, RiveComponent } = useRive({
    src: '/onigiri.riv',
    stateMachines: "turnon",
    autoplay: true,
    artboard: 'Sushi Store',
    animations: 'wheel'
  });
  return (
    <RiveComponent

    />
  );
}