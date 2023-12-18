import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  PanResponder,
  Animated,
  Text,
  Dimensions
} from "react-native";
import { Button } from "react-native-paper";

const image8 = require("../assets/Photo_Profile.png");

const windowHeight = Dimensions.get("window").height; 

const Profile = ({ navigation }) => {
  const [pan] = useState(new Animated.ValueXY({ x: 0, y: 0 }));

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        Animated.event([null, { dy: pan.y }], {
          useNativeDriver: false,
        })(evt, gestureState);
      },
      onPanResponderRelease: () => {
        // Xử lý sự kiện release nếu cần
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <ImageBackground source={image8} style={styles.image} />
      <Animated.View
        style={[
          styles.content,
          {
            transform: [{ translateY: pan.y }],
            bottom: windowHeight / 2 - 380, 
          },
        ]}
        {...panResponder.panHandlers}
      >
        <View style={styles.scroll}>
          <Image source={require("../assets/Scroll_Tool.png")} />
        </View>
        <View style={styles.content_little}>
          <Text style={styles.content_text}>Member Gold</Text>
        </View>
        <View style={styles.my_info}>
          <Text style={styles.name}>Arash Ranjbaran</Text>
          <Image
            style={styles.edit_icon}
            source={require("../assets/Edit_Icon.png")}
          ></Image>
          <Text style={styles.email}>awdesign.ar@gmail.com</Text>
          <View style={styles.voucher}>
            <Image
              style={styles.icon_voucher}
              source={require("../assets/Voucher_Icon.png")}
            ></Image>
            <Text style={styles.your_voucher}>You have 3 Voucher</Text>
          </View>
        </View>
        <Text style={styles.favorite}>Favorite</Text>
        <View style={styles.old_order}>
          <Image
            style={styles.food_photo}
            source={require("../assets/food_photo.png")}
          ></Image>
          <Text style={styles.name_food}>Spacy fresh crab</Text>
          <Text style={styles.type}>Waroenk Kila</Text>
          <Text style={styles.price}>$ 35</Text>
          <Button style={styles.btn}>
            <Text style={styles.btn_text}>Buy Again</Text>
          </Button>
        </View>
        <View style={styles.favorite_categories}>
          <View style={styles.favorite_text}>
            <Text style={styles.favorite}></Text>
          </View>
          <View style={styles.order1}>
            <Image
              style={styles.food_photo}
              source={require("../assets/food_photo.png")}
            ></Image>
            <Text style={styles.name_food}>Spacy fresh crab</Text>
            <Text style={styles.type}>Waroenk Kila</Text>
            <Text style={styles.price}>$ 35</Text>
            <Button style={styles.btn}>
              <Text style={styles.btn_text}>Buy Again</Text>
            </Button>
          </View>
          <View style={styles.order2}>
            <Image
              style={styles.food_image}
              source={require("../assets/Photo_Menu.png")}
            ></Image>
            <Text style={styles.name_food}>Spacy fresh crab</Text>
            <Text style={styles.type}>Waroenk Kila</Text>
            <Text style={styles.price}>$ 35</Text>
            <Button style={styles.btn}>
              <Text style={styles.btn_text}>Buy Again</Text>
            </Button>
          </View>
          <View style={styles.order3}>
            <Image
              style={styles.food_photo}
              source={require("../assets/Photo_Menu1.png")}
            ></Image>
            <Text style={styles.name_food}>Spacy fresh crab</Text>
            <Text style={styles.type}>Waroenk Kila</Text>
            <Text style={styles.price}>$ 35</Text>
            <Button style={styles.btn}>
              <Text style={styles.btn_text}>Buy Again</Text>
            </Button>
          </View>
        </View>
      </Animated.View>
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
  image: {
    width: 395,
    height: "70%",
    position: "relative",
  },
  content: {
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    width: 400,
    height: 760,
    bottom: 210,
  },
  scroll: {
    top: 20,
    alignItems: "center",
  },
  content_text: {
    top: 50,
    left: 30,
    backgroundColor: "#FEF6ED",
    width: 150,
    height: 30,
    borderRadius: 20,
    textAlign: "center",
    justifyContent: "center",
    position: "relative",
    lineHeight: 35,
    fontWeight: "bold",
    color: "#6B50F6",
  },
  my_info: {
    top: 70,
    left: 25,
    width: 350,
    height: 130,
    borderRadius: 18,
    backgroundColor: "#FEF6ED",
  },
  name: {
    top: 5,
    left: 15,
    fontSize: 28,
    fontWeight: "bold",
  },
  email: {
    left: 15,
    opacity: 0.4,
    fontSize: 15,
    bottom: 20,
  },
  icon_voucher: {
    top: 2,
    left: 20,
  },
  voucher: {
    display: "flex",
  },
  your_voucher: {
    left: 86,
    bottom: 40,
    fontSize: 17,
    fontWeight: "bold",
  },
  edit_icon: {
    marginHorizontal: 300,
    bottom: 22,
  },
  favorite: {
    top: 90,
    left: 35,
    fontSize: 18,
    fontWeight: "bold",
  },
  food_photo: {
    top: 15,
    left: 15,
  },
  name_food: {
    bottom: 48,
    left: 100,
    fontSize: 12,
    fontWeight: "bold",
  },
  type: {
    bottom: 45,
    left: 100,
    fontSize: 11,
    opacity: 0.4,
  },
  price: {
    bottom: 44,
    left: 100,
    fontSize: 13,
    fontWeight: "bold",
  },
  btn: {
    bottom: 100,
    left: 225,
    backgroundColor: "#6B50F6",
    width: 150,
  },
  btn_text: {
    color: "#FFFFFF",
    fontSize: 12,
  },
  old_order: {
    backgroundColor: "#FEF6ED",
    position: "relative",
    top: 110,
    width: 350,
    height: 100,
    left: 25,
    borderRadius: 18,
  },

  my_info: {
    top: 70,
    left: 25,
    width: 350,
    height: 130,
    borderRadius: 18,
    backgroundColor: "#FEF6ED",
  },
  name: {
    top: 5,
    left: 15,
    fontSize: 28,
    fontWeight: "bold",
  },
  email: {
    left: 15,
    opacity: 0.4,
    fontSize: 15,
    bottom: 20,
  },
  edit_icon: {
    marginHorizontal: 300,
    bottom: 22,
  },
  voucher: {
    display: "flex",
  },
  icon_voucher: {
    top: 0,
    left: 20,
  },
  your_voucher: {
    left: 86,
    bottom: 40,
    fontSize: 17,
    fontWeight: "bold",
  },
  favorite: {
    top: 90,
    left: 35,
    fontSize: 18,
    fontWeight: "bold",
  },
  order1: {
    backgroundColor: "#FEF6ED",
    position: "relative",
    top: 120,
    width: 350,
    height: 100,
    left: 25,
    borderRadius: 18,
  },
  food_photo: {
    top: 15,
    left: 15,
  },
  name_food: {
    bottom: 48,
    left: 100,
    fontSize: 15,
    fontWeight: "bold",
  },
  type: {
    bottom: 45,
    left: 100,
    fontSize: 13,
    opacity: 0.4,
  },
  price: {
    bottom: 44,
    left: 100,
    fontSize: 14,
    fontWeight: "bold",
  },
  btn: {
    bottom: 90,
    left: 223,
    backgroundColor: "#6B50F6",
    width: 120,
  },
  btn_text: {
    color: "#FFFFFF",
  },
  order2: {
    backgroundColor: "#FEF6ED",
    position: "relative",
    top: 150,
    width: 350,
    height: 100,
    left: 25,
    borderRadius: 18,
  },
  food_image: {
    top: 15,
    left: 15,
  },
  order3: {
    backgroundColor: "#FEF6ED",
    position: "relative",
    top: 180,
    width: 350,
    height: 100,
    left: 25,
    borderRadius: 18,
  },
});

export default Profile;
