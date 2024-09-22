import Image from 'next/image'
import React from 'react'
import seasonLogo from "@/public/logo/theme.png"
export default function SeasonSwitcher() {
  return (
    <Image  alt='logo'  src={seasonLogo} width={25} height={25}/>
  )
}
