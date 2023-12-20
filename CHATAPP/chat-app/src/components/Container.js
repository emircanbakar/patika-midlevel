import React, { useEffect } from 'react'
import ChatList from './ChatList'
import ChatForm from './ChatForm'
import { init, subsChat, subsInitialMessages } from "../socketApi"
import {useChat} from "../context/ChatContext"

function Container() {

  const {setMessages} = useChat()

  useEffect(() => {
    init()
    subsChat((message) => {
      setMessages((prevState) => [...prevState, { message }])
    })
    subsInitialMessages((messages) =>{ setMessages(messages)})
  }, [])
  return (
    <div className='App'>
      <ChatList />
      <ChatForm />
    </div>
  )
}

export default Container
