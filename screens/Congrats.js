import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView , Platform} from 'react-native'; 
import { useState, useEffect, useRef } from 'react';

import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
const image = require('../assets/Pattern_bgr.png');

const Congrats = ({ navigation }) => {
    const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image_bgr}></ImageBackground>
            <View style={styles.congrats}>
                <Image source={require('../assets/Illustration.png')}></Image>
                <View style={styles.text_congrats}>
                    <Text style={styles.congrats_title}>Congrats!</Text>
                    <Text style={styles.congrats_content}>Your Profile Is Ready To Use</Text>
                </View>
                
                <TouchableOpacity 
                        style={styles.btn_order} 
                        onPress={async () => {
                            await schedulePushNotification();
                            navigation.navigate('MyTab');
                        }}
                    >
                        <Text style={styles.button_text}>Try Order</Text>
                    </TouchableOpacity>

            </View>
        </View>
    );
};
async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Register successfully!",
        body: 'Welcome to the DIDFOOD app',
        data: { data: 'goes here' },
      },
      trigger: { seconds: 2 },
    });
  }
  
  async function registerForPushNotificationsAsync() {
    let token;
  
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    return token;
  }

const styles = StyleSheet.create ({
    container: {
        flex: 1
    },
    image_bgr: {
        height: '60%',
    },
    congrats: {
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 250,
    },
    text_congrats: {
        alignItems: 'center',
        top: 20,
    },
    congrats_title: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#6B50F6',
    },
    congrats_content: {
        fontWeight: 'bold',
        fontSize: 20,
        top: 5,
    },
    btn_order: {
        top: 260,
        backgroundColor: '#6B50F6',
        justifyContent: 'center',
        width: 120,
        height: 50,
        borderRadius: 10,
    },
    button_text: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,

    }
});

export default Congrats;