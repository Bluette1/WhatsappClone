import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Text, View } from '../components/Themed';
import users from '../data/Users'
import ContactListItem from '../components/ContactListItem'

export default function ContactsScreen() {

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
