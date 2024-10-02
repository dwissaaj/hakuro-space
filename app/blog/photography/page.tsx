import React from 'react'
import { Metadata } from 'next'
import Feed from './blogCard'
import GalleryFeed from './galleryFeed'

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

export default async function Page() {

  return (
    <div className='w-full flex items-center justify-center font-raleway p-8 '>
      <div className='w-full flex flex-col'>
        <div className='flef flex-col'>
        <div>
          <div>
            <p className='text-xl lg:text-5xl text-white font-bold'>Gallery</p>
          </div>

          <div className='w-full h-full '>
            <GalleryFeed />

          </div>
        </div>
          <div>
            <p className='text-2xl lg:text-5xl text-white font-bold'>Resource Center</p>
            <p className='text-white font-regular text-md lg:text-xl'>Telling stories, show my mistakes and capture moments, Still on Development</p>
          </div>
          <div className='w-full flex flex-row gap-2'>
            <div>
              <Feed src='/blog/photo/resource/colbor sl20.webp' title='Review Colbor SL20B Projection' date='01 October 2024' tag='Lighting'
                altImg='Colbor Pics' desc='New competitor for lighting, is their projection attachment really good? I bought it and will review it in here.' link='/blog/photography/review-colbor-sl20b-projection' />
            </div>
            <div>
              <Feed src='/blog/photo/resource/colbor cl60.png' title='Real World Testing Colbor CL60R' date='01 October 2024' tag='Lighting'
                altImg='Colbor Pics' desc='Colbor SL20B need use Colbor CL60R for source of ligh, but is it also a good lighting?' link='/blog/photography/review-colbor-sl20b-projection' />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

