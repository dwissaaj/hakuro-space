import React from 'react'
import { Card, CardFooter, Image, Button, Link, CardHeader, CardBody } from "@nextui-org/react";
interface CardBlog {
cardStyle: string,
headline: string,
altImg: string,
source: string,
content: string
}
export default function CardBlog({cardStyle, headline, altImg, source,content}: CardBlog) {
  return (
    <Card isHoverable className={`${cardStyle} border-2 border-white/50 shadow-[-7px_6px_30px_-5px_rgba(255,255,255,0.3)] bg-black/80  `}>
          <CardHeader className='max-h-12 my-2'>
          <p className=' text-lg lg:text-3xl text-white/80 underline'>{headline}</p>
          </CardHeader>
            <CardBody className="overflow-visible my-0 py-0 max-h-fit">
              <Image
                alt={altImg}
                className="rounded-xl w-full my-0"
                src={`${source}`}
                
              />
            </CardBody>
            <CardFooter className='py-0  my-2 '>
              <p className=' hover:text-red-500'>{content}</p>
            </CardFooter>
          </Card>
  )
}
