import React from 'react'
import CodingCard from './codingcard'
import { Card, CardHeader, Slider, Image, CardFooter, CardBody, Button } from '@nextui-org/react'
import CodingCardSoon from './codingcardsoon'
export default function page() {
  return (
    <div className='w-screen flex items-center justify-center p-2'>
      <div className='w-full lg:w-3/4 items-center justify-center mt-8 border-2 border-xl border-primary-200 p-4 rounded-lg'>
        <div className='w-full gap-4 grid grid-cols-12 grid-rows-2 p-2 items-center justify-center'>
          <CodingCardSoon subtitle='Amazing Framework for your app' buttonTitle='Soon' style='col-span-12 lg:col-span-6 h-[300px]' source='/blog/coding/nextui.png' altImg='next ui Logo'
            headline='Next UI New Hero' />
        <CodingCard styleHeadline='text-white' styleSubHeadline='text-white' style='col-span-12 lg:col-span-6 h-[300px]' source='/blog/coding/nextui.png' altImg='img' headline='appwrite vs supabase' subHeadline='which one for your app?' link='/' />
        <CodingCard styleHeadline='text-white' styleSubHeadline='text-white' style='col-span-12 lg:col-span-4 h-[300px]' source='/blog/coding/framer.png' altImg='framer logo' headline='framer' subHeadline='amazing website builder for company & agency' link='/' />
        <CodingCard styleHeadline='bg-gray-500/50 rounded-md p-2 text-white' styleSubHeadline='text-white bg-gray-500/50 rounded-md p-2' style='col-span-12 lg:col-span-4 h-[300px] text-black' source='/blog/coding/rive.png' altImg='rive logo' headline='rive app' subHeadline='Add identity to your app' link='/' />
        <CodingCard styleHeadline='bg-gray-500/50 rounded-md p-2 text-white' styleSubHeadline='text-white bg-gray-500/50 rounded-md p-2' style='col-span-12 lg:col-span-4 h-[300px] text-black' source='/blog/coding/rive.png' altImg='rive logo' headline='rive app' subHeadline='Add identity to your app' link='/' />
        </div>
      </div>
    </div>
  )
}
