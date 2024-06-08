import { onGetAllAccountDomains } from '@/actions/settings'
import InfoBar from '@/components/infobar'
import { Separator } from '@/components/ui/separator'
import React from 'react'

type Props = {}

const ConversationsPage = async (props: Props) => {
    const domains = await onGetAllAccountDomains()
  return (
    <div className='w-full h-full flex'>
        <ConversationMenu domains={domains?.domains} />
        <Separator orientation='vertical' />
        <div className='w-ful flex flex-col'> 
            <div className='px-5'>
                <InfoBar/>
            </div>
            {/* <Messenger/> */}
        </div>
    </div>
  )
}

export default ConversationsPage