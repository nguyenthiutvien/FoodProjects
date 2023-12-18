import Swipeable from 'react-native-swipeable';
import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import trash from '../assets/trash.png';
import DetailItem from './detailItem';

const OrderDetail = ({ navigation }) => {
  const [dataOrder, setDataOrder] = useState([]); // Define dataOrder state here
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch('https://645de9688d08100293f1eb54.mockapi.io/order');
      const data = await response.json();
      setDataOrder(data);

      const initialItems = data.map((item) => ({
        food_item: {
          itemId: item.food_item.itemId,
          itemName: item.food_item.itemName,
          itemImage: item.food_item.itemImage,
          itemPrice: item.food_item.itemPrice,
        },
        quantity: item.quantity,
        id: item.id,
      }));
      setItems(initialItems);
    } catch (error) {
      console.log('Error fetching menu:', error);
    }
  };

  const updateQuantity = (itemId, newQuantity) => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.food_item.itemId === itemId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
    });
    syncDataOrder();
  };

  const handleDeleteItem = (itemId) => {
    setItems((prevItems) =>
      prevItems.filter((item) => item.food_item.itemId !== itemId)
    );
    syncDataOrder();
  };

  const syncDataOrder = () => {
    const updatedDataOrder = items.map((item) => ({
      food_item: {
        itemId: item.food_item.itemId,
        itemName: item.food_item.itemName,
        itemImage: item.food_item.itemImage,
        itemPrice: item.food_item.itemPrice,
      },
      quantity: item.quantity,
      id: item.id,
    }));
    setDataOrder(updatedDataOrder); 
  };

  const calculateTotalPrice = (items) => {
    let total = 0;
    for (const item of dataOrder) {
      total += item.quantity * item.food_item.itemPrice;
    }
    return total;
  };

  const total = calculateTotalPrice(items);

  return (
    <ImageBackground
      source={require("../assets/bg.png")}
      style={styles.image}
    >
      <TouchableOpacity
        style={styles.headerButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          source={require("../assets/Path.png")}
          style={styles.headerButtonImage}
        />
      </TouchableOpacity>
      <View style={styles.popularContainer}>
        <Text style={styles.popularTitle}>Order Detail</Text>
        {dataOrder.map((item, index) => (
          <FoodItem
          key={index}
          imageSource={item.food_item.itemImage}
          foodName={item.food_item.itemName}
          restaurantName={item.food_item.itemTitle}
          foodPrice={`${item.food_item.itemPrice}$`}
          quantity={item.quantity}
          itemId={item.food_item.itemId}
          onUpdateQuantity={updateQuantity}
          onDeleteItem={() => handleDeleteItem(item.food_item.itemId)} 
        />
        
        ))}
      </View>
      <ImageBackground
        source={require("../assets/priceinfo.png")}
        style={styles.priceIm}
        borderRadius={40}
      >
        <View style={styles.priceIm}>
          {dataOrder.map((item, index) => (
            <View style={styles.priceRow} key={index}>
              <Text style={styles.productName}>{item.food_item.itemName}</Text>
              <Text style={styles.productPrice}>
                {item.food_item.itemPrice * item.quantity}$
              </Text>
            </View>
          ))}
          <View style={styles.priceRow}>
            <Text style={styles.producttotal}>Total</Text>
            <Text style={styles.productPricetotal}>{total}$</Text>
          </View>
          <TouchableOpacity
            style={styles.playOrderButton}
            onPress={() => navigation.navigate("ConfirmOrder")}
          >
            <Text style={styles.playOrderText}>Place My Order</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </ImageBackground>
    
  );
};
export default OrderDetail;

const FoodItem = ({
  imageSource,
  foodName,
  restaurantName,
  foodPrice,
  quantity,
  onUpdateQuantity,
  onDeleteItem,
  itemId
}) => {
  const incrementQuantity = () => {
    console.log('Increment Quantity');
    onUpdateQuantity(itemId, quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      onUpdateQuantity(itemId, quantity - 1);
    }
  };
  const handleDelete = () => {
    onDeleteItem(itemId); 
  };

  
  return (
    <Swipeable
      rightButtons={[
        <TouchableOpacity
          onPress={handleDelete}
          style={styles.deleteButton}
        >
          <Image source={trash} style={styles.trash} />
        </TouchableOpacity>
      ]}
      useNativeDriver={true}
    >
      <View style={styles.foodItem}>
      <Image source={{ uri: imageSource }} style={styles.foodImage} />
        <View style={styles.foodInfo}>
          <Text style={styles.foodName}>{foodName}</Text>
          <Text style={styles.foodtitle}>{}</Text>
          <Text style={styles.foodPrice}>{foodPrice}</Text>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={decrementQuantity}>
            <Text style={styles.minusButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={incrementQuantity}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Swipeable>
  );
};
const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 930,
  },
  headerButton: {
    position: "absolute",
    top: 40, 
    left: 30, 
    padding: 10,
    backgroundColor: "#F8F8FF",
    borderRadius: 18,
    width: 60, 
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  headerButtonText: {
    fontSize: 35, 
    color: "#6600CC", 
    textAlign: "center", 
    textAlignVertical: "center", 
  },
  headerButtonImage: {
    width: 14, 
    height: 18, 
  },
  popularContainer: {
    marginTop: 95,
    marginHorizontal: 30,
  },
  popularTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  foodItem: {
    backgroundColor: "#F8F8FF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20, 
  },
  foodImage: {
    width: 70,
    height: 70,
    marginRight: 15,
    marginLeft: 10,
    borderRadius: 10,
  },
  foodInfo: {
    flex: 1,
  },
  foodName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  foodtitle: {
    fontSize: 13,
    color: "#DCDCDC",
  },
  foodPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6600CC",
    marginRight: 20,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  quantityButton: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10,
    backgroundColor: "#6B50F6", 
    borderRadius: 5, 
    color: "white",
    marginRight:10 
  },
  minusButton: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10,
    backgroundColor: "#EEEEEE", 
    borderRadius: 5, 
    color: "black", 
  },

  quantityText: {
    fontSize: 18,
    marginHorizontal: 10,
    color: "grey",
  },
  priceInfo: {
    paddingLeft: 20,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  priceIm: {
    padding: 30,
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 3, 
    right: 0,
    width: 390,
    height: 240,
  },
  productName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",

  },
  producttotal: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 5,
    color: "white",
    marginTop: 20,
    
  },
  productPricetotal: {
    fontSize: 17,
    color: "white",
    fontWeight: "bold",
    marginRight: 60,
    marginTop: 20,
  },
  productPrice: {
    fontSize: 15,
    color: "white",
    marginRight: 60,
    fontWeight: "bold",
  },
  playOrderButton: {
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 90,
    borderRadius: 15,
    marginLeft: 12, 
    alignSelf: "flex-start", 
    marginBottom: 10,
    marginTop: 10,
  },
  playOrderText: {
    color: "#6B50F6",
    fontWeight: "bold",
    fontSize: 14,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  trashIcon: {
    width: 20,
    height: 20,
    marginBottom:60
  },
  deleteButton: {
    backgroundColor: '#6959CD', 
    width: 50,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginLeft: 26,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  
});