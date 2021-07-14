import moment from 'moment';
import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { Auth, graphqlOperation, API } from 'aws-amplify';
import { User } from '../../types';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { createChatRoom, createChatRoomUser } from '../../src/graphql/mutations'
import Navigation from '../../navigation';

export type ContactListItemProps = {
  user: User;
}

const ContactListItem = (props: ContactListItemProps) => {
  const { user } = props;
  const navigation = useNavigation();
  const onClick = async () => {
    console.warn("Hello")
    // Navigate to chat room with this user

    try {
      // 1. Create a new chat room
      const chatRoomData = await API.graphql(
        graphqlOperation(createChatRoom, { input: {} }) 
      );
      if (!chatRoomData.data) {
        console.log('Failed to create a chat room.');
        return;
      }

      const newChatRoom = chatRoomData.data.createChatRoom;
      // 2. Add user to the chat room
      await API.graphql(graphqlOperation(
        createChatRoomUser, {input: {
          userId: user.id,
          chatRoomId: newChatRoom.id
        }}
      ));
      // 3. Add authenticated user to the chat room
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
      await API.graphql(graphqlOperation(
        createChatRoomUser, {input: {
          userId: userInfo.attributes.sub,
          chatRoomId: newChatRoom.id
        }}
      ));
      navigation.navigate('ChatRoom', {
        id: newChatRoom.id,
        name: "Hard coded name",
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