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
const messageIcon = require("../assets/chatmess.png");
const emailIcon = require("../assets/Email.png");

const Forgotpw = ({ navigation }) => {
  const [verificationCode, setVerificationCode] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelection = (option) => {
    if (selectedOption === option) {
      setSelectedOption(null);
    } else {
      setSelectedOption(option);
    }
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
        <Text style={styles.text}>Forgot Password</Text>
        <Text style={styles.subtext}>
          Select which contact details should we {'\n'} use to reset your password
        </Text>
        <TouchableOpacity
          style={[
            styles.inputContainer,
            selectedOption === "sms" ? styles.selected : null,
          ]}
          onPress={() => handleSelection("sms")}
        >
          <Image source={messageIcon} style={styles.icon} />
          <Text style={styles.smsText}>Via sms:</Text>
          <View style={styles.dotsContainer}>
            <Text style={styles.dots}>....</Text>
            <Text style={styles.dots}>....</Text>
            <Text style={styles.number}>1234</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.inputContainer2,
            selectedOption === "email" ? styles.selected : null,
          ]}
          onPress={() => handleSelection("email")}
        >
          <Image source={emailIcon} style={styles.icon} />
          <Text style={styles.smsText}>Via email:</Text>
          <View style={styles.dotsContainer2}>
            <Text style={styles.dots}>....</Text>
            <Text style={styles.email}>@madeofrezo.com</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate("Phone")}
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
    fontSize: 35,
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
  inputContainer: {
flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 15,
    width: 390,
    paddingVertical: 20,
    marginLeft: 40,
    paddingRight: 130,
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "#F8F8FF",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  inputContainer2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 15,
    width: 390,
    paddingLeft: 70,
    paddingVertical: 20,
    marginLeft: 40,
    paddingRight: 130,
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "#F8F8FF",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  smsText: {
    fontSize: 15,
    marginBottom: 40,
    color: "grey",
  },
  dotsContainer: {
    flexDirection: "row",
    marginLeft: -65,
  },
  dotsContainer2: {
    flexDirection: "row",
    marginLeft: -75,
  },
  dots: {
    fontSize: 40,
    fontWeight: "bold",
    marginHorizontal: 5,
    marginTop: 5,
  },
  number: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 30,
  },
  email: {
    fontSize: 15,
    marginTop: 32,
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
  selected: {
    backgroundColor: "#FFC0CB", 
  },
});

export default Forgotpw;