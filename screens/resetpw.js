import React, { useState, useRef } from "react";
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
const eyeIcon = require("../assets/EyeIcon.png");

const Resetpw = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const passwordInputRef = useRef(null);
  const confirmPasswordInputRef = useRef(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.img}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("NextScreen")}
        >
          <Image source={require("../assets/Icon_Back.png")} />
        </TouchableOpacity>
        <Text style={styles.text}>Reset your password {"\n"}here</Text>
        <Text style={styles.subtext}>
          Select which contact details should we {"\n"} use to reset your password
        </Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="New Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
            ref={passwordInputRef}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => {
              togglePasswordVisibility();
              passwordInputRef.current.focus();
            }}
          >
            <Image
              source={eyeIcon}
              style={[
                styles.eyeImage,
                (showPassword || password !== "") && styles.darkGreenEye,
              ]}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Confirm Password"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            ref={confirmPasswordInputRef}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => {
              toggleConfirmPasswordVisibility();
              confirmPasswordInputRef.current.focus();
            }}
          >
            <Image
              source={eyeIcon}
              style={[
                styles.eyeImage,
                (showConfirmPassword || confirmPassword !== "") &&
                  styles.darkGreenEye,
              ]}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate("Congrats")}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
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
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 340,
    height: 60,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 40,
    paddingLeft: 15,
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
  passwordInput: {
    flex: 1,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 10,
  },
  eyeImage: {
    width: 20,
    height: 14,
  },
  darkGreenEye: {
    tintColor: "blue",
  },
  nextButton: {
    backgroundColor: "#8A2BE2",
    borderRadius: 15,
    width: 130,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginLeft: 130,
  },
  nextButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 5,
  },
});

export default Resetpw;
