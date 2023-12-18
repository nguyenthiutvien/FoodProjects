import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import axios from 'axios';

const image = require('../assets/Home.png')

const Signupnext = ({ navigation, route }) => {
  const { username, email, password } = route.params;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  const handleNext = () => {
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Phone:', phone);
            navigation.navigate('PaymentMethod');


  //   const user = {
  //     username: username,
  //     email: email,
  //     password: password,
  //     firstname: firstName,
  //     lastname: lastName,
  //     phone: phone,
  //   };

  //   axios.post('https://645de9688d08100293f1eb54.mockapi.io/bill', user)
  //     .then((response) => {
  //       console.log('Data successfully pushed to API');
  //       console.log(response.data);
  //       navigation.navigate('PaymentMethod');
  //     })
  //     .catch((error) => {
  //       console.log('Failed to push data to API');
  //       console.error(error);
  //     });
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.img}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
                    <Image source={require('../assets/Icon_Back.png')} />
                </TouchableOpacity>
                <Text style={styles.text}>Fill in to bio get started</Text>
                <Text style={styles.subtext}>The data will be displayed in your {'\n'} account profile for security</Text>
                <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={phone}
          onChangeText={setPhone}
        />
            </ImageBackground>
            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#FEFEFF',
    },
    img: {
        flex: 1,
        width: 460,
        height: 900,
    },
    button: {
        padding: 10,
        borderRadius: 15,
        marginTop: 60,
        marginLeft: 25
    },
    text: {
        fontSize: 35,
        marginLeft: 40,
        marginTop: 10,
        fontWeight: 'bold', 
    },
    subtext: {
        fontSize: 15,
        marginLeft: 40,
        marginTop: 10,
        color: 'grey',
    },
    input: {
      flexDirection: "row",
      alignItems: "center",
      borderColor: "#DCDCDC",
      marginBottom: 15,
      paddingLeft: 18,
      alignItems:'center',
      width: 380,
      height: 60,
      marginLeft: 20,
      marginTop: 20,
      backgroundColor: "white",
      borderRadius: 15,
      shadowColor: 'rgba(0, 0, 0, 0.5)', 
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 5.0,
      shadowRadius: 3.84,
      elevation: 5,
    },
     inputsContainer: {
        marginTop: 20,
    },
    
   
    inputsContainer: {
        marginTop: 10,
    },
    nextButton: {
        backgroundColor: '#8A2BE2', 
        borderRadius: 15,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 120,
        width: 150,
        marginBottom: 20,
    },
    nextButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Signupnext;
