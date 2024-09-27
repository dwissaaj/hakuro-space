import React from 'react'
import { Card, CardFooter, Image, Button, } from "@nextui-org/react";
interface blogCardType {
  imageAlt: string
  src: string,
  headline: string,
  tag: string

}
export default function BlogCardSoon(props: blogCardType) {
  return (
    <Card
      isFooterBlurred
      className="  col-span-12 lg:col-span-3 border-2 border-black "
    >
      <Image
        alt={props.imageAlt}
        className="object-cover w-full h-full p-0 m-0"
        removeWrapper
        src={props.src}

      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden  absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 h-1/4">
        <p className="text-tiny text-white/80">{props.headline}</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          {props.tag}
        </Button>
      </CardFooter>
    </Card>
  )
}
