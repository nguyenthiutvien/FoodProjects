import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'; 
import * as Linking from 'expo-linking';
const image = require('../assets/Home.png');

const SetLocation = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode='cover' style={styles.img}></ImageBackground>
            <TouchableOpacity style={styles.icon} onPress={()=> navigation.navigate('ConfirmOrder')}>
            <Image source={require('../assets/Icon_Back.png')} />
            </TouchableOpacity>     
            <View style={styles.header}>
                <Text style={styles.photo_text}>Set Your Location</Text>
                <Text style={styles.paymentInfo}>This data will be displayed in your account</Text>
                <Text style={styles.paymentInfo}>profile for security</Text>
            </View>
            <View style={styles.location}>
                <View style={styles.location_header}>
                    <Image style={styles.icon_location} source={require('../assets/Icon_location.png')}></Image>
                    <Text style={styles.location_text}>Your Location</Text>
                </View>
                <TouchableOpacity style={styles.btn_location} onPress={() => Linking.openURL('https://www.google.com/maps')}>
                    <Text style={styles.btnText}>Set Location</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_next} onPress={() => navigation.navigate('Congrats')}>
                    <Text style={styles.button_text}>Next</Text>
                </TouchableOpacity>
            </View>
        </View> 
    );
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
    },
    img: {
        width: 390,
        height: '100%',
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
        fontSize: 36,
        height: 60,
        bottom: 640,
        left: 28,
        position: 'relative',
    },
    paymentInfo: {
        bottom: 640,
        left: 28,
    },
    location: {
        bottom: 620,
        left: 28,
        backgroundColor: '#fff',
        width: 340,
        height: 125,
        borderRadius: 15,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        elevation: 2,
    },
    location_header: {
        top: 8,
        left: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    location_text: {
        fontWeight: 'bold',
        left: 15,
    },
    btn_location: {
        alignItems: 'center',
        top: 30,
        backgroundColor: '#F6F6F6',
        width: 320,
        height: 50,
        borderRadius: 15,
        left: 10,
    },
    btnText: {
        top: 15,
        fontWeight: 'bold',
    },
    btn_next: {
        alignItems: 'center',
        justifyContent: 'center',
        top: 360,
        left: 110,
        backgroundColor: '#6B50F6',
        width: 120,
        height: 52,
        borderRadius: 10,
    },
    button_text: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
    }
})

export default SetLocation;