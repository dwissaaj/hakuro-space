import React from 'react'
import { Metadata } from 'next'
import Post from './post'
import Feed from './feed'
import { Image } from '@nextui-org/react'
export const metadata: Metadata = {
  title: 'Photography',
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
    <div className='w-full flex items-center justify-center font-raleway p-8 '>
          <div className='w-full flex flex-col'>
            <div className='flef flex-col'>
              <div>
                <p className='text-2xl lg:text-5xl text-white font-bold'>Resource Center</p>
                <p className='text-white font-regular text-md lg:text-xl'>Telling stories, show my mistakes and capture moments</p>
              </div>
              <div>
                <Feed src='/blog/photo/resource/colbor sl20.webp' title='Review Colbor SL20B Projection' date='01 October 2024' tag='Lighting'
                 altImg='Colbor Pics' desc='New competitor for lighting, is their projection attachment really good? I bought it and will review it in here.' link='/blog/photography/review-colbor-sl20b-projection'/>
                
              </div>
            </div>
            <div>
            <div>
                <p className='text-xl lg:text-5xl text-white font-bold'>Gallery</p>
              </div>
              <div className='flex flex-row  gap-4'>
               <div>
               <Post caption='A photo of myself, setting the lighting alone, took with a trigger' src='/blog/photo/gallery/me.png' altImg='Dwis aji pics' desc='Artist' />
               </div>
                <div>
                <Post caption='小田倉麗奈 可愛すぎる. Just a pic from a group idol nothing serious' src='/blog/photo/gallery/reina.png' altImg='reina pics' desc='Sakurazaka Fan' />
                </div>
              </div>
              </div>
          </div>
    </div>
  )
}


{/* <div className='flex flex-col items-start justify-start'>
              <p className='text-lg lg:text-5xl text-white font-bold '>Photography Center</p>
              <p className='text-white font-light'>Photo and Blogging is fun</p>
            </div>
            <div className='w-full flex flex-col lg:flex-row'>
              <Feed />
              <Feed />
              <Feed />
             
            </div> */}