'use client'
import React, { useState } from 'react'
import { object, string } from 'yup';
import { EmailIcon } from '../../../components/icon/EmailIcon'
import { PasswordIcon } from '../../../components/icon/PasswordIcon';
import { PasswordHideIcon } from '../../../components/icon/PasswordHideIcon';
import { Input, Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
export default function LoginClient() {

  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter()
  const toggleVisibility = () => setIsVisible(!isVisible);
  let loginSchema = object({
    email: string().email().required(),
    password: string().min(8).required()
  })
  const [isData, setIsData] = useState({
    password: '',
    email: '',
  })
  const [isError, setIsError] = useState({
    isEmailError: false,
    isPasswordError: false,
    emailErrorMessage: '',
    passwordErrorMessage: '',
    isLoading: false
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setIsData({ ...isData, [name]: value })


  }
  const handleLogin = async () => {


    setIsError({ ...isError, isLoading: true })
    await loginSchema.validate(isData)
    const isVal = await loginSchema.isValid(isData)
    if (isVal == true) {
      try {
        const login = await fetch('/api/user/login', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(isData)
        })
        console.log("logged at", login)
        console.log("type of", typeof(login))
        console.log("type", Object.keys(login))
        if (login['status'] === 200) {
          router.push('/account')
        }
        
        else if (login['status'] == 404) {
          setIsError((prev) => ({
            ...prev,
            isEmailError: true,
            isLoading: false,
            emailErrorMessage: 'No Account Detected please register'
          }))
        }
        else if (login['status'] == 401) {
          setIsError((prev) => ({
            ...prev,
            isPasswordError: true,
            isLoading: false,
            passwordErrorMessage: 'Wrong Password or Account please check again'
          }))
        }


      }
      catch (e) {
        console.log('error at login',e)
        
      }
      finally {
        setIsError((prev) => ({
          ...prev,
          isLoading: false,
        }))
      }
    }


  }
  return (
    <div className='p-4 mt:2 w-full flex flex-col items-center gap-4 justify-center'>
      <div className='text-center '>
        <h1 className='text-2xl lg:text-5xl'>Login To Your Account</h1>

      </div>
      <div className='max-w-sm w-full md:w-1/2 p-8 border-2 border-primary-500 rounded-lg shadow-lg shadow-secondary-400'>
        <div className='flex flex-col gap-4'>
          <form >
            <Input
              type="email"
              name='email'
              description='Your Email'
              onChange={handleChange}
              value={isData.email}
              label="Your Majesty Email"
              variant="bordered"
              endContent={<EmailIcon className="size-4" />}
              labelPlacement="outside"
              isInvalid={isError.isEmailError}
              errorMessage={isError.emailErrorMessage}
              isRequired={true}

              className="max-w-xs"

            />


            <Input
              type={isVisible ? "text" : "password"}
              onChange={handleChange}
              value={isData.password}
              name='password'
              description='Minimal 8 Digit with Lowercase, a numeric and Symbol'
              variant="bordered"
              label="Your Secret"
              labelPlacement="outside"
              isInvalid={isError.isPasswordError}
              errorMessage={isError.passwordErrorMessage}
              isRequired={true}

              className="max-w-xs"
              endContent={
                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                  {isVisible ? (
                    <PasswordIcon className="size-4 text-default-400 pointer-events-none" />
                  ) : (
                    <PasswordHideIcon className="size-4 text-default-400 pointer-events-none" />
                  )}
                </button>
              }
            />


            <Button isLoading={isError.isLoading} onClick={() => handleLogin()} className='mt-4 w-full' color="primary">
              Login
            </Button>
          </form>


        </div>
          <div className='mt-8'>
          <p>First Time Go here? <Link className='hover:text-secondary-500 hover:underline' href='/register'> Register Here</Link></p>
          </div>
      </div>

    </div>
  )
}
