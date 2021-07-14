import React, { useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Auth, graphqlOperation, API } from 'aws-amplify';
import { View } from '../components/Themed';
import chatRooms from '../data/ChatRooms'
import ChatListItem from '../components/ChatListItem'
import NewMessageButton from '../components/NewMessageButton';
import { getUser } from '../src/graphql/queries';

export default function ChatsScreen() {
  useEffect(() => {
    const fetchChatRooms = async () => {
      try {
        const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true })
        const userData = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }));
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
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}>
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
