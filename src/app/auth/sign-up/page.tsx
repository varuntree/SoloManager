"use client"
import HighLightBar from '@/components/forms/highlight-bar'
import ButtonHandler from '@/components/forms/sign-up/button-handler'
import SignUpFormProvider from '@/components/forms/sign-up/from-provider'
import RegistrationFromStep from '@/components/forms/sign-up/registration-step'
import React from 'react'

type Props = {}

const Signup = (props: Props) => {
  return (
    <div className='flex-1 pt-10 md:px-16 w-full'>
      <div className='flex flex-col h-full gap-3'>
        <SignUpFormProvider>
          <div className='flex flex-col justify-center gap-3'>
              <RegistrationFromStep/>
              <ButtonHandler/>
              <HighLightBar/>
          </div>
        </SignUpFormProvider>
      </div>
    </div>
  )
}

export default Signup