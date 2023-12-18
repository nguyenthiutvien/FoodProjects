import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Card } from 'react-native-elements';

const MapScreen = (navigation) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [markers, setMarkers] = useState([]);

  const handleSearch = () => {
    // Điều hướng API tìm kiếm địa điểm và cập nhật state `markers` với kết quả tìm kiếm
    // Ví dụ: sử dụng Geocoding API của Google Maps hoặc API tìm kiếm địa điểm khác
  };

  const handleMarkerPress = (location) => {
    setSelectedLocation(location);
  };

  const handleSetLocationPress = () => {
    if (selectedLocation) {
        // Lấy địa chỉ đã chọn từ state selectedLocation
        const selectedAddress = selectedLocation.address;
    // Xử lý logic khi người dùng chọn địa điểm và nhấn nút "set location"
    // Ví dụ: cập nhật địa chỉ đã chọn và thực hiện hành động cần thiết
  };
}

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for a location"
        value={searchText}
        onChangeText={setSearchText}
      />
      <Button title="Search" onPress={handleSearch} />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 0, // Thay thế bằng vị trí ban đầu của bản đồ
          longitude: 0, // Thay thế bằng vị trí ban đầu của bản đồ
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinate}
            title={marker.title}
            onPress={() => handleMarkerPress(marker)}
          />
        ))}
      </MapView>
      {selectedLocation && (
        <Card containerStyle={styles.selectedLocationCard}>
          <Text>{selectedLocation.address}</Text>
          <Button title="Set Location" onPress={handleSetLocationPress} />
        </Card>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  searchInput: {
    width: '80%',
    marginVertical: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  map: {
    width: '100%',
    height: '50%',
  },
  selectedLocationCard: {
    width: '80%',
    padding: 10,
  },
});

export default MapScreen;
