import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import { createMessage, updateChatRoom } from '../../src/graphql/mutations';

const InputBox = (props) => {
  const { chatRoomId } = props;
  const [message, setMessage] = useState('');
  const [myUserId, setMyUserId] = useState('');
  const onMicrophonePress = () => {
    console.warn('Microphone')
  }
  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
      setMyUserId(userInfo.attributes.sub);
    };

    fetchUser();
  }, []);

  const updateChatRoomLastMessage = async (messageIdstr: string) => {
    try {
      await API.graphql(graphqlOperation(
        updateChatRoom,
        { input: {id: chatRoomId, lastMessageId: messageIdstr } }
      ));

    } catch (e) {
      console.log(e)
    }

  }

  const onSendPress = async () => {
    console.warn(`Sending: ${message}`);
    //Send message to the backend
    try {
      const newMessageData = await API.graphql(graphqlOperation(createMessage, {
        input: {
          content: message,
          userId: myUserId,
          chatRoomId,
        }
      }));

      // console.log('newMessageData: ', newMessageData);

      updateChatRoomLastMessage(newMessageData.data.createMessage.id)
    } catch (error) {

    }
    setMessage('');
  }
  const onPress = () => {
    if (!message) {
      onMicrophonePress();
    } else {
      onSendPress();
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name="laugh-beam" size={24} color='grey' />
        <TextInput style={styles.textInput}
          placeholder={'Type a message'}
          multiline
          value={message}
          onChangeText={setMessage}
        />
        <Entypo style={styles.icon} name='attachment' size={24} color='grey' />
        {!message && <Fontisto style={styles.icon} name='camera' size={24} color='grey' />}
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
          {!message
            ?
            <MaterialCommunityIcons name="microphone" size={24} color='white' />
            :
            <MaterialIcons name="send" size={24} color='white' />
          }
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default InputBox;