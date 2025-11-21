import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert, TouchableOpacity, Text, useColorScheme } from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';
import * as Location from 'expo-location';

const pointsOfInterest = [
  { id: 1, title: 'SangKarlos', coords: { latitude: 10.3521, longitude: 123.9133 } },
  { id: 2, title: 'KFC', coords: { latitude: 10.3529, longitude: 123.9143 } },
  { id: 3, title: 'Family Park', coords: { latitude: 10.3549, longitude: 123.9146 } },
];

export default function App() {
  const systemScheme = useColorScheme(); // "light" or "dark"
  const [region, setRegion] = useState(null);
  const [overrideScheme, setOverrideScheme] = useState(null); // manual toggle
  const effectiveScheme = overrideScheme || systemScheme; // priority: manual > system

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission denied', 'We need location access to show your map position.');
        return;
      }

      const current = await Location.getCurrentPositionAsync({});
      setRegion({
        latitude: current.coords.latitude,
        longitude: current.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });

      Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High, distanceInterval: 10 },
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setRegion({
            latitude,
            longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          });
          checkGeofences(latitude, longitude);
        }
      );
    })();
  }, []);

  const checkGeofences = (lat, lon) => {
    pointsOfInterest.forEach(point => {
      const distance = getDistance(lat, lon, point.coords.latitude, point.coords.longitude);
      if (distance <= 100) {
        Alert.alert(`Entered ${point.title}`);
      }
    });
  };

  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371e3;
    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(Δφ/2) ** 2 + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const toggleTheme = () => {
    setOverrideScheme(effectiveScheme === 'dark' ? 'light' : 'dark');
  };

  if (!region) return null;

  const isDark = effectiveScheme === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#000' : '#fff' }]}>
      <MapView
        style={styles.map}
        region={region}
        showsUserLocation
        showsMyLocationButton
        zoomEnabled
        scrollEnabled
        customMapStyle={isDark ? darkMapStyle : lightMapStyle}
      >
        {pointsOfInterest.map(point => (
          <Marker
            key={point.id}
            coordinate={point.coords}
            title={point.title}
          />
        ))}
        {pointsOfInterest.map(point => (
          <Circle
            key={`circle-${point.id}`}
            center={point.coords}
            radius={100}
            strokeColor="rgba(0, 150, 255, 0.5)"
            fillColor="rgba(0, 150, 255, 0.2)"
          />
        ))}
      </MapView>

      <TouchableOpacity
        style={[styles.themeButton, { backgroundColor: isDark ? '#fff' : '#333' }]}
        onPress={toggleTheme}>
        <Text style={{ color: isDark ? '#333' : '#fff', fontWeight: 'bold' }}>
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// ---- MAP STYLES ----
const darkMapStyle = [
  { elementType: 'geometry', stylers: [{ color: '#1d2c4d' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#8ec3b9' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#1a3646' }] },
];

const lightMapStyle = [
  { elementType: 'geometry', stylers: [{ color: '#ebe3cd' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#523735' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#f5f1e6' }] },
];

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  themeButton: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    padding: 10,
    borderRadius: 10,
    elevation: 3,
  },
});
