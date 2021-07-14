import React, {useEffect, useState} from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Text, View } from '../components/Themed';
import ContactListItem from '../components/ContactListItem'
import { graphqlOperation, API } from 'aws-amplify';
import {listUsers} from '../src/graphql/queries';

export default function ContactsScreen() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await API.graphql(graphqlOperation(listUsers));
        setUsers(userData.data.listUsers.items);
      } catch (e) {
        console.log(e);
      }
    }
    fetchUser();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList 
        style={{width: '100%'}}
        data={users}
        renderItem={({ item }) => <ContactListItem user={item} />}>
        keyExtractor={(item) => item.id}
      </FlatList>
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
