import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'

type UserPropsOfMessageType = {
    avatar: string
    name: string
}

type MessagePropsOfMessageType = {
    text: string
    time: string
}

export type MessageType = {
    id: number
    user: UserPropsOfMessageType
    message: MessagePropsOfMessageType
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar,
        name: 'Ivan',
    },
    message: {
        text: 'Hello, she didn’t do anything and rested all day, how are you?',
        time: '09:00',
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar,
        name: 'Alex',
    },
    message: {
        text: 'Hello, how are you, what did you do yesterday?',
        time: '09:01',
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                <div>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>
                <MessageSender M={Message} />
            </div>
        </div>
    )
}

export default HW1
