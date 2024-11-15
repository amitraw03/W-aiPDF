import { Button } from '@/components/ui/button'
import { Layout } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Sidebar() {
    return (
        <div className='shadow-md h-screen p-7'>
            <Image src="/logo.svg" alt="Logo" width={90} height={90} className='ml-8' />

            <div className='pt-6'>
                 <Button className='w-full'>+ Upload</Button>

                 <div className='flex gap-2'>
                     <Layout/>
                     <h2>Workspace</h2>
                 </div>
            </div>
        </div>
    )
}

export default Sidebar
