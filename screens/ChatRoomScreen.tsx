import React, { useEffect, useState } from 'react';
import { Text, FlatList, ImageBackground } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import {messagesByChatRoom} from '../src/graphql/queries';
import ChatMessage from '../components/ChatMessage';
import {BG} from '../assets/images/BG.png';
import InputBox from '../components/InputBox';

const ChatRoomScreen = () => {
  const [messages, setMessages] = useState(null);
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

  if (!messages) {
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