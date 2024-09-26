
 
import { useEffect } from 'react'
import ErrorGate from './components/rive/errorGate'
import { Link } from '@nextui-org/react'
 
export default function NotFound() {
  return (
    <div className='flex flex-col h-screen my-auto items-center'>
        <div className='m-auto text-center justify-center'>
            <ErrorGate />
            <Link  size='lg' href='/'>Go Back Home</Link>
        </div>
    </div>
  )
}