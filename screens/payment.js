import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'; 

const image = require('../assets/Home.png')

const Payment = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode='cover' style={styles.img}></ImageBackground>
            <TouchableOpacity style={styles.icon} onPress={()=> navigation.navigate('ConfirmOrder')}>
            <Image source={require('../assets/Icon_Back.png')} />
            </TouchableOpacity>            
            <View style={styles.header}>
                <Text style={styles.textPayment}>Payment</Text>
            </View>
            <View style={styles.card}>
                <View style={styles.paypal}>
                    <Image style={styles.iconPaypal} source={require('../assets/paypal_logo.png')}></Image>
                    <Text style={styles.number_card}>2121 6352 8465 ****</Text>
                </View>
                <View style={styles.visa}>
                    <Image style={styles.iconVisa} source={require('../assets/visa_logo.png')}></Image>
                    <Text style={styles.visa_card}>2121 6352 8465 ****</Text>
                </View>
                <View style={styles.payoneer}>
                    <Image style={styles.iconPayoneer} source={require('../assets/Payoneer_logo.png')}></Image>
                    <Text style={styles.payoneer_card}>2121 6352 8465 ****</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#FEFEFF',
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
    textPayment: {
        fontWeight: 'bold',
        fontSize: 40,
        height: 60,
        bottom: 640,
        left: 28,
        position: 'relative',
    },
    paypal: {
        bottom: 630,
        left: 26,
        backgroundColor: '#FFFFFF',
        width: 340,
        height: 75,
        borderRadius: 15,
        shadowColor: 'rgba(0, 0, 0, 0.5)', 
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 1, 
        shadowRadius: 4, 
        elevation: 4,
    },
    iconPaypal: {
        left: 22,
        top: 23,
    },
    number_card: {
        top: 4,
        left: 180,
        fontSize: 14,
    },
    visa: {
        bottom: 610,
        left: 26,
        backgroundColor: '#F6F6F6',
        width: 340,
        height: 75,
        borderRadius: 15,
    },
    visa_card: {
        top: -33,
        left: 180,
        fontSize: 14,
        opacity: 0.4,
    },
    iconVisa: {
        left: 22,
        top: 6,
    },
    payoneer: {
        bottom: 590,
        left: 26,
        backgroundColor: '#F6F6F6',
        width: 340,
        height: 75,
        borderRadius: 15,
    },
    iconPayoneer: {
        left: 22,
        top: 20,
    },
    payoneer_card: {
        top: -5,
        left: 180,
        fontSize: 14,
        opacity: 0.4,
    },
});

export default Payment;