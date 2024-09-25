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
        
          
          </div>
          <div>
            <p className='text-3xl text-white'>Gallery</p>
            <div>
              <Post />
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