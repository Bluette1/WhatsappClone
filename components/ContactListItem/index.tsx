import moment from 'moment';
import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { Auth, graphqlOperation, API } from 'aws-amplify';
import { User } from '../../types';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { createChatRoom, createChatRoomUser } from '../../src/graphql/mutations'
import Navigation from '../../navigation';
import { getUser } from '../../screens/queries';
import _ from 'lodash';
import { ChatRoomUser } from '../../src/API';

export type ContactListItemProps = {
  user: User;
}

const ContactListItem = (props: ContactListItemProps) => {
  const { user } = props;
  const navigation = useNavigation();
  const getChatRoom = (currUsrChats: [ChatRoomUser], usrChats: [ChatRoomUser]) => {
    const chatRoom = _.intersectionBy(currUsrChats, usrChats, 'chatRoomId');
    if (chatRoom.length > 0) {
      return chatRoom[0].chatRoom;
    }
    return null;
  }
  const onClick = async () => {
    console.warn("Hello")
    // Navigate to chat room with this user

    try {

      //TODO: Create a new chat room only if it doesn't exist 
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });

      const currUserData = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }));
      const userData = await API.graphql(graphqlOperation(getUser, { id: user.id }));

      const currUsrChats = currUserData.data.getUser.chatRoomUser.items;
      const usrChats = userData.data.getUser.chatRoomUser.items;
      let chatRoom = getChatRoom(currUsrChats, usrChats);


      if (!chatRoom) {
        // 1. Create a new chat room
        const chatRoomData = await API.graphql(
          graphqlOperation(createChatRoom, { input: {} })
        );
        if (!chatRoomData.data) {
          console.log('Failed to create a chat room.');
          return;
        }

        const newChatRoom = chatRoomData.data.createChatRoom;
        chatRoom = newChatRoom;
        // 2. Add user to the chat room
        await API.graphql(graphqlOperation(
          createChatRoomUser, {
            input: {
              userId: user.id,
              chatRoomId: newChatRoom.id
            }
        }
        ));
        // 3. Add authenticated user to the chat room
        // const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
        await API.graphql(graphqlOperation(
          createChatRoomUser, {
            input: {
              userId: userInfo.attributes.sub,
              chatRoomId: newChatRoom.id
            }
        }
        ));
      }
      navigation.navigate('ChatRoom', {
        id: chatRoom.id,
        name: user.name,
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{ uri: user.imageUri }} style={styles.avatar} />
          <View style={styles.midContainer}>
            <Text style={styles.username}>{user.name}</Text>
            <Text numberOflines={2} style={styles.status}>{user.status}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ContactListItem;