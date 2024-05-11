'use client'
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button, Spinner } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
export default function CallBackVerify() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const userId = searchParams.get('userId')
  const secret = searchParams.get('secret')
  const [isData] = useState({
    userId: userId,
    secret: secret
  })
  const [isButton, setisButton] = useState({
    label: '',
    isLoading: false,
    isSuccess: false
  })
  const handleVerify = async () => {

    try {
      setisButton({ ...isButton, isLoading: true, label: ' Try To Confirm' })
      const verify = await fetch('/api/user/verification/verify', {
        method: 'POST',
        body: JSON.stringify(isData)
      })
      console.log('Finished to verify', verify)
      if(verify['status'] === 200) {
        setisButton({ ...isButton, isLoading: false, label: ' Success' })
        router.push('/account')
      }
      if(verify['status'] === 401) {
        setisButton({ ...isButton, isLoading: false, label: ' Error at Verifying' })
      }

    }

    catch (error: any) {
      console.log('Error at verify')
    }
    
   

  }

  return (
    <div className='w-full my-60 flex flex-col justify-center items-center'>
      <div className='flex flex-col gap-4'>
        <div>
          <Button isLoading={isButton.isLoading} onClick={() => handleVerify()}>Click To verify</Button>
        </div>
        <div>
          {
            isButton.isSuccess ?
              <p className='text-yellow-400'>{isButton.label}</p>

              :

              <p className='text-red-500'>{isButton.label}</p>
          }
        </div>
      </div>
    </div>
  )
}
