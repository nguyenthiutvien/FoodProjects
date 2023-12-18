import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'; 

const image = require('../assets/Home.png')

const Upload_Preview = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode='cover' style={styles.img}></ImageBackground>
            <TouchableOpacity style={styles.icon} onPress={()=> navigation.navigate('ConfirmOrder')}>
            <Image source={require('../assets/Icon_Back.png')} />
            </TouchableOpacity>     
                <View style={styles.header}>
                    <Text style={styles.photo_text}>Upload Your Photo</Text>
                    <Text style={styles.photo_text}>Profile</Text>
                    <Text style={styles.paymentInfo}>This data will be displayed in your account</Text>
                    <Text style={styles.paymentInfo}>profile for security</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.card}>
                        <TouchableOpacity style={styles.man_photo}>
                            <Image style={styles.man_icon} source={require('../assets/man_photo.png')}></Image>
                            <View style={styles.close_icon}>
                                <View style={styles.circle}>
                                    <Text style={styles.close_text}>x</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.btn_next} onPress={() => navigation.navigate('SetLocation')}>

                        <Text style={styles.button_text}>Next</Text>
                    </TouchableOpacity>
                </View>
              
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    body: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    img: {
        width: 390,
        height: '100%',
    },
    imagebg: {
        width: 390,
        height: '100%',
        position: 'relative',
    },
    icon: {
        marginBottom: 15,
        position: 'absolute',
        top: 60,
        left: 26,
    },
    header: {
        bottom: 20,
    },
    photo_text: {
        fontWeight: 'bold',
        fontSize: 40,
        height: 60,
        bottom: 640,
        left: 28,
        position: 'relative',
    },
    paymentInfo: {
        bottom: 640,
        left: 28,
    },
    man_photo: {
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 630,
    },
    close_icon: {
        bottom: 235,
        left: 95,
      },
    circle: {
    width: 26, 
    height: 26,
    borderRadius: 25,
    backgroundColor: 'green', 
    justifyContent: 'center',
    alignItems: 'center',
    },
    close_text: {
    color: 'white', 
    fontSize: 20, 
    },
    card: {
        top: 30,
    },

    btn_next: {
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 530,
        backgroundColor: '#6B50F6',
        width: 120,
        height: 52,
        borderRadius: 10,
    },
    button_text: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
    },
});

export default Upload_Preview;