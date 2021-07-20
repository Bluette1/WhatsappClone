import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { ChatRoom } from '../../types';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

export type ChatListItemProps = {
  chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
  const [otherUser, setOtherUser] = useState(null);
  const { chatRoom } = props;
  
  const navigation = useNavigation();
  const onClick = () => {
    navigation.navigate('ChatRoom', {id: chatRoom.id, name: otherUser.name});
  }
  useEffect(() => {
    const getOtherUser = async () => {
      try {
        const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
  
      if (chatRoom.chatRoomUsers.items[0].user.id === userInfo.attributes.sub) {
        setOtherUser(chatRoom.chatRoomUsers.items[1].user);
      } else {
        setOtherUser(chatRoom.chatRoomUsers.items[0].user);
      }
        
      } catch (e) {
        console.log(e);
      }
   
    };
    getOtherUser();
  }, []);

  if (!otherUser) { //Still loading
    return null;
  }
  
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
      <View style={styles.leftContainer}>
      <Image source={{ uri: otherUser.imageUri }} style={styles.avatar} />
        <View style={styles.midContainer}>
          <Text style={styles.username}>{otherUser.name}</Text>
          <Text numberOflines={2} style={styles.lastMessage}>{chatRoom.lastMessage ? `${chatRoom.lastMessage.user.name}: ${chatRoom.lastMessage.content}` : ''}</Text>
        </View>
      </View>
      <Text style={styles.time}>{chatRoom.lastMessage ? moment(chatRoom.lastMessage.updatedAt).format('DD/MM/YYYY') : ''}</Text>
    </View>
    </TouchableWithoutFeedback>
  );
}

export default ChatListItem;