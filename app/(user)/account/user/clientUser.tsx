"use client"
import { useDisclosure, Modal, ModalBody, ModalFooter, Button, Card, CardBody, CardFooter, CardHeader, Image, Snippet, ModalContent, ModalHeader, Code } from '@nextui-org/react'

import useSWR from "swr"
import axios from 'axios'
import Link from 'next/link'


function VerificationEmailUser(isVerified: boolean) {
    if (isVerified === true) {
        return (
            <Code color='success'>Verified</Code>
        )
    }

    return (
        <div className='flex flex-col gap-2 items-center'>
            <Code color='danger'>Not Verified</Code>
            <Code color='secondary'>
            <Link href={"/account/verification"}>Verify Now</Link>
            </Code>
        </div>
    )


}
export default function User() {
    const fetcher = url => axios.get(url).then(res => res.data)
    const { data, error } = useSWR('/api/user/user', fetcher)
    console.log("current user", data)


    return (
        <div className='w-full flex justify-center items-center'>
            <div className='w-1/2'>
                <Card className='h-full w-full'>
                    <CardHeader className='w-full text-center'>Your Account</CardHeader>
                    <CardBody className='flex flex-col gap-4 items-center'>
                        <div className='flex flex-col items-center'>
                            <p>Your ID</p>
                            <Code>{data?.id}</Code>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p>Your Email</p>
                            <Code>{data?.email}</Code>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p>Join Us at</p>
                            <Code>{data?.created.substring(0, 10)}</Code>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-col items-center'>
                                <p>Email Verification</p>
                                <VerificationEmailUser isVerified={data?.verification} />
                            </div>
                            
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}