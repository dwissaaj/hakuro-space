import React from 'react'
import CodingCard from './codingcard'
import { Card, CardHeader, Slider, Image, CardFooter, CardBody, Button } from '@nextui-org/react'
import CodingCardSoon from './codingcardsoon'
export default function page() {
  return (
    <div className='w-screen flex items-center justify-center p-2'>
      <div className='w-full lg:w-3/4 items-center justify-center mt-8 shadow-md shadow-slate-200 p-4 rounded-lg'>
        <div className='w-full gap-4 grid grid-cols-12 grid-rows-2 p-2 items-center justify-center'>
          <CodingCardSoon subtitle='Amazing Framework for your app UI' buttonTitle='Soon' style='col-span-12 lg:col-span-6 h-[300px] underlined' source='/blog/coding/graphic designer.jpg' altImg='next ui Logo'
            headline='Next UI A New Hero' />
        
        <CodingCard styleHeadline='text-white' styleSubHeadline='text-white' style='col-span-12 lg:col-span-6 h-[300px]' source='/blog/coding/designer.jpg' altImg='designer' headline='framer' subHeadline='amazing website builder for company & agency' link='/' />

        <CodingCard styleHeadline=' text-white' styleSubHeadline='text-white ' style='col-span-12 lg:col-span-4 h-[300px] text-black' source='/blog/coding/macbook.jpg' altImg='macbook' headline='rive app' subHeadline='Add identity to your app' link='/' />

        <CodingCard styleHeadline=' text-white' styleSubHeadline='text-white ' style='col-span-12 lg:col-span-4 h-[300px] text-black' source='/blog/coding/server.jpg' altImg='server pics' headline='Appwrite vs Supabase' subHeadline='Which one for your app?' link='/' />

        <CodingCardSoon subtitle='Which one to choose?' buttonTitle='Soon' style='col-span-12 lg:col-span-4 h-[300px] ' source='/blog/coding/coding.jpg' altImg='coding pics'
            headline='Next, Nuxt or Sveltekit?' />
        </div>
      </div>
    </div>
  )
}
