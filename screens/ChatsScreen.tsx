import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Auth, graphqlOperation, API } from 'aws-amplify';
import { View } from '../components/Themed';
import ChatListItem from '../components/ChatListItem'
import NewMessageButton from '../components/NewMessageButton';
import { getUser } from './queries';

export default function ChatsScreen() {
  const [chatRooms, setChatRooms] = useState([]);
  useEffect(() => {
    const fetchChatRooms = async () => {
      try {
        const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true })
        const userData = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }));
        // console.log(userData);
        setChatRooms(userData.data.getUser.chatRoomUser.items)

      } catch (e) {
        console.log(e);
      }
    };
    fetchChatRooms()

  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: '100%' }}
        data={chatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item.chatRoom} />}>
        keyExtractor={(item) => item.id}
      </FlatList>
      <NewMessageButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
