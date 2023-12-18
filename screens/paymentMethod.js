import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'; 

const image = require('../assets/Home.png')

const PaymentMethod = ({navigation}) => {
    const [selectedMethod, setSelectedMethod] = useState(null);

    const handlePaymentMethodSelection = (method) => {
        setSelectedMethod(method);
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode='cover' style={styles.img}></ImageBackground>
            <TouchableOpacity style={styles.icon} onPress={()=> navigation.navigate('ConfirmOrder')}>
            <Image source={require('../assets/Icon_Back.png')} />
            </TouchableOpacity>     
                <View style={styles.header}>
                    <Text style={styles.textPayment}>Payment Method</Text>
                    <Text style={styles.paymentInfo}>This data will be displayed in your account</Text>
                    <Text style={styles.paymentInfo}>profile for security</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.card}>
                        <TouchableOpacity style={[styles.paypal, selectedMethod === 'paypal' && {backgroundColor: '#ced6e0'}]}
                        onPress={() => handlePaymentMethodSelection('paypal')}>
                            <Image style={styles.iconPaypal} source={require('../assets/paypal_logo.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.visa, selectedMethod === 'visa' && {backgroundColor: '#ced6e0'}]}
                        onPress={() => handlePaymentMethodSelection('visa')}>
                            <Image style={styles.iconVisa} source={require('../assets/visa_logo.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.payoneer, selectedMethod === 'payoneer' && {backgroundColor: '#ced6e0'}]}
                        onPress={() => handlePaymentMethodSelection('payoneer')}>
                            <Image style={styles.iconPayoneer} source={require('../assets/Payoneer_logo.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.btn_next} onPress={() => navigation.navigate('Upload_Photo')}>
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
    textPayment: {
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
    paypal: {
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 630,
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
    card: {
        top: 30,
    },

    visa: {
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 610,
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
    payoneer: {
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 590,
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

    btn_next: {
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 400,
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

export default PaymentMethod;