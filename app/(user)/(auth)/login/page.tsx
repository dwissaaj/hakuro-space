import React from 'react'
import LoginClient from './LoginC'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { getLoggedInUser } from '@/app/lib/auth/loginState'
import KaitenSushi from '@/app/tesp/kaiten'
export const metadata: Metadata = {
  title: 'Login | Hakuro ',
  description: 'Hakuro Tech Dwi Aji Personal Website',
  applicationName: 'Hakuro Sakura App ',
  referrer: 'origin-when-cross-origin',
  keywords: ['Dwis Aji', 'Front End Developer', 'indonesia', 'Japan', 'Data Analyst', 'UI/UX Designer'],
  authors: [{ name: 'Dwis Aji' }, { name: 'Dwis Aji', url: 'https://hakuro.tech' }],
  creator: 'Dwis Aji',
  publisher: 'Dwis Aji',


}

export default async function Page() {
  const user = await getLoggedInUser()

  if (user) redirect("/account");



  return (
    <div className='min-w-screen min-h-screen'>
      <div className='w-full h-screen flex flex-col lg:flex-row items-center'>
          <div className='w-full '>
            <LoginClient />
          </div>
          <div className='w-full'>
            <div className='w-[600px] h-[600px]'>
              <KaitenSushi />
            </div>
          </div>
      </div>
    </div>
  )
}

