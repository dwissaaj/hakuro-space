'use client'
import React, { useEffect, useState } from 'react'

export default function Kaiten() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Set a timer to change the loading state after 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust this time as needed

    // Cleanup function to clear the timer
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>Kaiten</div>
  )
}
