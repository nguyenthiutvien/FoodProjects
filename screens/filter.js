import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'; 
import Header from '../components/header';
import { data} from '../data/data';

const Images = require('../assets/Home.png');
const RestaurantLogo1 = require('../assets/res2.png');
const RestaurantLogo2 = require('../assets/res1.png'); 

const Filter = ({ navigation }) => {
        const [selectedType, setSelectedType] = useState(''); 
        const [selectedLocation, setSelectedLocation] = useState(''); 
        const [selectedFood, setSelectedFood] = useState(''); 
        const [searchResults, setSearchResults] = useState([]);
        const [searching, setSearching] = useState(false); 

        const reset =() =>{
          setSelectedType('');
          setSelectedLocation('');
          setSelectedFood('');
          setSearchResults([]);
          setSearching(false);
        }
        const handleSearch = () => {
            let results = [...data];
          
            if (selectedType === 'restaurant') {
              results = results.filter((item) => item.type === 'restaurant');
            } else if (selectedType === 'menu') {
              results = results.filter((item) => item.type === 'menu');
            }
          
            if (selectedLocation) {
              results = results.filter((item) => item.minutes === selectedLocation);
            }
          
            if (selectedFood) {
              results = results.filter((item) => item.name === selectedFood);
            }
          
            setSearchResults(results);
            console.log('Search results:', results);
          };
    
        return (
        <View style={styles.container}>
          <ImageBackground
            source={require('../assets/bg.png')}
            style={styles.image}
          >
         <Header/>
        <ScrollView>
        {searchResults.length === 0 && ( 
    <TouchableOpacity style={styles.resetButton} onPress={reset}>
      <Text style={styles.resetButtonText}>Reset</Text>
    </TouchableOpacity>
  )}
  {searchResults.length === 0 && ( 
    <>
      <Text style={styles.typeText}>Type</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setSelectedType('restaurant');
          }}
        >
          <Text style={styles.buttonText}>Restaurant</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setSelectedType('menu');
          }}
        >
          <Text style={styles.buttonText}>Menu</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.typeText}>Location</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setSelectedLocation('1km');
          }}
        >
          <Text style={styles.buttonText}>1km</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setSelectedLocation('<10km');
          }}
        >
          <Text style={styles.buttonText}>{'<10km'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setSelectedLocation('>10km');
          }}
        >
          <Text style={styles.buttonText}>{'>10km'}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.typeText}>Food</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setSelectedFood('Cake');
          }}
        >
          <Text style={styles.buttonText}>Cake</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setSelectedFood('Soup');
          }}
        >
          <Text style={styles.buttonText}>Soup</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setSelectedFood('Main course');
          }}
        >
          <Text style={styles.buttonText}>Main course</Text>
        </TouchableOpacity>
      </View>
    </>
  )}

                   {/* <View>
               
            {searchResults?.map((result, index) => (
                <Text  key={index}>{result.name}</Text>
            ))}
            </View> */}
                  <View style={styles.restaurantContainer}>
          {searchResults.map((item, index) => {
            if (item.type === 'restaurant') {
              return (
                <View style={styles.restaurantBox} key={item.id}>
                  <Image source={item.image} style={styles.restaurantLogo} />
                  <Text style={styles.restaurantName}>{item.name}</Text>
                  <Text style={styles.minutesText}>{item.minutes}</Text>
                </View>
              );
            } else if (item.type === 'menu') {
              return (
  
                <View style={styles.foodItem} key={item.id}>
                  <Image source={item.image} style={styles.foodImage} />
                  <View style={styles.foodInfo}>
                    <Text style={styles.foodName}>{item.name}</Text>
                    <Text style={styles.foodtitle}>{item.title}</Text>
                  </View>
                  <View>
                    <Text style={styles.foodPrice}>{item.price}</Text>
                  </View>
                </View>
              );
            }
          })}
        </View>
                    <View style={styles.searchButtonContainer}>
                        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                            <Text style={styles.searchButtonText}>Search</Text>
                            </TouchableOpacity>
                        </View>
                        </ScrollView>
                    </ImageBackground>
                    </View>
                );
                };
                
    const styles = StyleSheet.create({
      textTop: {
        fontSize: 45,
        color: "black",
        fontWeight: "bold",
        padding: 10,
      },
      searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 30,
        marginTop: 20,
        backgroundColor: '#F8F8FF',
        borderRadius: 20, 
        paddingHorizontal: 10, 
        paddingVertical: 5, 
      },
      searchInput: {
        flex: 1,
        paddingVertical: 10,
        paddingLeft: 10,
        fontSize: 18,
      },
      searchIcon: {
        width: 30,
        height: 30,
      },
      typeText: {
        fontSize: 20,
        color: "black",
        fontWeight: "bold",
        marginLeft: 30,
        marginTop: 20,
      },
      buttonContainer: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 14,
      },
     button: {
        backgroundColor: '#e4fcf4',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginHorizontal:13,  
    },
      buttonText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#806cf4',
      },
      searchButtonContainer: {
      alignItems: 'center',
      marginTop: 90,
    },
    searchButton: {
      backgroundColor: '#8470FF',
      borderRadius: 20,
      paddingHorizontal: 140,
      paddingVertical: 17,
    },
    searchButtonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
      height:20
    },
    resetButton: {
      backgroundColor: '#FF6347',
      width: 100,
      height: 30,
      alignItems: 'center',
      borderRadius: 34 ,
      marginLeft: 280 
    
    },
    resetButtonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
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
        marginTop: 10,
        width: '100%'
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
    
    export default Filter;