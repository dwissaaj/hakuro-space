'use client'
import { Button } from '@nextui-org/react'
import React, { useState } from 'react'

export default function VerificationC() {
    const [isState, setisState] = useState({
        isLoading: false,
        isDisabled: false,
        isTextShow: false
    })
    const sendVerify = async () => {
        try {
            setisState({ ...isState, isLoading: true })
            await fetch("/api/user/verification", {
                method: 'POST'
            })
            console.log('success at send verification')
            setisState({ ...isState, isLoading: false, isDisabled: true, isTextShow: true })
        }
        catch (error) {
            console.log('error at send verify', error)
        }
        
        
    }
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center'>
            <div>
                <h1 className='text-2xl text-secondary'>Confirmation Url Will be Send to Your Email</h1>
            </div>
            <div>
                <div className='mt-8 text-lg'>
                    <Button isDisabled={isState.isDisabled} isLoading={isState.isLoading} onClick={() => sendVerify()} className='w-full' variant='solid' color='primary'>Send It!!</Button>
                </div>
                <div>
                    {
                        isState.isTextShow ? (
                            <h1 className='italic mt-8 text-primary'>Send It! Just Click The Url</h1>
                        ) : (
                            <h1 className='italic mt-8 text-primary'>Did You Know Onigiri Using Rice?</h1>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
