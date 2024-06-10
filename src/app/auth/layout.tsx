import { currentUser } from '@clerk/nextjs'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'

const layout = async ({children}:{children:ReactNode}) => {
    const user = await currentUser()
    if (user) redirect('/')
  return (
    <div className='h-screen flex w-full justify-center'>
      <div className='w-[600px] ld:w-full flex flex-col items-start p-6'>
        <Image 
          src="/images/logome.png" 
          alt='APP LOGO'
          sizes='100vw'
          style={{
            width:'20%'
          }}
          width={0}
          height={0}
        />
        {children}
      </div>
      <div className='hidden lg:flex flex-1 w-full max-h-full max-w-4000px overflow-hidden relative 
      bg-cream flex-col pt-10 pl-24 gap-3'>
        <h2 className="text-gravel md:text-4xl font-bold">
          {"Hi, I'm your  AI powered sales assistant, Solo Manger!"}
        </h2>
        <p>
          {"Solo Manager is capable handling the Complex data mangemant Without"} <br />
           {"Usual methods"}
        </p>
        <Image
        src="/images/app-ui.png"
        alt='APP UI'
        sizes='100vw'
        width={0}
        height={0}
        className='absolute shrink !w-[1600px] top-48'
        />
      </div>
    </div>
  )
}
 
export default layout
