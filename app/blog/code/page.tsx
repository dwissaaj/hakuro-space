import React from 'react'
import { Metadata } from 'next'
import { Image } from '@nextui-org/react'
export const metadata: Metadata = {
  title: 'Coding Category',
  description: 'Hakuro Tech Dwi Aji Personal Website Blog Content Coding Category',
  applicationName: 'Hakuro Sakura App ',
  referrer: 'origin-when-cross-origin',
  keywords: ['Dwis Aji', 'Front End Developer', 'Indonesia', 'Japan', 'Data Analyst', 'UI/UX Designer'],
  authors: [{ name: 'Dwis Aji' }, { name: 'Dwis Aji', url: 'https://hakuro.tech' }],
  creator: 'Dwis Aji',
  publisher: 'Dwis Aji',


}
export default function page() {
  return (
    <div className=' w-screen h-screen flex flex-col justify-start items-center p-2 font-raleway'>
      <div className='w-3/4 h-full '>
        <div>
          <div>
            <p className='text-lg lg:text-5xl text-white font-bold'>Code File</p>

          </div>
          <div className='w-full flex gap-2'>
            <div className='w-1/4'>
              <div className='relative'>
                <Image className='w-full h-full' src='/blog/coding/cafe.png' />
                <p className='bg-[#18181B] px-8 text-start rounded-lg absolute -bottom-0 -left-1  z-10 text-white font bold'>Framer</p>
                <p className='bg-[#18181B] px-8 text-start rounded-lg absolute -bottom-6 -left-1  z-10 text-white'>Great Tech</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
