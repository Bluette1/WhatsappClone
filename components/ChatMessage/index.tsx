import React from 'react';
import { Message } from '../../types'
import { Text, View } from 'react-native';
import moment from 'moment';

export type ChatMessageProps = {
  message: Message
}

const ChatMessage = (props: ChatMessageProps) => {
  const { message } = props

  return (
    <View>
      <Text>{message.user.name}</Text>
      <Text>{message.content}</Text>
      <Text>{moment(message.createdAt).fromNow()}</Text>
    </View>
  )

}

export default ChatMessage;