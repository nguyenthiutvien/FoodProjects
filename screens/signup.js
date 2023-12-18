import React, { useState, useEffect } from "react";
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
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios"; // Import Axios library

const Images = require("../assets/bglg.png");
const LockIcon = require("../assets/Lock.png");
const MessIcon = require("../assets/Message.png");
const ProfileIcon = require("../assets/Profile.png");

const InputWithIcon = ({ placeholder, value, onChangeText, iconName }) => {
  return (
    <View style={styles.inputWrapper}>
      <Icon name={iconName} size={20} color="#E6E6FA" style={styles.icon} />
      <TextInput
        style={styles.inputField}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};
const PasswordInputWithIcon = ({ placeholder, value, onChangeText, iconName, secureTextEntry, showPassword, onTogglePassword }) => {
  return (
    <View style={styles.inputWrapper}>
      {/* <TouchableOpacity style={styles.lockIcon} onPress={onTogglePassword}>
        <Image source={LockIcon} />
      </TouchableOpacity> */}
      <Icon name={iconName} size={20} color="#E6E6FA" style={styles.icon} />
      <TextInput
        style={styles.passwordTextInput}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry && !showPassword}
      />
      <TouchableOpacity style={styles.eyeIcon} onPress={onTogglePassword}>
        <Icon
          name={showPassword ? "eye" : "eye-slash"}
          size={20}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};

const Signup = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    // Reset form data when screen is opened
    setName("");
    setEmail("");
    setPassword("");
  }, []);
 
  const handleSignup = () => {
    // Validate username
    if (name.trim() === "") {
      Alert.alert("Error", "Please enter a username");
      return;
    }
  
    // Validate email
    if (email.trim() === "") {
      Alert.alert("Error", "Please enter an email");
      return;
    }
  
    // Validate email format using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Please enter a valid email");
      return;
    }
  
    // Validate password
    if (password.trim() === "") {
      Alert.alert("Error", "Please enter a password");
      return;
    }
  
    // Additional validations
    if (password.length < 6) {
      Alert.alert("Error", "Password should be at least 6 characters long");
      return;
    }
  
    const user = {
      username: name,
      email: email,
      password: password,
    };
  
    // Check if the email already exists
    axios
      .get("https://645de9688d08100293f1eb54.mockapi.io/bill")
      .then((response) => {
        const data = response.data;
        const existingUser = data.find((user) => user.email === email);
        if (existingUser) {
          Alert.alert("Error", "Email already exists");
        } else {
          // Email does not exist, proceed with signup
          axios
            .post("https://645de9688d08100293f1eb54.mockapi.io/bill", user)
            .then((response) => {
              console.log("Signup successful");
              console.log(response.data);
              navigation.navigate("Signupnext", {
                username: name,
                email: email,
                password: password,
              });
            })
            .catch((error) => {
              console.log("Signup failed");
              console.error(error);
            });
        }
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  };
  return (
    <View style={styles.container}>
      <Image source={Images} resizeMode="cover" style={styles.image} />
      <View style={styles.content}>
        <Image style={styles.user} source={require("../assets/people.png")} />
        <Text style={styles.title}>Sign Up Your Account</Text>

        <InputWithIcon
          placeholder="Name"
          value={name}
          onChangeText={setName}
          iconName="user"
        />

        <InputWithIcon
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          iconName="envelope"
        />



<PasswordInputWithIcon
  placeholder="Password"
  value={password}
  onChangeText={setPassword}
  iconName="lock"
  secureTextEntry={!showPassword}
  showPassword={showPassword}
  onTogglePassword={() => setShowPassword(!showPassword)}
/>

        <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
          <Text style={styles.signupButtonText}>Create Account</Text>
        </TouchableOpacity>

        {/* <View style={styles.checkboxContainer}>
          <Checkbox checked={isChecked} onPress={handleCheckboxPress} />
          <Text style={styles.checkboxText}>Keep me Signed In</Text>
        </View> */}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.forgotPassword}>Already have an account?</Text>
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
    marginTop: -880,
    position: "relative",
  },
  title: {
    top: 290,
    textAlign:'center',
    fontSize: 23,
    fontWeight: "bold",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#DCDCDC",
    marginBottom: 15,
    paddingLeft: 18,
    width: 330,
    top: 335,
    alignItems:"center",
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor:  'rgba(0, 0, 0, 0.5)', 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputField: {
    flex: 1,
    height: 60,
  },
  icon: {
    marginRight: 10,
  },
  signupButton: {
    backgroundColor: "#6A5ACD",
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: "center",
    marginTop:0,
    top: 390,
    width: 160,
    left: 82,
  },
  signupButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: 460,
    height: 900,
  },
  passwordInput: {
    position: "relative",
    width: 330,
    marginBottom: 15,
    // alignItems:"center" 
   },

  passwordTextInput: {
    height: 60,
    borderColor: "#DCDCDC",
    paddingRight:200,
    backgroundColor: "white",
  //   borderRadius: 15,
  //   shadowColor:  'rgba(0, 0, 0, 0.5)', 
  //   top: 335,
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,
  //   elevation: 5,
  },
  eyeIcon: {
    // position: "absolute",
    right: 40,
    // top: 360,
  },
  // lockIcon: {
  //   position: "absolute",
  //   left: 18,
  //   top: 15,
  // },
  checkbox: {
    borderWidth: 1,
    borderColor: "#DCDCDC",
    backgroundColor: "white", // Set initial background color to white
    width: 27,
    height: 27,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 270,
    right: -17,
  },
  checkedCheckbox: {
    backgroundColor: "#7B68EE", // Change background color when checked
  },
  checkboxText: {
    marginLeft: 50,
    marginTop: -25,
    fontSize: 18,
    color: "grey",
  },
  additionalCheckboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  forgotPassword: {
    color: "blue",
    textDecorationLine: "none",
    alignSelf: "center",
    marginTop: 400,
    fontSize: 16,
    position: "absolute",
  },
});

export default Signup;
