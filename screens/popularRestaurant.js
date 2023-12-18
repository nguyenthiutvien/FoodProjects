import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ImageBackground, StatusBar } from 'react-native';
import Header from '../components/header';

const Images = require('../assets/Home.png');

const PopularRestaurant = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch('https://63aa9ce8fdc006ba6046fa23.mockapi.io/Product');
      const data = await response.json();
      setRestaurants(data);
    } catch (error) {
      console.log('Error fetching restaurants:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/bg.png')} style={styles.image}>
        <Header />
        <Text style={styles.popularTitle}>Popular Restaurant</Text>

        <ScrollView contentContainerStyle={styles.restaurantContainer}>
          {restaurants.map((restaurant) => (
            <View style={styles.restaurantBox} key={restaurant.id}>
              <Image source={{ uri: restaurant.images }} style={styles.restaurantLogo} />
              <Text style={styles.restaurantName}>{restaurant.name}</Text>
              <Text style={styles.minutesText}>{restaurant.minutes}</Text>
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
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  restaurantContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
    flexWrap: 'wrap',
  },
  restaurantBox: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    width: '45%',
    marginBottom: 20,
    marginHorizontal: 1,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  restaurantLogo: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  restaurantName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  minutesText: {
    color: '#666',
  },
  popularTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 20,
    marginTop: 5,
  },
});

export default PopularRestaurant;