import { useEffect } from 'react';
import { router } from 'expo-router';
import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons as IconSymbol } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import SpotifyProfile from './(tabs)/profile';

export default function ProfileRedirect() {
return SpotifyProfile();
}