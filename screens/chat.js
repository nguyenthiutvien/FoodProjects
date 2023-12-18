import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const image60 = require("../assets/Home.png");

const Chat = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image60}
        resizeMode="cover"
        style={styles.img}
      ></ImageBackground>
      <Image style={styles.icon} source={require("../assets/Icon_Back.png")} />
      <View style={styles.header}>
        <Text style={styles.chat}>Chat</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("ChatDetail")}>
        <View style={styles.louis_Kelly}>
          <Image
            style={styles.Kelly}
            source={require("../assets/Photo_Profile1.png")}
          ></Image>
          <Text style={styles.KellyText}>Louis Kelly</Text>
          <Text style={styles.yourOrder}>Your Order Just Arrived!</Text>
          <Text style={styles.time}>20:00</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ChatDetail")}>
        <View style={styles.Paul_Koch}>
          <Image
            style={styles.Koch}
            source={require("../assets/Photo_Profile1.png")}
          ></Image>
          <Text style={styles.KochText}>Paul Koch</Text>
          <Text style={styles.yourOrder1}>Your Order Just Arrived!</Text>
          <Text style={styles.time1}>20:00</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ChatDetail")}>
        <View style={styles.Karla_Klein}>
          <Image
            style={styles.Klein}
            source={require("../assets/Photo_Profile2.png")}
          ></Image>
          <Text style={styles.KleinText}>Louis Kelly</Text>
          <Text style={styles.KleinOrder}>Your Order Just Arrived!</Text>
          <Text style={styles.time2}>20:00</Text>
        </View>
      </TouchableOpacity>
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
  img: {
    width: 390,
    height: "100%",
  },
  icon: {
    marginBottom: 15,
    position: "absolute",
    top: 40,
    left: 32,
    // marginRight: 290,
  },
  chat: {
    fontWeight: "bold",
    fontSize: 40,
    height: 60,
    top: -670,
    right: 130,
    marginTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  louis_Kelly: {
    flexDirection: "row",
    backgroundColor: "#f5f6fa",
    width: 360,
    height: 100,
    borderRadius: 20,
    marginTop: -660,
    position: "relative",
    marginBottom: 500,
  },
  Kelly: {
    position: "absolute",
    top: 20,
    left: 18,
  },
  KellyText: {
    fontSize: 20,
    fontWeight: "bold",
    left: 100,
    top: 28,
  },
  yourOrder: {
    right: 12,
    top: 57,
    fontSize: 16,
  },
  time: {
    left: 90,
    top: 28,
    fontSize: 17,
  },
  Paul_Koch: {
    backgroundColor: "#f5f6fa",
    width: 360,
    height: 100,
    borderRadius: 20,
    bottom: 540,
    position: "relative",
  },
  Koch: {
    osition: "absolute",
    top: 20,
    left: 18,
  },
  KochText: {
    fontSize: 20,
    fontWeight: "bold",
    left: 100,
    bottom: 32,
  },
  yourOrder1: {
    left: 101,
    bottom: 28,
    fontSize: 16,
  },
  time1: {
    left: 308,
    bottom: 70,
    fontSize: 17,
  },
  Karla_Klein: {
    backgroundColor: "#f5f6fa",
    position: "relative",
    width: 360,
    height: 100,
    borderRadius: 20,
    bottom: 510,
  },
  Klein: {
    position: "absolute",
    top: 20,
    left: 18,
  },
  KleinText: {
    fontSize: 20,
    fontWeight: "bold",
    left: 100,
    bottom: 32,
  },
  KleinOrder: {
    left: 101,
    bottom: 27,
    fontSize: 16,
  },
  time2: {
    left: 308,
    bottom: 70,
    fontSize: 17,
  },
});

export default Chat;
