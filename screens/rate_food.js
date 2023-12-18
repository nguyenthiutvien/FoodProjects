import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView,TextInput } from 'react-native'; 


const image = require('../assets/Pattern_bgr.png');

const Rate_Food = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image_bgr}></ImageBackground>
            <View style={styles.finish_order}>
                <Image source={require('../assets/RateFood.png')}></Image>
                    <View style={styles.finish_orderText}>
                        <Text style={styles.finish_order_title}>Thank You!</Text>
                        <Text style={styles.finish_order_content}>Enjoy Your Meal</Text>
                        <Text style={styles.finish_order_text}>Please rate your Food</Text>
                    </View>
                    <View style={styles.star}>
                        <Image source={require('../assets/Star_Icon.png')}></Image>
                    </View>
                    <View style={styles.form_feedback}>
                        <Image style={styles.form_image} source={require('../assets/edit-Icon.png')}></Image>
                        <TextInput style={styles.form_text} placeholder='Leave Feedback' />
                    </View>
                    <View style={styles.submit_skip}>
                        <TouchableOpacity  style={styles.btn_submit} onPress={() => navigation.navigate('Rate_Restaurant')}>
                            <Text style={styles.submit_text}>Submit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn_skip}>
                            <Text style={styles.skip_text}>Skip</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        flex: 1
    },
    image_bgr: {
        height: '60%',
    },
    finish_order: {
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 250,
    },
    finish_orderText: {
        alignItems: 'center',
        top: 20,
    },
    finish_order_title: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    finish_order_content: {
        fontWeight: 'bold',
        fontSize: 30,
        top: 5,
    },
    finish_order_text: {
        top: 20,
    },
    star: {
        top: 80
    },
    form_feedback: {
        top: 135,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
        marginRight: 23,
    },
    form_text: {
        width: 300,
        height: 50,
        borderRadius: 15,
        backgroundColor: 'white',
        left: 25,
    },
    form_image: {
        left: 15,
    },
    submit_skip: {
        flexDirection: 'row',
        top: 150,
    },
    btn_submit: {
        right: 35,
        backgroundColor: '#6B50F6',
        width: 200,
        height: 45,
        borderRadius: 12,
    },
    submit_text: {
        textAlign: 'center',
        top: 15,
        color: 'white',
        fontWeight: 'bold',
    },
    btn_skip: {
        backgroundColor: 'white',
        width: 70,
        height: 45,
        borderRadius: 12,
        left: 40
    },
    skip_text: {
        textAlign: 'center',
        top: 15,
        color: '#6B50F6',
        fontWeight: 'bold',
    }
})

export default Rate_Food;