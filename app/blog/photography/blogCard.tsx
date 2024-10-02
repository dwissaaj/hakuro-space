'use client'
import { Card, Image, CardFooter, CardHeader, Button, Link } from '@nextui-org/react'

interface FeedType {
  src: string,
  altImg: string,
  date: string,
  tag: string,
  desc: string,
  title: string,
  link: string
  
}
import React from 'react'
export default function BlogCard(props: FeedType) {
  return (

    <div className='max-w-80 max-h-[600px] m-2 bg-black/50 border border-white/40 overflow-hidden hover:-translate-y-1 transition ease-in-out'>
      <div>
        <Card
          isFooterBlurred
          radius='none'
          shadow='lg'
          className="border-none p-0 m-0"
        >
          <CardHeader className='p-0 m-0'>
            <Image
              radius='none'
              alt={props.altImg}
              className="w-full h-full object-cover p-0 m-0"
              src={props.src}
            />
          </CardHeader>
          <CardFooter className="border-white/20 border-1 absolute bottom-1 w-full h-1/6 z-10 flex flex-row  justify-between -my-1">
            <div className='p-0 m-0 flex flex-col gap-0'>
              <p className="p-0 m-0 text-tiny lg:text-md text-white/80">Dwis Aji</p>
              <p className="p-0 m-0 text-tiny lg:text-md text-white/80">{props.date}</p>
            </div>
            <div>
              <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                {props.tag}
              </Button>
            </div>

          </CardFooter>
        </Card>
      </div>
      <div className='min-h-full p-2 flex flex-col  gap-2 '>
       <div>
       < p className='text-white font-bold text-md lg:text-lg p-0 m-0 '>{props.title}</p>
       </div>
        <div>
        <p className='text-white font-light text-sm p-0 m-0 text-ellipsis overflow-hidden'>
          {props.desc}
        </p>
        </div>
        <div>
        <Link color='primary' className=' p-0 m-0' showAnchorIcon href={props.link}>Read it</Link>
        </div>
      </div>
    </div>
  )
}


