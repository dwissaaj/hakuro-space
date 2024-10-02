
import React from 'react'
import { Metadata } from 'next'
import BlogPost from '../BlogPost'
import ColborCL from "@/app/markdown/ColborCL.mdx"
export const metadata: Metadata = {
  title: 'Review Colbor CL60 R RGB Light ',
  description: 'Review Colbor SL20B Projection Lighting ',
  applicationName: 'Hakuro Sakura App ',
  referrer: 'origin-when-cross-origin',
  keywords: ['Colbor Lighting', 'RGB Light', 'Recomendation ', 'Cinematography', 'Colbor CL60R Review'],
  authors: [{ name: 'Dwis Aji' }, { name: 'Dwis Aji', url: 'https://hakuro.tech' }],
  creator: 'Dwis Aji',
  publisher: 'Dwis Aji',


}

export default function page() {
  return (
    <div className='w-full lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] font-raleway flex justify-start items-center'>
      <div className='w-full flex flex-col md:flex-row justify-center  p-2 gap-6'>
        <div className='w-full lg:w-3/4 prose font-raleway text-white bg-black/20 shadow-md shadow-white p-4'>
         <BlogPost>
          <ColborCL />
         </BlogPost>
        </div>
        <div className='w-1/4 h-1/4 bg-black opacity-40 hover:opacity-100 text-white p-2  border-black/30 border-4 bg-primary transition ease-in-out'>
          <p className='text-lg lg:text-4xl'>Other Post</p>
        </div>
      </div>
    </div>
  )
}
