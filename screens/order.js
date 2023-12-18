import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'; 
import Header from '../components/header';

const Images = require('../assets/Home.png');
const RestaurantLogo1 = require('../assets/res2.png');
const RestaurantLogo2 = require('../assets/res1.png'); 

const Order = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={Images} resizeMode="cover" style={styles.image}>
                <Header/>
                <Image style={styles.advertise} source={require('../assets/adve.png')}/>
                <ScrollView>
                <View style={styles.text}>
                    <Text style={styles.boldText}>Nearest Restaurant</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetail')}>
                        <Text style={styles.greenText}>View more</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.restaurantContainer}>
                    <View style={styles.restaurantBox}>
                        <Image  source={RestaurantLogo1} style={styles.restaurantLogo} />
                        <Text style={styles.restaurantName}>Vegan Resto</Text>
                        <Text style={styles.minutesText}>12 minutes</Text>
                    </View>
                    <View style={styles.restaurantBox}>
                        <Image source={RestaurantLogo2} style={styles.restaurantLogo} />
                        <Text style={styles.restaurantName}>Healthy Food</Text>
                        <Text style={styles.minutesText}>12 minutes</Text>
                    </View>
                </View>
                <View style={styles.text}>
                    <Text style={styles.boldText}>Popular restaurant</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetail')}>
                        <Text style={styles.greenText}>View more</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.restaurantContainer}>
                    <View style={styles.restaurantBox}>
                        <Image source={RestaurantLogo1} style={styles.restaurantLogo} />
                        <Text style={styles.restaurantName}>Restaurant 3</Text>
                        <Text style={styles.minutesText}>12 minutes</Text>
                    </View>
                    <View style={styles.restaurantBox}>
                        <Image source={RestaurantLogo2} style={styles.restaurantLogo} />
                        <Text style={styles.restaurantName}>Restaurant 4</Text>
                        <Text style={styles.minutesText}>12 minutes</Text>
                    </View>
                    <View style={styles.restaurantBox}>
                        <Image source={RestaurantLogo1} style={styles.restaurantLogo} />
                        <Text style={styles.restaurantName}>Restaurant 5</Text>
                        <Text style={styles.minutesText}>12 minutes</Text>
                    </View>
                    <View style={styles.restaurantBox}>
                        <Image source={RestaurantLogo2} style={styles.restaurantLogo} />
                        <Text style={styles.restaurantName}>Restaurant 6</Text>
                        <Text style={styles.minutesText}>12 minutes</Text>
                    </View>
                </View>
                <View style={styles.text}>
                    <Text style={styles.boldText}>Popular restaurant</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetail')}>
                        <Text style={styles.greenText}>View more</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
                
                <StatusBar style="auto" />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc', 
    },
    image: {
        width: 390,
        height: 829,
    },
    advertise: {
        marginTop:220,
        marginLeft: 20,
        marginRight: 20,
        width: 350,
    },
    text: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    greenText: {
        color: 'blue',
        fontSize: 14,
    },
    restaurantContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 20,
        flexWrap: 'wrap', 
    },
    restaurantBox: {
        backgroundColor: 'white', 
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
        width: 150,
        marginBottom: 20,
    },
    restaurantLogo: {
        width: 70,
        height: 70,
        marginBottom: 10,
    },
    restaurantName: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#333', 
    },
    minutesText: {
        color: '#666', 
    },
});

export default Order;
