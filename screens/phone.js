import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";

const image = require("../assets/Home.png");
import { WebView } from 'react-native-webview';

const Phone = ({ navigation }) => {
  const [verificationCode, setVerificationCode] = useState("");

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.img}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("NextScreen")}
        >
          <Image source={require("../assets/Icon_Back.png")} />
        </TouchableOpacity>
        <Text style={styles.text}>Enter 4-digit {'\n'}Verification code</Text>
        <Text style={styles.subtext}>
          Code sent to 123456+*****. This code will {'\n'}expire in 01:30
        </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          maxLength={4}
          value={verificationCode}
          onChangeText={(text) => setVerificationCode(text)}
        />
      </ImageBackground>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate("Resetpw")}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
      <WebView source={{ uri: 'https://example.com' }} style={styles.webview} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
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
    marginLeft: 25,
  },
  text: {
    fontSize: 30,
    marginLeft: 40,
    marginTop: 10,
    fontWeight: "bold",
  },
  subtext: {
    fontSize: 15,
    marginLeft: 40,
    marginTop: 10,
    color: "grey",
  },
  input: {
    borderRadius: 15,
    padding: 20,
    marginTop: 20,
    color: "black",
    marginLeft: 25,
    width: 400,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 60, 
    backgroundColor: "white",
      borderRadius: 15,
      shadowColor: 'rgba(0, 0, 0, 0.5)', 
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    
  nextButton: {
    backgroundColor: "#8A2BE2",
    borderRadius: 15,
    width: 120,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginLeft: 140,
  },
  nextButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 5,
  },
});

export default Phone;
