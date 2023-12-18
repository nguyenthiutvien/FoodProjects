import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'; 
import { Button } from 'react-native-paper';

const image = require('../assets/Home.png')
const imagebg = require('../assets/Pattern.png')

const ConfirmOrder = ({ navigation }) => {
    return (
        <View style={StyleSheet.container}>
            <ImageBackground source={image} resizeMode='cover' style={styles.img}></ImageBackground>
            <TouchableOpacity style={styles.icon} onPress={()=> navigation.navigate('OrderDetail')}>
            <Image source={require('../assets/Icon_Back.png')} />
            </TouchableOpacity>
            <View style={styles.header}>
                <Text style={styles.confirm}>Cofirm Oder</Text>
            </View>
            <View style={styles.location}>
                <Text style={styles.delivery}>Deliver To</Text>
                  <TouchableOpacity onPress={() => navigation.navigate('Shipping')}>
                  <Text style={styles.edit} >Edit</Text>
                  </TouchableOpacity>
                <View style={styles.icon_location}>
                    <Image source={require('../assets/Icon_location.png')}></Image>
                    <Text style={styles.address}>4517 Washington Ave. Manchester,</Text>
                    <Text style={styles.address}>Kentucky 39495</Text>
                </View>
            </View>
            <View style={styles.card}>
                <Text style={styles.delivery}>Payment Method</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
                  <Text style={styles.edit} >Edit</Text>
                  </TouchableOpacity>
                <View style={styles.icon_location}>
                    <Image source={require('../assets/paypal_logo.png')}></Image>
                    <Text style={styles.seri}>2121 6352 8465 ****</Text>
                </View>
            </View>
            <View style={styles.checkout}>
                <ImageBackground source={imagebg} resizeMode='cover' style={styles.imagebg}></ImageBackground>
                <Text style={styles.sub}>Sub - Total</Text>
                <Text style={styles.price_one}>120 $</Text>
                <Text style={styles.charge}>Delivery Charge</Text>
                <Text style={styles.price_two}>10 $</Text>
                <Text style={styles.discount}>Discount</Text>
                <Text style={styles.price_three}>20 $</Text>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.Total_price}>150 $</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Finish_Order')}>
                    <Text style={styles.plOrder}>Place My Order</Text>
                </TouchableOpacity>
            </View>
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
        left: 32,
      },
      confirm: {
        fontWeight: 'bold',
        fontSize: 36,
        height: 60,
        bottom: 700,
        left: 34,
        position: 'relative',
      },
      header: {
        flexDirection: 'row', 
        alignItems: 'center', 
      },
      location: {
        position: 'relative',
        flexDirection: 'row',
        backgroundColor: '#f5f6fa',
        width: 333,
        left: 30,
        height: 100,
        borderRadius: 20,
        marginTop: -700,
        marginBottom: 500,
      },
      delivery: {
        position: 'absolute', 
        top: 14, 
        left: 15, 
        color: '#22242E',
        opacity: 0.6,
        fontSize: 15,
      },
      edit: {
        left: 285,
        top: 16,
        color: '#6B50F6',
        fontSize: 14,
      },
      icon_location: {
        top: 42,
        right: 8,
      },
      address: {
        left: 50,
        bottom: 30,
        fontWeight: 'bold',
        fontSize: 13
      },
      seri: {
        left: 167,
        bottom: 20,
        fontSize: 12,
        position: 'relative',
      },
      card: {
        flexDirection: 'row',
        backgroundColor: '#f5f6fa',
        width: 333,
        left: 30,
        height: 100,
        borderRadius: 20,
        marginTop: -480,
        position: 'relative',
        marginBottom: 500,
      },
      checkout: {
        flexDirection: 'wrap',
        top: 490,
        backgroundColor: '#6B50F6',
        width: 340,
        borderRadius: 25,
        left: 28,
        height: 220,
        marginBottom: 50,
        position: 'absolute',
      },
      sub: {
        position:'relative',
        bottom: 200,
        left: 25,
        fontWeight: 'bold',
      },
      price_one: {
        position:'relative',
        bottom: 220,
        textAlign: 'right',
        right: 40,
        fontWeight: 'bold',
      },
      price_two: {
        position:'relative',
        bottom: 230,
        textAlign: 'right',
        right: 40,
        fontWeight: 'bold',
      },
      price_three: {
        position:'relative',
        bottom: 240,
        textAlign: 'right',
        right: 40,
        fontWeight: 'bold',
      },
      charge: {
        position:'relative',
        bottom: 210,
        left: 25,
        fontWeight: 'bold',
      },
      discount: {
        position:'relative',
        bottom: 220,
        left: 25,
        fontWeight: 'bold',
      },
      total: {
        position:'relative',
        bottom: 230,
        left: 25,
        fontWeight: 'bold',
        fontSize: 20,
      },
      Total_price: {
        position:'relative',
        bottom: 260,
        textAlign: 'right',
        right: 40,
        fontSize: 20,
        fontWeight: 'bold',
      },
      plOrder: {
        top: 15,
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        color: "#6B50F6",

      },
      button: {
        backgroundColor: '#FEFEFF',
        width: 300,
        height: 55,
        borderRadius: 14,
        left: 20,
        bottom: 260,
      },
});

export default ConfirmOrder;