import 'react-native-gesture-handler';
import { withAuthenticator } from 'aws-amplify-react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Amplify, { Auth, graphqlOperation, API } from 'aws-amplify';
import config from './src/aws-exports';
import {getUser} from './src/graphql/queries';
import {createUser} from './src/graphql/mutations';
Amplify.configure(config);

const randomImages = [
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-3.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-6.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-9.jpg',
];

const getRandomImage = () => {
  return randomImages[Math.floor(Math.random() * randomImages.length)]
}
function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  useEffect(() => {
    const fetchUser = async () => {
      
      //Get the authenticated user from Auth
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true })
      if (userInfo) {
        //Fetch user from Backend with the user id from Auth
        const userData = await API.graphql(graphqlOperation(getUser, {id: userInfo.attributes.sub}));

        if (userData.data.getUser) {
          console.log('User is already registered');
          return;
        } 

        //If there is no user with id in the DB, create one
        const newUser = {
          id: userInfo.attributes.sub,
          name: userInfo.username,
          imageUri: getRandomImage(),
          status: 'Hey, I am using WhatsApp'
        }

        await API.graphql(graphqlOperation(createUser, {input: newUser}));

      }
    }
    fetchUser();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App);