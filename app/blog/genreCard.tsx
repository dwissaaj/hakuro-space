import React from 'react'
import { StaticImageData } from 'next/image';
import { Card, CardFooter, Image, Button, Link, CardHeader, CardBody } from "@nextui-org/react";
type genreCard = {
    size: "sm" | "lg" | "none" | "md",
    imageAlt: string | StaticImageData,
    src: string,
    height: number,
    width: number,
    headline: string,
    link: string,
    subheadline: string

}
export default function GenreCard() {
  return (
    <Card className='w-full gap-0 bg-slate-100/10 border-2 border-slate-100/40 shadow-md shadow-slate-500 rounded-xl '>
    <CardHeader>
      <Image className='w-full' src='/blog/coding.png' />
    </CardHeader>
    <CardBody className='flex flex-col gap-2  font-raleway'>
      <p className='text-2xl font-bold'>Coding</p>
      <p>Not have much experience as professional, but here I am writing down all my mistakes.
      Discover the ups and downs of learning to code. From beginner mishaps to breakthroughs, follow along as I share lessons, gear, tech stack I learned through trial and error.</p>
    </CardBody>
    <CardFooter>
      <Link color='primary' href='/blog/coding'>Read Now</Link>
    </CardFooter>
  </Card>
  )
}
