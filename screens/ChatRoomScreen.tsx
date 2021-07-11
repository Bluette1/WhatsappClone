import React from 'react';
import {Text} from 'react-native';
import {useRoute} from '@react-navigation/native';

const ChatRoomScreen = () => {
  const route = useRoute();
  return (
   <Text>Chat room</Text>
  )
}
export default ChatRoomScreen;