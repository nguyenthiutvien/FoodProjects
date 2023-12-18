import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Button,TouchableOpacity, ScrollView , FlatList, TextInput} from 'react-native';
import ChatItem from './chatItem';

const image = require('../assets/Home.png')

const ChatDetail = ({ navigation }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessages([...messages, { id: messages.length.toString(), text: message }]);
      setMessage('');
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
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>{item.text}</Text>
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
        <Button title="Send" onPress={handleSendMessage} />
      </View>
      </View>
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    status: {
        display: 'flex',
    },
    icon: {
      marginBottom: 15,
      position: 'absolute',
      top: 60,
      left: 32,
      // marginRight: 290,
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
      marginTop: 135,
      position: 'relative',
      marginBottom: 500,
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
      top: 28,
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
    messageText: {
      fontSize: 16,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      height: 40,
      borderWidth: 1,
      borderRadius: 16,
      padding: 10,
      marginRight: 8,
    },
});

export default ChatDetail;