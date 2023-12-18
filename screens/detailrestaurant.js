import React, { useRef } from "react";
import { FlatList } from "react-native";
import {
  Animated,
  PanResponder,
  Platform,
  StyleSheet,
  Dimensions,
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Pressable,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");
const BOTTOM_SHEET_MAX_HEIGHT = WINDOW_HEIGHT * 0.9;
const BOTTOM_SHEET_MIN_HEIGHT = WINDOW_HEIGHT * 0.5;
const MAX_UPWARD_TRANSLATE_Y =
  BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT; 
const MAX_DOWNWARD_TRANSLATE_Y = 0;
const DRAG_THRESHOLD = 50;

const Detailrestaurant = ({route}) => {
  const { itemId, itemName, itemImage,itemLocation, itemDescription} = route.params;
  const animatedValue = useRef(new Animated.Value(0)).current;
  const lastGestureDy = useRef(0);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        animatedValue.setOffset(lastGestureDy.current);
      },
      onPanResponderMove: (e, gesture) => {
        animatedValue.setValue(gesture.dy);
      },
      onPanResponderRelease: (e, gesture) => {
        animatedValue.flattenOffset();
        lastGestureDy.current += gesture.dy;

        if (gesture.dy > 0) {
        
          if (gesture.dy <= DRAG_THRESHOLD) {
            springAnimation("up");
          } else {
            springAnimation("down");
          }
        } else {
          // dragging up
          if (gesture.dy >= -DRAG_THRESHOLD) {
            springAnimation("down");
          } else {
            springAnimation("up");
          }
        }
      },
    })
  ).current;

  const springAnimation = (direction) => {
    console.log("direction", direction);
    lastGestureDy.current =
      direction === "down" ? MAX_DOWNWARD_TRANSLATE_Y : MAX_UPWARD_TRANSLATE_Y;
    Animated.spring(animatedValue, {
      toValue: lastGestureDy.current,
      useNativeDriver: true,
    }).start();
  };

  const bottomSheetAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          outputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          extrapolate: "clamp",
        }),
      },
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
         source={{ uri: itemImage}}
        style={{
          width: "100%",
          height: "80%",
        }}
        resizeMode="cover"
      ></ImageBackground>
      <Animated.View style={[styles.bottomSheet, bottomSheetAnimation]}>
        <View style={styles.draggableArea} {...panResponder.panHandlers}>
          <View style={styles.dragHandle} />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
          }}
        >
          <View
            style={{
              marginHorizontal: 20,
              paddingVertical: 8,
              width: 120,
              backgroundColor: "#e6fff0",
              borderRadius: 23,
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#6B50F6",
                fontWeight: "500",
              }}
            >
              Popular
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.iconButtonheart}>
              <Image
                source={require("../assets/heart.png")}
                style={styles.icon}
              />
            </TouchableOpacity>
            {/* Thêm nút button hình địa điểm */}
            <TouchableOpacity style={styles.iconButton}>
              <Image
                source={require("../assets/Shape.png")}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
        <Text style={styles.bottomText}>{itemName}</Text>
        <View style={styles.iconContainer}>
          <Image
            source={require("../assets/iconmap.png")}
            style={styles.mapIcon}
          />
          <View style={styles.distanceContainer}>
            <Text style={styles.distanceText}>{itemLocation}</Text>
          </View>
          <Image
            source={require("../assets/star.png")}
            style={styles.starIcon}
          />
          <View style={styles.distanceContainer}>
            <Text style={styles.distanceText}>4.8 Rating</Text>
          </View>
        </View>
        <Text style={styles.paragraphText}>
          {itemDescription}
        </Text>
        <Text style={styles.Texttitle}>Popular Menu</Text>
        <View style={styles.centeredButtonContainer}>
          <TouchableOpacity style={styles.centeredButton}>
            <View style={styles.buttonContentContainer}>
              <Image
                source={require("../assets/chicken.png")}
                style={styles.buttonImage}
              />
              <View style={styles.buttonTextContainer}>
                <Text style={styles.buttonText}>Spacy fresh crab</Text>
                <Text style={styles.buttonPrice}>$10.00</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.centeredButton}>
            <View style={styles.buttonContentContainer}>
              <Image
                source={require("../assets/pizza.png")}
                style={styles.buttonImage}
              />
              <View style={styles.buttonTextContainer}>
                <Text style={styles.buttonText}>Spacy fresh crab</Text>
                <Text style={styles.buttonPrice}>$14.00</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.centeredButton}>
            <View style={styles.buttonContentContainer}>
              <Image
                source={require("../assets/pizza.png")}
                style={styles.buttonImage}
              />
              <View style={styles.buttonTextContainer}>
                <Text style={styles.buttonText}>Pizza</Text>
                <Text style={styles.buttonPrice}>$12.00</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.Texttitle}>Testimonials</Text>
        <View style={styles.Testimonials}>
          <View style={styles.TestimonialsContent}>
            <Image
              source={require("../assets/woman.png")}
              style={styles.productImage}
            />
            <View style={styles.productDetails}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.productName}>Dianne Russel</Text>
                <TouchableOpacity style={styles.purpleButton}>
                <Image
                    source={require("../assets/avtstar.png")}
                    style={styles.starIcon}
                  />
                <Image
                    source={require("../assets/5.png")}
                    style={styles.fiveIcon}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.productPrice}>12 Aprial 2021</Text>
              <Text style={styles.TestimonialsText}>
                This Is great, So delicious! You Must Here, With Your family . .
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.Testimonials}>
          <View style={styles.TestimonialsContent}>
            <Image
              source={require("../assets/woman.png")}
              style={styles.productImage}
            />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>Dianne Russel</Text>
              <Text style={styles.productPrice}>12 Aprial 2021</Text>
              <Text style={styles.TestimonialsText}>
                This Is great, So delicious! You Must Here, With Your family . .
              </Text>
              <TouchableOpacity style={styles.purpleButton}>
                <Image
                  source={require("../assets/avtstar.png")}
                  style={styles.starIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomSheet: {
    position: "absolute",
    width: "100%",
    height: BOTTOM_SHEET_MAX_HEIGHT,

    bottom: BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT,
    ...Platform.select({
      android: { elevation: 3 },
      ios: {
        shadowColor: "#a8bed2",
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowOffset: {
          width: 2,
          height: 2,
        },
      },
    }),
    backgroundColor: "#EEEEEE",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  draggableArea: {
    width: 132,
    height: 32,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  dragHandle: {
    width: 100,
    height: 6,
    backgroundColor: "#d3d3d3",
    borderRadius: 10,
  },

  iconButtonheart: {
    backgroundColor: "#FFC1C1",
    padding: 10,
    borderRadius: 50,
    marginHorizontal: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
  iconButton: {
    backgroundColor: "#B0E0E6",
    padding: 10,
    borderRadius: 50,
    marginHorizontal: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
  bottomText: {
    fontSize: 40,
    marginLeft: 30,
    marginTop: 10,
    fontWeight: "bold",
  },

  mapIcon: {
    width: 25,
    height: 25,
  },
  starIcon: {
    width: 25,
    height: 25,
    marginLeft: 15, // Adjust the marginLeft
  },

  distanceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  distanceText: {
    fontSize: 16,
    marginLeft: 5,
    marginTop: 2, // Add this line
    color: "grey",
  },
  distanceIcon: {
    width: 30,
    height: 30,
  },
  iconContainer: {
    flexDirection: "row",
    marginLeft: 25,
    marginTop: 10,
  },

  paragraphText: {
    marginHorizontal: 12,
    marginLeft: 27,
    marginTop: 15,
    fontSize: 18,
    color: "#555", // Adjust the color
  },
  bulletPoint: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 35,
    marginTop: 10,
  },
  bulletPointText: {
    fontSize: 18,
    marginLeft: 5,
    color: "#555", // Adjust the color
  },

  Texttitle: {
    fontSize: 23,
    marginLeft: 30,
    marginTop: 15,
    fontWeight: "bold",
  },
  Testimonials: {
    backgroundColor: "white", // Pink color
    borderRadius: 10,
    padding: 10,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  TestimonialsContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  productImage: {
    width: 90, // Adjust as needed
    height: 90, // Adjust as needed
    marginRight: 10,
    borderRadius: 5,
  },
  productDetails: {
    flexDirection: "column",
    justifyContent: "center",
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black", // White color
  },
  productPrice: {
    fontSize: 16,
    color: "grey", // White color
  },

  TestimonialsText: {
    marginBottom: 10,
    fontSize: 15,
    color: "#555",
    textAlign: "justify",
    flexWrap: "wrap", // Allow text to wrap within the container
    marginRight: 150,
  },
  addToCartContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 20,
    alignItems: "center",
  },

  buttonText: {
    color: "white", // Adjust color as needed
    fontSize: 12,
  },

  centeredButtonContainer: {
    flexDirection: "row", // Change to row
    justifyContent: "space-between", // Adjust as needed
    marginHorizontal: 10,
    marginTop: 10, // Add margin top
  },

  centeredButton: {
    width: 6, // Set a fixed width for the buttons
  },

  buttonContentContainer: {
    backgroundColor: "white",
    padding: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 150, // Set a fixed height for the buttons
  },

  buttonImage: {
    width: 70,
    height: 70,
    marginBottom: 10, // Adjust as needed
  },

  buttonTextContainer: {
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    fontSize: 14,
    marginTop: 10,
  },

  buttonPrice: {
    fontSize: 12,
    color: "#555",
    alignItems: "center",
  },
  buttonContentContainer: {
    backgroundColor: "white",
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    width: 160,
    height: 170,
    marginLeft: 4,
    marginTop: 10,
  },

  purpleButton: {
    backgroundColor: "#E8E8E8",
    borderRadius: 20,
    padding: 10,
    marginLeft: 140, // Đã sửa đổi marginLeft từ 10 thành 20
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  starIcon: {
    width: 20,
    height: 20,
    marginRight: 6,
  },
  fiveIcon: {
    width: 15,
    height: 19,

  },
});

export default Detailrestaurant;
