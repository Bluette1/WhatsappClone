import React, { useEffect, useState } from 'react';
import { FlatList, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { messagesByChatRoom } from '../src/graphql/queries';
import { onCreateMessage } from '../src/graphql/subscriptions';

import ChatMessage from '../components/ChatMessage';
import { BG } from '../assets/images/BG.png';
import InputBox from '../components/InputBox';
import styles from '../components/ChatListItem/style';

const ChatRoomScreen = () => {
  const [messages, setMessages] = useState([]);
  const [myId, setMyId] = useState(null);
  const route = useRoute();
  const fetchMessages = async () => {
    const messagesData = await API.graphql(graphqlOperation(
      messagesByChatRoom,
      { chatRoomId: route.params.id, sortDirection: 'DESC' },
    ));

    setMessages(messagesData.data.messagesByChatRoom.items);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {

    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });

      setMyId(userInfo.attributes.sub);
    };
    fetchUser();
  }, []);

  useEffect(() => { //subscriptions are synchronous
    try {
      const subscription = API.graphql(
        graphqlOperation(onCreateMessage)
      ).subscribe({
        next: (data) => {

          const newMessage = data.value.data.onCreateMessage;
          if (newMessage.chatRoomId !== route.params.id) {
            return;
          }
          fetchMessages();
        }
      });
      return () => subscription.unsubscribe();

    } catch (e) {
      console.log(e)
    }

  }, []);

  return (
    <ImageBackground style={{ width: '100%', height: '100%' }} source={BG}>
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