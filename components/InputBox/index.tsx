import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

const InputBox = () => {
  const [message, setMessage] = useState('');
  const onMicrophonePress = () => {
    console.warn('Microphone')
  }
  const onSendPress = () => {
    console.warn(`Sending: ${message}`);
    //Send message to the backend
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