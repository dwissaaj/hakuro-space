"use client"
import { Card, CardBody, CardHeader, Code, Spinner } from '@nextui-org/react'
import Link from 'next/link'
import useSWR from "swr"
import axios from 'axios'


export default function User() {
    const fetcher = (url: string) => axios.get(url).then(res => res.data)
    const { data, isLoading } = useSWR('/api/user/user', fetcher)



    return (
        <div className='w-full flex justify-center items-center'>
            <div className='w-3/4'>
                <Card className='h-full w-full text-center items-center justify-center'>
                    <CardHeader className='text-2xl text-center'>Your Account</CardHeader>
                    {
                        isLoading ?
                            <CardBody>
                                <Spinner label='Taking your identity' />
                            </CardBody>
                            :
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
                                    <Code>{data?.created}</Code>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <div className='flex flex-col items-center'>
                                        <p>Email Verification</p>
                                        {
                                            data?.verification ?
                                                <Code color='success'>Verified</Code>

                                                :
                                                <div className='flex flex-col gap-2 items-center'>
                                                    <Code color='danger'>Not Verified</Code>
                                                    <Code color='secondary'>
                                                        <Link href={"/account/verification"}>Verify Now</Link>
                                                    </Code>
                                                </div>
                                        }
                                    </div>

                                </div>
                            </CardBody>
                    }
                </Card>
            </div>
        </div>
    )
}