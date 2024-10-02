'use client'
import axios from 'axios'
import React from 'react'
import useSWR from 'swr'
import FeedCard, { feedCardType } from './feedCard'
import { Spinner } from '@nextui-org/react'
useSWR
export default function GalleryFeed() {
   
    const fetcher = (url: string) => axios.get(url).then(res => res.data)
    const { data, isLoading } = useSWR('/api/blog/feed', fetcher)
    
      
  if(isLoading) {
    return <Spinner label='Hold On A Second' />
  }
  return  (
    <div className='flex flex-row gap-4 p-1'>
        
        {
          data?.documents?.map((feeds: feedCardType) => 
            <FeedCard key={feeds?.unique} src={feeds?.src} altImg={feeds?.altImg} desc={feeds?.desc}
          caption={feeds?.caption} />
          )
        }
        
    </div>
  )
}
