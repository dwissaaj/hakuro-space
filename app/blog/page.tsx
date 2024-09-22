import React from 'react'
import { Metadata } from 'next'
import { Card, CardFooter, Image, Button, } from "@nextui-org/react";
import CardBlog from './cardblog';
export const metadata: Metadata = {
  title: 'Blogs Hakuro',
  description: 'Hakuro Tech Dwi Aji Personal Website',
  applicationName: 'Hakuro Sakura App ',
  referrer: 'origin-when-cross-origin',
  keywords: ['Dwis Aji', 'Front End Developer', 'Indonesia', 'Japan', 'Data Analyst', 'UI/UX Designer'],
  authors: [{ name: 'Dwis Aji' }, { name: 'Dwis Aji', url: 'https://hakuro.tech' }],
  creator: 'Dwis Aji',
  publisher: 'Dwis Aji',


}
export default function page() {
  return (
    <div className='w-screen font-raleway flex items-center justify-center  overflow-x-hidden '>
      <div className='w-full lg:w-3/4 flex flex-col items-center justify-center '>

        <div className=''>
          <div className='w-full h-full  text-center'>
            <p className='text-xl lg:text-4xl '>Topic (On Development)</p>
            
          </div>
          <div className='p-2 w-full grid grid-cols-12 gap-4 justify-items-center my-10'>
            <CardBlog altImg='photography' source='/blog/photography.jpg' cardStyle='col-span-12 lg:col-span-3' headline='Photography' content='Explore the world one shot at a time with me while capturing the beauty, emotion, and stories hidden in any moments.' />
            <CardBlog altImg='coding' source='/blog/coding.jpg' cardStyle='col-span-12 lg:col-span-3' headline='Code' content='Not A CS Graduate but I love code. All my mistakes, suggestion, and experience is written in here.' />
            <Card
              isFooterBlurred
              className="  col-span-12 lg:col-span-3 border-2 border-black shadow-[-7px_6px_30px_-5px_rgba(255,255,255,0.3)]"
            >
              <Image
                alt="data pics"
                className="object-cover w-full h-full p-0 m-0"
                removeWrapper
                src="/blog/japan.jpg"

              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 h-1/4">
                <p className="text-tiny text-white/80">Learn Japanese, 坂道グループ大好きです</p>
                <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                  もうすぐ
                </Button>
              </CardFooter>
            </Card>
            <Card
              isFooterBlurred
              className="  col-span-12 lg:col-span-3 border-2 border-black shadow-[-7px_6px_30px_-5px_rgba(255,255,255,0.3)]"
            >
              <Image
                alt="data pics"
                className="object-cover w-full h-full p-0 m-0"
                removeWrapper
                src="/blog/data.jpg"

              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden  absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 h-1/4">
                <p className="text-tiny text-white/80">Text processing, analyst & report for business</p>
                <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                  Soon
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
