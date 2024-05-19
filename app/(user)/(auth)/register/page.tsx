import { Metadata } from 'next'
import RegisterClient from '@/app/(user)/(auth)/register/RegisterC';
import PlateSushi from '@/app/components/rive/plateSushi';

export const metadata: Metadata = {
    title: 'Sign Up | Hakuro ',
    description: 'Hakuro Tech Dwi Aji Personal Website',
    applicationName: 'Hakuro Sakura App ',
    referrer: 'origin-when-cross-origin',
    keywords: ['Dwis Aji', 'Front End Developer','indonesia', 'Japan', 'Data Analyst', 'UI/UX Designer'],
    authors: [{ name: 'Dwis Aji' }, { name: 'Dwis Aji', url: 'https://hakuro.tech' }],
    creator: 'Dwis Aji',
    publisher: 'Dwis Aji',
    
  
  }



export default async function Page() {
  
  
  
  
  return (
    <div className='minh-screen min-w-screen'>
      <div className='w-full h-full gap-3 flex flex-col lg:flex-row'>
        <div className='w-full flex justify-center items-center'>
        <RegisterClient />
        </div>
        <div className='w-full flex justify-center items-center'>
          <div className='flex flex-col items-center'>
            <p>Hover to plate to rotate</p>
          <PlateSushi />
          </div>
        </div>
      </div>
      
    </div>
    )
}

