import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'; 
import { Button } from 'react-native-paper';
import { WebView } from 'react-native-webview';


const image = require('../assets/Maps.png')

const Location = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.body_map}>
                    {/* <ImageBackground source={image} resizeMode='cover' style={styles.img_map}></ImageBackground> */}
                </View>
                <View style={styles.location}>
                    <Image style={styles.icon_location} source={require('../assets/placeholder.jpg')}></Image>
                </View>
                <View style={styles.search}>
                    <Image style={styles.search_icon} source={require('../assets/search1.png')}></Image>
                    <TextInput style={styles.search_input} placeholder='Find Your Location' placeholderTextColor="#6B50F6"></TextInput>
                </View>
                <View style={styles.webViewContainer}>
                <WebView
                    style={styles.img_map}
                    source={{ uri: 'https://expo.dev' }}
                    />
        </View>
               <View style={styles.set_location}>
                    <Text style={styles.tittle}>Your Location</Text>
                    <View style={styles.location_text_container}>
                        <Image style={styles.set_location_icon} source={require('../assets/Icon_location.jpg')}></Image>
                        <Text style={styles.location_text}>4517 Washington Ave. Manchester,</Text>
                        <Text style={styles.location_text}>Kentucky 39495</Text>
                    </View>
                    <TouchableOpacity style={styles.btn_button} onPress={()=> navigation.navigate('ConfirmOrder')}>
                        <Text style={styles.btn_text}>Set Location</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Location;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    search: {
        bottom: 540,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 22,
    },
    body: {
        flex: 1,
    },
    body_map: {
        flex: 1,
    },
    search_icon: {
        left: 15,
    },
    search_input: {
        left: 25,
        opacity: 0.5,
    },
    img_map: {
        width: 390,
        height: 829,
    },
    location: {
        flex: 4,
        alignItems: 'center', // Center the content horizontally
        paddingVertical: 300,
    },
    set_location: {
        backgroundColor: '#FFFFFF',
        width: 350,
        height: 190,
        bottom: 150,
        borderRadius: 20,
        marginHorizontal: 20,
    },
    tittle: {
        top: 10,
        left: 10,
        opacity: 0.5,
        fontSize: 16,
    },
    set_location_icon: {
        top: 30,
        left: 10,
    },
location_text_container: {
        top: 6,
    },
    location_text: {
        left: 60,
        fontWeight: 'bold',
        fontSize: 14,
    },
    btn_button: {
        top: 23,
        backgroundColor: '#6B50F6',
        marginHorizontal: 10,
        paddingVertical: 10,
        alignItems:'center',
        borderRadius: 16
    },
    btn_text: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold'
    },
})
