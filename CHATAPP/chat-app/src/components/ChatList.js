import React from 'react'
import styles from "./styles.module.css"
import { useChat } from '../context/ChatContext'
import ChatItem from './ChatItem'
import ScrollableFeed from "react-scrollable-feed"

function ChatList() {
    const { messages } = useChat()
    return (
        <div className={styles.chatlist}>
            <div>
                {messages.map((item, key) => (<ChatItem key={key} item={item}></ChatItem>))}
            </div>
        </div>
    )
}

export default ChatList
