
import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from '@nextui-org/react'
import { cookies } from 'next/headers'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function SignOut() {
  const router = useRouter()
  const signOut = async () => {
    try {
      const signOut = await fetch('/api/user/logout',
        {method: 'DELETE'}
      )
      if(signOut['status'] === 200) {
        router.push('/')
      }


    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <div className='w-full h-1/2'>
      <Card className='h-full'>
        <CardHeader className='text-md lg:text-xl'>Wanna Logout?</CardHeader>
        <Divider />
        <CardBody className=''>
          Thanks for see all details in here, if you interested with me please go to contact button
        </CardBody>
        <CardFooter>
          <Button onClick={() => signOut()} className='text-black' color='danger'>Sign Out</Button>
        </CardFooter>
      </Card>
    </div>


  )
}
