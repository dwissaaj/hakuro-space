import { Card, Image, CardFooter, CardHeader, Button, Link } from '@nextui-org/react'

import React from 'react'

export default function Feed() {
  return (

    <div className='min-w-80 bg-blue-500 m-2 bg-black/50 border border-black '>
      <div>
      <Card
      isFooterBlurred
      radius='none'
      className="border-none p-0 m-0"
    >
      <CardHeader className='p-0 m-0'>
        <Image
        radius='none'
          alt="Woman listing to music"
          className="w-full h-full object-scale-down p-0 m-0"
          src="/blog/photo/life.png"
        />
      </CardHeader>
      <CardFooter className="border-white/20 border-1 absolute bottom-1 w-full h-1/6 z-10 flex flex-row  justify-between  -my-1">
      <div className='p-0 m-0 flex flex-col gap-0'>
      <p className="p-0 m-0 text-tiny lg:text-md text-white/80">Dwis Aji</p>
      <p className="p-0 m-0 text-tiny lg:text-md text-white/80">1 October 2024</p>
      </div>
      <div>
      <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
              Lighting
            </Button>
      </div>

      </CardFooter>
    </Card>
      </div>
      <div className='p-2'>
        < p className='text-white font-bold text-md lg:text-lg '>Colbor SL60 B Review</p>
        <p className='text-white font-light text-sm'>
          New Comer for budget friendly lighting projection, is it really worth it?
        </p>
        <Link className='text-white' showAnchorIcon href='/'>Read it</Link>
      </div>
    </div>

  )
}


