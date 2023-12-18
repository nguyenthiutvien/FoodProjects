import React, { useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'; 
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const image = require('../assets/Pattern_bgr.png');

const OnboardingDidfood = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image_bgr}></ImageBackground>
            <View style={styles.body}>
                <Image source={require('../assets/DIDGROUP.png')} style={styles.logo}></Image>
                <Text style={styles.comfort_food}>DIDFOOD is Where Your</Text>
                <Text style={styles.comfort_food}>Comfort Food Lives</Text>
                <View style={styles.body_food}>
                    <Text style={styles.body_text}>Enjoy a fast and smooth food delivery at</Text>
                    <Text style={styles.body_text}>your doorstep</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.button_text}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    image_bgr: {
        flex: 1,
        width: 390,
        height: '100%',
        position: 'relative',
    },
    body: {
        bottom: 160,
        alignItems: 'center',
        justifyContent: 'center', 
        position: 'relative',
    },
    comfort_food: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    body_food: {
        top: 20,
        alignItems: 'center',
        justifyContent: 'center', 
    },
    body_text: {
        fontSize: 16,
    },
    button: {
        flex: 0.2,
        alignItems: 'center', 
        justifyContent: 'center',
        bottom: 40,
        backgroundColor: '#6B50F6',
        width: 120,
        borderRadius: 10,
    },
    button_text: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
    },
});

export default OnboardingDidfood;