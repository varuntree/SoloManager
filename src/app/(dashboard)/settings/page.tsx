import ChangePassword from '@/components/forms/settings/change-password'
import DarkModetoggle from '@/components/forms/settings/dark-mode'
import InfoBar from '@/components/infobar'
import BillingSetting from '@/components/settings/billing-settings'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <>
      <InfoBar/>
      <div className='overflow-y-auto w-full chat-window flex-1 h-0 flex flex-col gap-10 '>
        <BillingSetting/>
        <DarkModetoggle/>
      <ChangePassword/>
      </div>
    </>
    
  )
}

export default page