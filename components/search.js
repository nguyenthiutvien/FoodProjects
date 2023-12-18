import React, { useState } from 'react';
import { StatusBar, ImageBackground, Image, TextInput, TouchableOpacity, Modal } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Header from './header';
import { restaurants, menus } from '../data/data';
import { PopularRestaurant } from '../screens';


const Search = ({ navigation }) => {

    const [selectedType, setSelectedType] = useState(''); 
    const [selectedLocation, setSelectedLocation] = useState(''); 
    const [selectedFood, setSelectedFood] = useState(''); 
    const [searchResults, setSearchResults] = useState([]);

    const reset =() =>{
      setSelectedType('');
      setSelectedLocation('');
      setSelectedFood('');
      setSearchResults([]);
    }
    const handleSearch = () => {
      let results = [];
    
      if (selectedType === 'restaurant') {
        results = [...restaurants];
      } else if (selectedType === 'menu') {
        results = [...menus];
      }
    
      if (selectedLocation) {
        results = results.filter((restaurant) => restaurant.minutes === selectedLocation);
      }
    
      if (selectedFood) {
        results = results.filter((menu) => menu.name === selectedFood);
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
               <View>
           
        {searchResults?.map((result, index) => (
            <Text  key={index}>{result.name}</Text>
        ))}
        </View>
        <TouchableOpacity style={styles.resetButton} onPress={reset}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>
        <View style={styles.searchButtonContainer}>
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Text style={styles.searchButtonText}>Search</Text>
            </TouchableOpacity>
        </View>
     
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

},
resetButtonText: {
  fontSize: 16,
  fontWeight: 'bold',
  color: 'white',
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
  fontSize: 12,
  height: 50, 
},
searchIcon: {
  width: 30,
  height: 30,
},

});

export default Search;