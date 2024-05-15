import React from 'react'
import ClientAccunt from './clientAccount'
import { Metadata } from 'next'
import LoadingOnigiri from '@/app/components/loading/OnigiriHomepage'

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
    
        <ClientAccunt />

    </div>


  )
}
