import React, { useState } from "react";
import { Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

const Images = require("../assets/bglg.png");
import FacebookIcon from "../assets/fb.png"; 

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch('https://645de9688d08100293f1eb54.mockapi.io/bill');
      const data = await response.json();
  
      const user = data.find((item) => item.email === email && item.password === password);
  
      if (user) {
        console.log('Login successful');
        Alert.alert('Login successful', 'Let order');
        navigation.navigate('MyTab');
      } else {
        console.log('Invalid email or password', email);
        Alert.alert('Login Failed', 'Wrong email or password');
      }
    } catch (error) {
      console.log('Error occurred while logging in:', error);
      Alert.alert('Error', 'An error occurred while logging in. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={Images} resizeMode="cover" style={styles.image} />
      <View style={styles.content}>
        <Image style={styles.user} source={require("../assets/people.png")} />
        <Text style={styles.name}>Login To Your Account</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.loginButton}onPress={handleLogin} >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.other}>Or Continue With</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.facebookButton}>
            <Image source={FacebookIcon} style={styles.icon} />
            <Text style={styles.buttonText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleButton}>
            <Image style={styles.gg} source={require("../assets/ggicon.png")} />
            <Text style={styles.buttonText}>Google</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Forgotpw')}>
        <Text style={styles.forgotPassword}>Forgot Your Password?</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  user: {
    position: "absolute",
    top: 50,
    left: 98,
  },
  content: {
    width: 320,
    height: 300,
    marginTop: -950,
    position: "relative",
  },
  name: {
    top: 280,
    left: 42,
    fontSize: 23,
    fontWeight: "bold",
  },
  input: {
    top: 360,
    height: 60,
    borderColor: "#DCDCDC",
    marginBottom: 15,
    paddingLeft: 14,
    width: 330,
    backgroundColor: "white",
    borderRadius: 15,
    alignItems:'center',
    shadowColor: "#000",
    shadowOffset: {
          width: 0,
          height: 2,
    },
    shadowOpacity: 1, 
    shadowRadius: 4, 
    elevation: 5,
  },
  loginButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 10,
    top: 550,
    width: 150,
    height: 50,
    marginLeft: 85
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: 460,
    height: 930,
  },
  other: {
    top: 310,
    left: 82,
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    height: 50,


  },
  facebookButton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
    flex: 1,
    right: 15,
    marginRight: 10,
    top: 310,
    height: 60,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: "row", 
  },
  googleButton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    columnGap: 14,
    top: 310,
    height: 60,
    left: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  icon: {
    width: 20, 
    height: 20, 
    marginRight: 10, 
  },
  gg: {
    width:25,
    height: 25
  },
  forgotPassword: {
    color: "blue",
    textDecorationLine: "underline",
    alignSelf: "center",
    marginTop: 340,
    fontSize: 16,
    position: "absolute",
  },
});

export default Login;
