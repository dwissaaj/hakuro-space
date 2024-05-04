'use client'
import React, {useState} from 'react'
import { Button, Input } from '@nextui-org/react'
export default function ModalProfile() {
  const [isData, setIsData] = useState({
    fullName: '',
    org: '',
    occupation : ''
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    console.log(isData)
    setIsData({ ...isData, [name]: value })
   

  }
  
  return (
    <div className='flex flex-col gap-3'>
       <form className='flex flex-col gap-3'>
       <Input isDisabled={true} variant='bordered' color='primary' type="text" label="User ID" />
        <Input isDisabled={true} variant='bordered' color='primary' type="text" label="Email" />
         
         <Input 
         name='fullName'
         id='fullName'
         variant='bordered' 
         onChange={handleChange}
         color='primary' 
         type="text" 
         label="Full Name"
         value={isData.fullName} />


      <Input 
         name='occupation'
         id='occupation'
         variant='bordered' 
         onChange={handleChange}
         color='primary' 
         type="text" 
         label="Occupation"
         value={isData.occupation} />


         <Input 
         name='org'
         id='org'
         variant='bordered' 
         onChange={handleChange}
         color='primary' 
         type="text" 
         label="Organization/Company"
         value={isData.org} />

       </form>
       <Button>Update</Button>
    </div>
  )
}
