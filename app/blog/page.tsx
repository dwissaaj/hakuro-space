import React from 'react'
import { Metadata } from 'next'
import { Card, CardFooter, Image, Button, CardHeader, CardBody, Tab, Tabs, } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import CardBlog from './cardblog';
import BlogCard from './blogCardSoon';
import BlogCardSoon from './blogCardSoon';
import BlogCardReady from './blogCardReady';
import TabBlog from './tabblog';
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
    <div className='w-screen font-raleway p-2 flex flex-col items-center  justify-center'>
      <div className='w-full lg:w-1/2 '>
        <div className='relative w-full flex flex-row items-center justify-center'>
          <Image className='w-full h-full' src='/home/5.png' alt='Header Image' />
          <p className='text-lg lg:text-4xl z-10 absolute left-4 bottom-32 text-white font-bold'>A source of ideas</p>
          <p className=' z-10 absolute left-4 bottom-28 text-white font-regular'>Maybe not so great writing but this is the journey</p>
        </div>

        <div className='flex flex-col p-2 '>
          <p className='text-white text-4xl p-0 m-0'>Blog</p>
          <p className='text-white p-0 m-0'>Just simple writing to show what I done</p>
        </div>
        <div>
        <div className=''>
            <TabBlog />
            <div className='w-full  grid grid-cols-12 gap-3'>
              <div className='col-span-12 lg:col-span-3'>
                <BlogCardReady link='/blog/coding' src='/blog/coding.jpg' imageAlt='Coding Image' headline='CODING' caption='Not a CS graduate but I love .' />
              </div>
              <div className='col-span-12 lg:col-span-3'>
                <BlogCardReady caption='Artistic side of myself.' headline='PHOTOGRAPHY' link='/blog/photography' src='/blog/photography.jpg' imageAlt='Camera' />
              </div>

              <div className='col-span-12 lg:col-span-3 '>
                <BlogCard src='/blog/japan.jpg' imageAlt='Japan Castle' tag='もうすぐ' headline='Learn Japanese, 坂道グループ大好きです' />
              </div>
              <div className='col-span-12 lg:col-span-3 h-full'>
<BlogCard src='/blog/data.jpg' imageAlt='data image' headline='Text Processing, Machine Learning and Report' tag='Soon' />
</div>
            </div>
          </div>
        </div>
        <div>

        </div>

      </div>



    </div>
  )
}



{/* 
 */}
