import React from 'react'
import LoginClient from './LoginC'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { getLoggedInUser } from '@/app/lib/auth/loginState'
export const metadata: Metadata = {
  title: 'Login | Kisetsu ',
  description: 'Kisetsu Tech Dwi Aji Personal Website',
  applicationName: 'Kisetsu Sakura App ',
  referrer: 'origin-when-cross-origin',
  keywords: ['Dwis Aji', 'Front End Developer', 'indonesia', 'Japan', 'Data Analyst', 'UI/UX Designer'],
  authors: [{ name: 'Dwis Aji' }, { name: 'Dwis Aji', url: 'https://kisetsu.tech' }],
  creator: 'Dwis Aji',
  publisher: 'Dwis Aji',


}

export default async function Page() {
  const user = await getLoggedInUser()

  if (user) redirect("/account");



  return (
    <>
      <LoginClient />
    </>
  )
}

