import React, { useEffect,useState,useRef } from "react";
import { Alert } from "react-native";
import * as FirebaseDynamicLinks from 'expo-firebase-dynamic-links';
import { initializeApp, getApps } from '@react-native-firebase/app'; 
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

const DetailItem = ({route}) => {
  const { itemId, itemName, itemImage, itemDescription, itemPrice, itemTitle } = route.params;
  const [dataOrder, setDataOrder] = useState([]); 

  const fetchDataOrder = () => {
    fetch("https://645de9688d08100293f1eb54.mockapi.io/order")
      .then((response) => response.json())
      .then((data) => {
        setDataOrder(data);
        console.log("Fetched data from API:", data);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  };

  useEffect(() => {
    fetchDataOrder();
  }, []); 
  const updateQuantity = (itemId, newQuantity) => {
    const updatedDataOrder = dataOrder.map((item) => {
      if (item.food_item.itemId === itemId) {
        item.quantity = newQuantity;
      }
      return item;
    });
  
    fetch(`https://645de9688d08100293f1eb54.mockapi.io/order/${itemId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: newQuantity }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Quantity updated successfully:", data);
        setDataOrder(updatedDataOrder);
      })
      .catch((error) => {
        console.error("Error updating quantity:", error);
      });
  };
  
  const handleAddToCart = () => {
    const existingItem = dataOrder.find((item) => item.food_item.itemId === itemId);
    console.log('sss',existingItem)
    if (existingItem) {
      const newQuantity = existingItem.quantity + 1;
      updateQuantity(itemId, newQuantity);
      Alert.alert("Success", "Quantity has been updated!");
    }else {
      const newItem = {
        food_item: {
          itemId: itemId,
          itemName: itemName,
          itemImage: itemImage,
          itemDescription: itemDescription,
          itemPrice: itemPrice,
          itemTitle: itemTitle,
        },
        quantity: 1,
      };
  
      fetch("https://645de9688d08100293f1eb54.mockapi.io/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Item added to cart:", data);
          fetchDataOrder();
          Alert.alert("Success", "Item added to cart successfully!");
        })
        .catch((error) => {
          console.error("Error adding item to cart:", error);
        });
    }
  };
  
  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyDYOW-wJmEzgMU3qEgjKNLAvEuAmjb4EyU",
      authDomain: "foodapp-3e096.firebaseapp.com",
      projectId: "foodapp-3e096",
      messagingSenderId: "362380793518",
      appId: "1:362380793518:android:0fc67c43fe1108f7153f3f",
    };

    if (getApps().length === 0) {
      initializeApp(firebaseConfig);
    }

    fetchDataOrder();
  }, []);

  const handleShare = async () => {
    try {
      const { shortLink } = await FirebaseDynamicLinks.buildShortLinkAsync({
        link: `https://diffood.page.link/qbvQ`,
        domainUriPrefix: 'https://diffood.page.link',
      });

      console.log('Short Link:', shortLink);
    } catch (error) {
      Alert.alert('Error', 'An error occurred while creating the dynamic link.');
    }
  };

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
            <Text style={styles.distanceText}>19km</Text>
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
        <View style={styles.bulletPoint}>
          <Text style={styles.bulletPointText}>• Strawbery</Text>
        </View>
        <View style={styles.bulletPoint}>
          <Text style={styles.bulletPointText}>• Cream</Text>
        </View>
        <View style={styles.bulletPoint}>
          <Text style={styles.bulletPointText}>• wheat</Text>
        </View>
        <Text style={styles.Texttitle}>Testimonials</Text>
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
              
            </View>
            
          </View>
        
        </View>
        </ScrollView>
        <View style={styles.addToCartContainer}>

  <TouchableOpacity
          style={styles.addToCartButton}
          onPress={handleAddToCart}
        >
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.shareButton}
        onPress={handleShare}
      >
        <Text style={styles.shareButtonText}>Share</Text>
      </TouchableOpacity>
</View>
        
        
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
    fontSize: 35,
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
    marginLeft: 15, 
  },

  distanceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  distanceText: {
    fontSize: 13,
    marginLeft: 5,
    marginTop: 2,
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
    marginHorizontal: 10,
    marginLeft: 27,
    marginTop: 15,
    fontSize: 15,
    color: "#555", // Adjust the color
  },
  bulletPoint: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 35,
    marginTop: 10,
  },
  bulletPointText: {
    fontSize: 13,
    marginLeft: 5,
    color: "#555", // Adjust the color
  },
  paragraphText2: {
    marginHorizontal: 15,
    marginLeft: 27,
    marginTop: 15,
    fontSize: 15,
    color: "#555", // Adjust the color
  },
  Texttitle: {
    fontSize: 23,
    marginLeft: 30,
    marginTop: 15,
    fontWeight: "bold",
  },
  Testimonials: {
    backgroundColor: "white", 
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
    width: 90, 
    height: 90, 
    marginRight: 10,
    borderRadius: 5,
  },
  productDetails: {
    flexDirection: "column",
    justifyContent: "center",
  },
  productName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black", 
  },
  productPrice: {
    fontSize: 16,
    color: "grey", 
  },

  
  TestimonialsText: {
    marginBottom: 10,
    fontSize: 15,
    color: "#555",
    textAlign: 'justify',
    flexWrap: 'wrap', 
    marginRight: 150
  },
  addToCartContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
  },
  addToCartButton: {
    backgroundColor: "#007BFF", 
    paddingVertical: 20,
    paddingHorizontal: 140,
    borderRadius: 20,
    marginTop: 15,
  },
  addToCartText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default DetailItem;