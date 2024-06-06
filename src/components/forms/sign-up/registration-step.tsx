"use client"
import { useAuthContextHook } from '@/context/use-auth-context'
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import TypeSelectionForm from './type-selection-from'
import dynamic from 'next/dynamic'
import { Spinner } from '@/components/spinner'
import OTPForm from './otp-form'

const DetailForm = dynamic(() => import('./account-details-form'), {
  ssr: false,
  loading: Spinner,
})


type Props = {}

const RegistrationFromStep = (props: Props) => {
    const {register, setValue, formState:{errors}} = useFormContext()
    const { currentStep } = useAuthContextHook()
    const [onOTP, setonOTP] = useState<string>('')
    const [onUserType, setonUserType] = useState<'owner'|'student'>('owner')
    setValue('otp', onOTP)

    switch(currentStep){
        case 1:
            return (
                <TypeSelectionForm register={register} userType={onUserType} setUserType={setonUserType}>

                </TypeSelectionForm>
            )
        case 2:
          return (
            <DetailForm register={register} errors={errors}/>
          )
        case 3:
          return (
            <OTPForm
              onOTP={onOTP}
              setOTP={setonOTP}
              />
          )
    }


  return (
    <div>RegistrationFromStep</div>
  )
}
""
export default RegistrationFromStep