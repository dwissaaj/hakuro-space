import React from 'react'
import { Card, CardHeader, Image } from '@nextui-org/react'
import Link from 'next/link'

interface CodingCard {
    source: string,
    altImg: string,
    headline: string,
    subHeadline: string,
    link: string,
    style: string,
    styleHeadline: string,
    styleSubHeadline: string
}
export default function CodingCard({ altImg,source, headline,subHeadline,link,style, styleHeadline, styleSubHeadline} : CodingCard) {
    return (
    
        <Card isBlurred  className={`${style}`}>
            <Link className='hover:-translate-y-1 transition ease-in-out col-span-12 sm:col-span-4 h-[300px] ' href={`${link}`}>
            <CardHeader className='absolute z-10 top-1  flex-col !items-start'>
                <div className=''>
                    <p className={`text-sm lg:text-xl uppercase font-bold ${styleHeadline}`}>{headline}</p>
                    <p className={`text-tiny lg:text-lg capitalize ${styleSubHeadline}`}>{subHeadline}</p>
                </div>
            </CardHeader>
            <Image  removeWrapper src={source} alt={altImg} className='z-0 p-0 m-0 w-full h-full object-cover opacity-10' />
            </Link>
        </Card>
        
    )
}
