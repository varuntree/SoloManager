'use client'
import React, { Dispatch, SetStateAction } from 'react'
import {  FieldValues, UseFormRegister } from 'react-hook-form'
import UserTypeCard from './user-type-card'


type props = {
    register: UseFormRegister<FieldValues>
    userType: "owner"|"student",
    setUserType: Dispatch<SetStateAction<'owner'|'student'>>
}


const TypeSelectionForm = ({register, userType, setUserType}:props) => {
  return (
   <>
    <h2 className='text-gravel md:text-4xl font-bold'>Create an account</h2>
    <p className='text-iridium md:text-sm'>
        Choose the Experience that best suits you
    </p>
    <UserTypeCard register={register}  setUserType={setUserType} 
     userType={userType} text='Setting up my account for my company' title='I own a business' value='owner' ></UserTypeCard>
    <UserTypeCard register={register} setUserType={setUserType} 
     userType={userType} text='Setting up my account for my company' title='I own a business' value='student' ></UserTypeCard>
   </>
  )
}

export default TypeSelectionForm
