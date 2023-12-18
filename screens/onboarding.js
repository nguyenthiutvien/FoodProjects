import React, { useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'; 

const image = require('../assets/Pattern_bgr.png');

const Onboarding = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate ('OnboardingFood');
        },5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image_bgr}></ImageBackground>
            <View style={styles.body}>
                <Image source={require('../assets/LOGO_DESIGN.png')} style={styles.logo}></Image>
                <Image source={require('../assets/didfood.png')}></Image>
                <Text style={styles.favorite_food}>Deliever Favorite Food</Text>
            </View>
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
        height: '60%',
    },
    body: {
        bottom: 280,
        alignItems: 'center',
        justifyContent: 'center', 
    },
    favorite_food: {
        fontSize: 21,
    },
});

export default Onboarding;