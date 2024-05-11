'use client'
import { Snippet } from "@nextui-org/react"
import { EmailIcon } from '@/app/components/icon/EmailIcon';
import { PersonIcon } from '@/app/components/icon/account/PersonIcon';
import { AgeIcon } from '@/app/components/icon/account/AgeIcon';
import { JobIcon } from '@/app/components/icon/account/JobIcon';
import { NameIcon } from '@/app/components/icon/account/NameIcon'
import { useState } from 'react';
type profile = {
    fullName: string,
    email: string,
    company: string,
    occupation: string
}
export default function ProfileCard({ fullName, email, company, occupation,}: profile) {
    let [isUser, setUser] = useState({
        fullName: '',
        email: '',
        occupation: '',
        company: '',
        userId: ''
    })
    
    return (
        <>
        
        <Snippet variant='flat' color='primary' className='w-full text-lg lg:text-3xl' symbol="Email" disableCopy={true} copyIcon={<PersonIcon />} >
                {isUser?.email}
            </Snippet>
            <Snippet variant='flat' color='primary' className='w-full text-lg lg:text-3xl' symbol="Name" disableCopy={true} copyIcon={<NameIcon />} >
                {isUser?.fullName}
            </Snippet>
    
            <Snippet variant='flat' color='primary' className='w-full text-lg lg:text-3xl' symbol="Comp" disableCopy={true} copyIcon={<AgeIcon />} >
                {isUser?.company}
            </Snippet>
            <Snippet variant='flat' color='primary' className='w-full text-lg lg:text-3xl' symbol="Occu" disableCopy={true} copyIcon={<JobIcon />} >
                {isUser?.occupation}
            </Snippet>
        </>
    )
}
