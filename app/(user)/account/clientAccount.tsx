'use client'
import React from 'react'
import { Tab, Tabs } from '@nextui-org/react'
import Profile from './(profile)/clientProfile'
import SignOut from './signout/clientSignOut'
import User from './user/clientUser'
export default function ClientAccunt() {

  return (
    <div className='w-full h-lvh flex flex-col mt-8 mb-42 items-center'>
      <Tabs  color='primary' variant='bordered' aria-label='options account'>
      <Tab className='w-3/4 h-full' key={'user'}  title='Account'>
          <User />
        </Tab>
        <Tab isDisabled className='w-3/4 h-full' key={'profile'}  title='Profile'>
          <Profile />
        </Tab>
        <Tab className='w-3/4  h-full' key={'signout'} title='Sign Out' >
          <SignOut />
        </Tab>
        <Tab className='w-3/4' isDisabled key={'preference'} title='Preference'>
          Preference
        </Tab>
      </Tabs>
    </div>
  )
}
