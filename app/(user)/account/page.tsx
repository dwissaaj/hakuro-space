import React from 'react'
import ClientAccunt from './clientAccount'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Your Account ',
  description: 'Kisetsu Tech Dwi Aji Personal Website',
  applicationName: 'Kisetsu Sakura App ',
  referrer: 'origin-when-cross-origin',
  keywords: ['Dwis Aji', 'Front End Developer','indonesia', 'Japan', 'Data Analyst', 'UI/UX Designer'],
  authors: [{ name: 'Dwis Aji' }, { name: 'Dwis Aji', url: 'https://kisetsu.tech' }],
  creator: 'Dwis Aji',
  publisher: 'Dwis Aji',
  

}
export default async function Account() {
 

  return (
    <>
    <ClientAccunt />
    </>
  )
}
