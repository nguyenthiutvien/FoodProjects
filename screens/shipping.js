import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'; 

const image = require('../assets/Home.png')

const Shipping = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode='cover' style={styles.img}></ImageBackground>
            <TouchableOpacity style={styles.icon} onPress={()=> navigation.navigate('ConfirmOrder')}>
            <Image source={require('../assets/Icon_Back.png')} />
            </TouchableOpacity>
            <View style={styles.header}>
                <Text style={styles.textShipping}>Shipping</Text>
            </View>
            <View style={styles.location}>
                <Text style={styles.delivery}>Order Location</Text>
                <View style={styles.icon_location}>
                    <Image source={require('../assets/Icon_location.png')}></Image>
                    <Text style={styles.address}>8502 Preston Rd. Inglewood, </Text>
                    <Text style={styles.address}>Maine 98380</Text>
                </View>
            </View>
            <View style={styles.location_two}>
                <Text style={styles.delivery}>Deliver To</Text>
                <View style={styles.icon_location}>
                    <Image source={require('../assets/Icon_location.png')}></Image>
                    <Text style={styles.address}>4517 Washington Ave. Manchester, </Text>
                    <Text style={styles.address}>Kentucky 39495</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('Map')}>
                      <TouchableOpacity onPress={()=> navigation.navigate('Location')}>
                      <Text style={styles.set_location}>set location</Text>
                      </TouchableOpacity>
                 
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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
    textShipping: {
        fontWeight: 'bold',
        fontSize: 40,
        height: 60,
        bottom: 640,
        left: 28,
        position: 'relative',
    },
    location: {
        position: 'relative',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        width: 350,
        left: 26,
        height: 100,
        borderRadius: 20,
        marginTop: -620,
        shadowColor: 'rgba(0, 0, 0, 0.5)', 
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 1, 
        shadowRadius: 4, 
        elevation: 4,
      },
      delivery: {
        position: 'absolute', 
        top: 14, 
        left: 15, 
        color: '#22242E',
        opacity: 0.6,
        fontSize: 15,
      },
      icon_location: {
        top: 42,
        left: 14,
      },
      address: {
        left: 60,
        bottom: 30,
        fontWeight: 'bold',
        fontSize: 14
      },
      location_two: {
        backgroundColor: '#FFFFFF',
        width: 350,
        top: 20,
        left: 26,
        height: 130,
        borderRadius: 20,
        shadowColor: 'rgba(0, 0, 0, 0.5)', 
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 1, 
        shadowRadius: 4, 
        elevation: 4,
      },
      set_location: {
        color: '#6B50F6',
        left: 60,
        bottom: 19,
        fontSize: 14,
      },
})

export default Shipping;