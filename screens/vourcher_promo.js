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
  TextInput,
} from "react-native";

const image60 = require("../assets/Home.png");
const brg_vourcher = require("../assets/brg_vourcher.png")

const Vourcher_Promo = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <ImageBackground source={image60} resizeMode="cover" style={styles.img} />
        <View style={styles.title_chat}>
            <Image style={styles.icon} source={require("../assets/Icon_Back.png")} />
            <Text style={styles.chat}>Voucher Promo</Text>
        </View>
      <View style={styles.content}>
        <ImageBackground source={brg_vourcher} resizeMode="cover" style={styles.brg_vourcher} />
        <Image style={styles.img_vourcher} source={require('../assets/Image_vourcher.png')}></Image>
        <Text style={styles.text_vourcher}></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    img: {
        paddingTop: 10,
        width: 390,
        height: "110%",
        position: 'relative',
    },
    title_chat: {
        top: 60,
        left: 25,
        position: 'absolute',
    },
    chat: {
        top: 20,
        fontSize: 35,
        fontWeight: 'bold',
    },
    brg_vourcher: {
        width: 200,
        height: 160,
        left: 10,
    },
    img_vourcher: {
        bottom: 142,
        left: 25,
    },
    content: {
        position: 'absolute',
        marginTop: 200,
        left: 20,
        backgroundColor: '#6B50F6',
        width: 350,
        height: 140,
        borderRadius: 10,
    },
});

export default Vourcher_Promo;