import React from 'react'
import ClientAccunt from './clientAccount'
import { Metadata } from 'next'
import LoadingOnigiri from '@/app/components/loading/loadingOnigiri'

export const metadata: Metadata = {
  title: 'Your Account ',
  description: 'Hakuro Tech Dwi Aji Personal Website',
  applicationName: 'Hakuro Sakura App ',
  referrer: 'origin-when-cross-origin',
  keywords: ['Dwis Aji', 'Front End Developer', 'indonesia', 'Japan', 'Data Analyst', 'UI/UX Designer'],
  authors: [{ name: 'Dwis Aji' }, { name: 'Dwis Aji', url: 'https://hakuro.tech' }],
  creator: 'Dwis Aji',
  publisher: 'Dwis Aji',


}
export default async function Account() {


  return (
    <div>
      <div className='bg-red-500'>
        <ClientAccunt />
      </div>
      <div className='bg-blue-400 w-92 h-92'>
        <LoadingOnigiri />
<p>sdfd</p>
      </div>
    </div>


  )
}
