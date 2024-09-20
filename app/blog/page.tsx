import React from 'react'
import { Metadata } from 'next'
import GenreCard from './genreCard'
import codingPics from '@/public/blog/coding.png'
import { Card, CardFooter, Image, Button, Link, CardHeader, CardBody } from "@nextui-org/react";
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
    <div className='w-screen flex items-center justify-center m-4 font-raleway'>
      <div className='w-full lg:w-3/4 border rounded-3xl border-2xl backdrop-blur-3xl p-6 bg-slate-100/10'>
        <div className='flex flex-col'>
          <div className='flex flex-col gap-0 p-2'>
            <h1 className='m-0 font-roboto'>Blogs</h1>
            <p className='text-sm font-raleway'>All is my writing, still build in markdown if I have free time will update to use Elysia. Categorize with a few genre, will update soon</p>
          </div>
          <div>
            <div className='flex flex-col gap-3'>
              <div>
                <Card className='w-full gap-0 bg-slate-100/10 border-2 border-slate-100/40 shadow-md shadow-slate-500 rounded-xl '>
                  <CardHeader>
                    <Image className='w-full' src='/blog/coding.png' />
                  </CardHeader>
                  <CardBody className='flex flex-col gap-2  font-raleway'>
                    <p className='text-xl lg:text-3xl font-bold'>Coding</p>
                    <p>Not have much experience as professional, but here I am writing down all my mistakes.
                      Discover the ups and downs of learning to code. From beginner mishaps to breakthroughs, follow along as I share lessons, gear, tech stack I learned through trial and error.</p>
                  </CardBody>
                  <CardFooter>
                    <Link color='primary' href='/blog/coding'>Find Interesting Post</Link>
                  </CardFooter>
                </Card>
              </div>
              <div className=''>
                <Card className='w-full gap-0 bg-slate-100/10 border-2 border-slate-100/40 shadow-md shadow-slate-500 rounded-xl '>
                  <CardHeader>
                    <Image className='w-full' src='/blog/photography.png' />
                  </CardHeader>
                  <CardBody className='flex flex-col gap-2  font-raleway'>
                    <p className='text-xl lg:text-3xl font-bold'>Photography</p>
                    <p>Just a camera, some good light, and a lot of trial and error.
                      I am learning as I go, figuring out how to capture those perfect shots. Sharing the messy, fun, and sometimes surprising moments behind the lens!</p>
                  </CardBody>
                  <CardFooter>
                    <Link color='primary' href='/blog/photography'>Read Now</Link>
                  </CardFooter>
                </Card>
              </div>
              <div className='hidden md:block'>
                <Card
                  isFooterBlurred
                  radius="lg"
                  className="border shadow-md shadow-slate-500 w-full  p-0 m-0 bg-slate-100/10"
                >
                  <Image
                    alt="japan image"
                    className="object-cover  p-0 m-0"
                    src="/blog/japan.png"
                    width={1200}
                    height={800}
                  />
                  <CardFooter className="mt-8 justify-between before:bg-slate-100/10 border-white/20 border-1 overflow-hidden absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <p className="text-tiny lg:text-sm text-white/80">Learning the language, loving the culture, and probably making a ton of mistakes. 坂道グルプ大好き男です。</p>
                    <Button className="text-tiny lg:text-sm text-white bg-black/20 font-raleway" variant="flat" color="default" radius="lg" size="sm">
                      Coming Soon
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <div className='md:hidden'>
                <Card
                  isFooterBlurred
                  radius="lg"
                  className="border-none"
                >
                  <Image
                    alt="japan image"
                    className="object-cover p-0 m-0"

                    src="/blog/japan.png"

                  />
                  <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <p className="text-tiny text-white/80">坂道グルプ大好き男です</p>
                    <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                      Coming soon
                    </Button>
                  </CardFooter>
                </Card>
              </div>



              <div className='hidden md:block'>
                <Card
                  isFooterBlurred
                  radius="lg"
                  className="border shadow-md shadow-slate-500 w-full  p-0 m-0 bg-slate-100/10"
                >
                  <Image
                    alt="Data office image"
                    className="object-cover  p-0 m-0"
                    src="/blog/data.png"
                    width={1200}
                    height={800}
                  />
                  <CardFooter className="mt-8 justify-between before:bg-slate-100/10 border-white/20 border-1 overflow-hidden absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <p className="text-tiny lg:text-sm text-white/80">Crunching numbers, finding patterns using Text Processing powered by Machine Learning, resulting amazing report for business problem.</p>
                    <Button className="text-tiny lg:text-sm text-white bg-black/20 font-raleway" variant="flat" color="default" radius="lg" size="sm">
                    Ongoing
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <div className='md:hidden'>
                <Card
                  isFooterBlurred
                  radius="lg"
                  className="border-none"
                >
                  <Image
                    alt="data image"
                    className="object-cover p-0 m-0"
                    src="/blog/data.png"
                  />
                  <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <p className="text-tiny text-white/80">Solve Business Problem</p>
                    <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                      Ongoing
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>

          </div>
        </div>

      </div>


    </div>
  )
}
