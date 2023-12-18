import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textTop}>
          Find Your {'\n'}
          Favorite Food
        </Text>
        <Image source={require('../assets/thongbao.png')} style={styles.bellIcon} />
      </View>

  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 1000,
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
  
  button: {
    backgroundColor: '#F8F8FF',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 18,
    position: 'absolute',
    right: 1,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
  },
});

export default Header;