import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Header from '../components/header';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';


const Images = require('../assets/Home.png');
const RestaurantLogo1 = require('../assets/res6.png');
const RestaurantLogo2 = require('../assets/res1.png');
const RestaurantLogo3 = require('../assets/res3.png');
const RestaurantLogo4 = require('../assets/res3.png');
const RestaurantLogo5 = require('../assets/res4.png');
const RestaurantLogo6 = require('../assets/res5.png');

const Home = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [restaurant, setRestaurant] = useState('');
  const [menu, setMenu] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);

  useEffect(() => {
    fetchRestaurants();
    fetchMenu();
  }, []);

  const fetchRestaurants = () => {
    fetch('https://63aa9ce8fdc006ba6046fa23.mockapi.io/Product')
      .then((response) => response.json())
      .then((data) => {
        setRestaurant(data);
        setFilteredRestaurants(data);
      });
  };

  const fetchMenu = () => {
    fetch('https://63aa9ce8fdc006ba6046fa23.mockapi.io/food')
      .then((response) => response.json())
      .then((data) => {
        setMenu(data);
        setFilteredMenu(data);
      });
  };

  const handleSearch = () => {
    const filteredRestaurants = restaurant.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredRestaurants);

    const filteredMenu = menu.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredMenu(filteredMenu);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={Images} resizeMode="cover" style={styles.image}>
        <Header />
        <View style={styles.searchAndMenuContainer}>
          <View style={styles.searchContainer}>
            <Image source={require('../assets/search.png')} style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="What do you want to order ?"
              placeholderTextColor="#DCDCDC"
              value={searchText}
              onChangeText={setSearchText}
              onSubmitEditing={handleSearch} 
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Filter')}>
            <Image source={require('../assets/Filter.png')} style={styles.filterIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <ScrollView>
      
        <Image style={styles.advertise} source={require('../assets/adve.png')} />

                    <View style={styles.text}>
              <Text style={styles.boldText}>Nearest Restaurant</Text>

              <TouchableOpacity onPress={() => navigation.navigate('PopularRestaurant')}>

                <Text style={styles.greenText}>View more</Text>
              </TouchableOpacity>
            </View>
                    <View style={styles.restaurantContainer}>
                <FlatList
                  data={filteredRestaurants}
                  keyExtractor={(item) => item.id.toString()}
                  horizontal={true} 
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.restaurantBox}
                      onPress={() => navigation.navigate('Detailrestaurant', {
                          itemId: item.id,
                          itemName: item.name,
                          itemImage: item.images,
                          itemLocation: item.minutes,
                          itemDescription: item.description
                      })
                    }
                    >
                      <Image source={{ uri: item.images }} style={styles.restaurantLogo} />
                      <Text style={styles.restaurantName}>{item.name}</Text>
                      <Text style={styles.minutesText}>{item.minutes}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>

            <View style={styles.text}>
              <Text style={styles.boldText}>Popular menu</Text>
              <TouchableOpacity onPress={() => navigation.navigate('PopularMenu')}>
                <Text style={styles.greenText}>View more</Text>
              </TouchableOpacity>
            </View>
           
            <View style={styles.popularContainer}>
            <FlatList
              data={filteredMenu.slice(0, 3)}
              keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.foodItem}
                  onPress={() => navigation.navigate('DetailItem', {
                    itemId: item.id,
                    itemName: item.name,
                    itemImage: item.image,
                    itemDescription: item.description,
                    itemPrice: item.price,
                    itemTitle: item.title
                  })
                }
                >
                  <Image source={{ uri: item.image }} style={styles.foodImage} />
                  <View style={styles.foodInfo}>
                    <Text style={styles.foodName}>{item.name}</Text>
                    <Text style={styles.foodtitle}>{item.title}</Text>
                  </View>
                  <View>
                    <Text style={styles.foodPrice}>{item.price}$</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          </ScrollView>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: 390,
        height: '100%',
        
    },
    filterIcon: {
        width: 30,
        height: 30,
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
        marginLeft: 30,
      },
      bellIcon: {
        width: 130,
        height: 90,
        marginRight: 10,
        marginTop: 25,
      },
      textTop: {
        fontSize: 30,
        color: "black",
        fontWeight: "bold",
        padding: 10,
      },
      searchAndMenuContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        marginTop: 20,
      },
      searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8F8FF',
        borderRadius: 20, 
        paddingHorizontal: 10,
        paddingVertical: 6,
        marginRight: 85, 
      },
      searchInput: {
        flex: 1,
        paddingVertical: 8,
        paddingLeft: 10,
        fontSize: 18,
        height: 50,
      },
      searchIcon: {
        width: 30,
        height: 30,
      },
      button: {
        backgroundColor: '#F8F8FF',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 18,
        position: 'absolute',
        right:1, 
      },
      buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'blue',
        textAlign: 'center',
      },

    advertise: {
        marginLeft: 20,
        marginRight: 20,
        width: 350,
    },
    content: {
        flex: 1,
        height: '100%',
        marginTop:10
    },
    text: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    greenText: {
        color: 'blue',
        fontSize: 14,
    },
    restaurantContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 20,
        flexWrap: 'wrap',
    },
    restaurantBox: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: 25, 
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
    popularContainer: {
        marginTop: 20,
        marginHorizontal: 15,
      },
      popularTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
      },
      foodItem: {
        backgroundColor: '#F8F8FF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginTop: 10
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

export default Home;