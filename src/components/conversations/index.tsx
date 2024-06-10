'use client'
import { useConversation } from '@/hooks/conversation/use-conversations'
import React from 'react'
import TabsMenu from '../tabs'
import { TABS_MENU } from '@/constants/menu'
import { TabsContent } from '@radix-ui/react-tabs'
import ConversationSearch from './search'
import { Loader } from '../loader'
import { CardDescription } from '../ui/card'
import ChatCard from './chatcard'

type Props = {
    domains?: 
        | {
            name: string
            id: string
            icon: string
        }[] | undefined
}

const ConversationMenu = ({domains}: Props) => {
    const { loading, register, onGetActiveChatMessages, chatRooms } = useConversation()
  return (
    <div className='py-3 px-0'>
        <TabsMenu triggers={TABS_MENU}>
            <TabsContent value='unread'>
                <ConversationSearch domains={domains} register={register}/>
                <div className="flex flex-col">
                    <Loader loading={loading}>
                    {chatRooms.length ? (
                        chatRooms.map((room) => (
                        <ChatCard
                            seen={room.chatRoom[0].message[0]?.seen}
                            id={room.chatRoom[0].id}
                            onChat={() => onGetActiveChatMessages(room.chatRoom[0].id)}
                            createdAt={room.chatRoom[0].message[0]?.createdAt}
                            key={room.chatRoom[0].id}
                            title={room.email!}
                            description={room.chatRoom[0].message[0]?.message}
                        />
                        ))
                    ) : (
                        <CardDescription>No chats for you domain</CardDescription>
                    )}
                    </Loader>
                </div>
            </TabsContent>
        </TabsMenu>
    </div>
  )
}

export default ConversationMenu