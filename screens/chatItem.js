import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TextInput, Button, ImageBackground, FlatList, Text, StyleSheet, TouchableOpacity , Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const image = require('../assets/Home.png')

const ChatItem = ({ navigation }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [isMessageSent, setIsMessageSent] = useState(false);
  
    useEffect(() => {
      if (isMessageSent) {
        const responseMessages = [
          { id: '1', text: 'Hello!', isSender: false },
          { id: '4', text: 'How can I assist you?', isSender: false },
        ];
  
        setTimeout(() => {
          setMessages([...messages, ...responseMessages]);
        }, 500);
      }
    }, [isMessageSent]);
  
    const handleSendMessage = () => {
      if (message.trim() !== '') {
        setMessages([...messages, { id: messages.length.toString(), text: message, isSender: true }]);
        setMessage('');
        setIsMessageSent(true);
      }
    };
  

 
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode='cover' style={styles.img}></ImageBackground>
      <TouchableOpacity style={styles.icon} onPress={()=> navigation.navigate('Chat')}>
        <Image source={require('../assets/Icon_Back.png')} />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.chat}>Chat</Text>
      </View>
      <StatusBar style="auto" />
      <View style={styles.louis_Kelly}>
        <Image style={styles.Kelly} source={require('../assets/Photo_Profile2.png')}></Image>
        <Text style={styles.KellyText}>Louis Kelly</Text>
        <View style={styles.status}>
          <Image style={styles.dot} source={require('../assets/dot.png')}/>
          <Text style={styles.time}>Online</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Calling')}>
            <Image style={styles.call_phone} source={require('../assets/Call_logo.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
  data={messages}
  keyExtractor={(item, index) => index.toString()} 
  renderItem={({ item }) => (
    <View
      style={[
        styles.messageContainer,
        { backgroundColor: item.isSender ? '#2196F3' : '#FFFFFF' },
        { alignSelf: item.isSender ? 'flex-end' : 'flex-start' },
      ]}
    >
      <Text
        style={[
          styles.messageText,
          { color: item.isSender ? '#FFFFFF' : '#000000' },
        ]}
      >
        {item.text}
      </Text>
    </View>
  )}
/>
    <View style={styles.inputContainer}>
  <TextInput
    style={styles.input}
    value={message}
    onChangeText={setMessage}
    placeholder="Type a message..."
  />
  <TouchableOpacity onPress={handleSendMessage}>
    <Icon name="send" size={25} color="#2196F3" />
  </TouchableOpacity>
</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  status: {
    display: 'flex',
  },
  icon: {
    marginBottom: 25,
    position: 'absolute',
    top: 60,
    left: 32,
  },
  chat: {
    fontWeight: 'bold',
    fontSize: 40,
    height: 60,
    top: 120,
    right: 130,
  },
  header: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  louis_Kelly: {
    flexDirection: 'row',
    backgroundColor: '#f5f6fa',
    width: 360,
    height: 100,
    borderRadius: 20,
    marginTop: 35,
    position: 'relative',
    marginBottom: 10,
  },
  Kelly: {
    position: 'absolute', 
    top: 20, 
    left: 18, 
  },
  KellyText: {
    fontSize: 20,
    fontWeight: 'bold',
    left: 100,
    top: 20,
  },
  dot: {
    left: 1,
    top: 65,
  },
  time: {
    top: 52,
    left: 10,
  },
  call_phone: {
    left: 190,
    top: 8,
  },
  messageContainer: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    marginBottom: 8,
    padding: 10,
  },
  messageText:{
    color: '#000000',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  input: {
    flex: 1,
    height: '90px',
    borderWidth: 0.5,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 8,
  },
});

export default ChatItem;