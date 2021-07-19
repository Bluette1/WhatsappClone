import React, { useEffect, useState } from 'react';
import { Text, FlatList, ImageBackground } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import {messagesByChatRoom} from '../src/graphql/queries';
import {onCreateMessage} from '../src/graphql/subscriptions';

import ChatMessage from '../components/ChatMessage';
import {BG} from '../assets/images/BG.png';
import InputBox from '../components/InputBox';
import { Message } from '../types';

const ChatRoomScreen = () => {
  const [messages, setMessages] = useState([]);
  const [myId, setMyId] = useState(null);
  const route = useRoute();
  useEffect(() => {
    const fetchMessages = async() => {
      const messagesData = await API.graphql(graphqlOperation(
        messagesByChatRoom,
        {chatRoomId: route.params.id, sortDirection: 'DESC'},
      ));
      
      setMessages(messagesData.data.messagesByChatRoom.items);
    };

    fetchMessages();

  }, []);

  useEffect(() => {

    const fetchUser = async() => {
      const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true});

      setMyId(userInfo.attributes.sub);
    };

    fetchUser();

  }, []);
  const addMessageToState = (newMessage) => {
    setMessages([newMessage, ...messages])
  }

  useEffect(() => { //subscriptions are synchronous
    try {
      const subscription = API.graphql(
        graphqlOperation(onCreateMessage)
      ).subscribe({
        next: (data) => {
          console.log(data)
          const newMessage = data.value.data.onCreateMessage;
          if (newMessage.chatRoomId !== route.params.id) {
            return;
          }
          addMessageToState(newMessage);
        }
      })
      return () => subscription.unsubscribe();
      
    } catch (e) {
      console.log(e)
    }
    
  }, []);

  if (messages.length === 0) {
    return null;
  }

  return (
    <ImageBackground style={{width: '100%', height: '100%'}} source={BG}>
        <FlatList
      data={messages}
      renderItem={({ item }) => <ChatMessage message={item} myId={myId} />}
      inverted
      >
    </FlatList>
    <InputBox chatRoomId={route.params.id} />
    </ImageBackground>
  )
}
export default ChatRoomScreen;