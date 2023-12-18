import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';

const Images = require('../assets/Home.png')

const Calling = ({ navigation }) => {
    return (
        <View style={styles.container }>
            <Image source={Images} resizeMode='cover' style={styles.image}></Image>
            <View style={styles.content}>
                <Image style={styles.user} source={require('../assets/User.png')}></Image>
                <Text style={styles.name}>Richard Lewis</Text>
                <Text style={styles.ringing}>Ringing ...</Text>
            </View>
            <View style={styles.tools}>
                <Image style={styles.speaker} source={require('../assets/Speaker.png')}></Image>
                <TouchableOpacity onPress={() => navigation.navigate('EndCalling')}>
                <Image style={styles.close} source={require('../assets/Close.png')}></Image>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    user: {
      position: 'absolute', 
      top: 50, 
      left: 98, 
    },
    content: {
        width: 360,
        height: 100,
        marginTop: -660,
        position: 'relative',
    },
    name: {
        top: 280,
        left: 80,
        fontSize: 30,
        fontWeight: 'bold',
    },
    ringing: {
        top: 300,
        left: 140,
        fontSize: 20,
        opacity: 0.5,
    },
    tools: {
        top: 400,
        flexDirection: 'row',
    },
    close: {
        left: 15,
    },
    speaker: {
        right: 10,
    },
    
});


export default Calling;