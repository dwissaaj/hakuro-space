'use client'
import { Tab, Tabs } from '@nextui-org/tabs'
import React from 'react'
import BlogCardReady from './blogCardReady'

export default function TabBlog() {
  return (
    <div>
        <Tabs variant='light'>
        <Tab key={'all'} title='All' >
        
            </Tab>
            <Tab isDisabled key={'coding'} title='Coding' >
                
            </Tab>
            <Tab isDisabled key={'photo'} title='Photography' >
              
            </Tab>
            <Tab isDisabled key={'japan'} title='Japan' >
                
            </Tab>
            <Tab className='hidden lg:block' isDisabled key={'data'} title='Data' >
                
            </Tab>
        </Tabs>
    </div>
  )
}
