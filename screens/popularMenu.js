import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Header from '../components/header';

const Images = require('../assets/Home.png');

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch('https://63aa9ce8fdc006ba6046fa23.mockapi.io/food');
      const data = await response.json();
      setMenu(data);
    } catch (error) {
      console.log('Error fetching menu:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/bg.png')} style={styles.image}>
        <Header/>
        <Text style={styles.popularTitle}>Popular Menu</Text>
        <ScrollView>
          {menu.map((menuItem) => (
            <View style={styles.popularContainer} key={menuItem.id}>
              <View style={styles.foodItem}>
                <Image source={{ uri: menuItem.image }} style={styles.foodImage} />
                <View style={styles.foodInfo}>
                  <Text style={styles.foodName}>{menuItem.name}</Text>
                  <Text style={styles.foodtitle}>{menuItem.title}</Text>
                </View>
                <View>
                  <Text style={styles.foodPrice}>{menuItem.price}$</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: 1000,
  },
  popularContainer: {
    marginTop: 30,
    marginHorizontal: 30,
  },
  popularTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 40,
    marginTop: 10 
  },
  foodItem: {
    backgroundColor: '#F8F8FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  foodImage: {
    width: 70,
    height: 70,
    marginRight: 15,
    marginLeft:10,
    borderRadius: 10,
  },
  foodInfo: {
    flex: 1,
  },
  foodName: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  foodtitle: {
    fontSize: 17,
    color: '#DCDCDC',
  },
  foodPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
    marginRight:20
  },
});

export default PopularMenu;