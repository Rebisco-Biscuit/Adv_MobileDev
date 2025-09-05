import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons as IconSymbol } from '@expo/vector-icons';


export default function SpotifyProfile() {

  return (
    <View style={styles.container}>
        <TouchableOpacity style={{ position: 'absolute', top: 55, left: 20, zIndex: 10 }}>
            <IconSymbol name="arrow-back" size={30} color="#ffffffc4" />
        </TouchableOpacity>
    <LinearGradient
        colors={['#657286ff', '#121212']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={{ width: '100%', height: '30%', justifyContent: 'center', marginBottom: 30 }}
    >
        <View style={styles.logoRow}>
            <Image
                source={require('@/assets/images/fredrinn.jpg')}
                style={styles.imagePlaceholder}
            />
            <View style={{flexDirection: 'column', gap: 5, marginLeft: 10,}}>
            <Text style={styles.title}>Fredrinn</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 5,}}>
                    <IconSymbol name="eye-off-outline" size={15} color="#ffffffc4" />                    
                    <Text style={styles.counter}> 587</Text>
                    <Text style={styles.subtitle}>followers</Text>
                    <Text style={styles.counter}>⋅</Text>
                    <Text style={styles.counter}>1</Text>
                    <Text style={styles.subtitle}>following</Text>                    
                </View>
            </View>
        </View>
    </LinearGradient> 
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 25, top: -30, left: 20,}}>
            <TouchableOpacity style={styles.Button}>
                <Text style={styles.loginText}>Edit</Text>                 
            </TouchableOpacity>
            <IconSymbol name="share-outline" size={25} color="#ffffffc4" /> 
                <Text style={styles.loginText}>...</Text>   
        </View>

    <Text style={styles.subheading}>Playlists</Text>

        <TouchableOpacity style={{left: 20, top: 15, flexDirection: 'row', gap: 10,}}>
            <Image
            source={require('@/assets/images/fredrinn2.jpg')}
            style={styles.containerlogo}
            />
            <View style={styles.playlistContainer}>
                <Text style={styles.playlistText}>Maoy Playlist</Text>
                <Text style={styles.subtitle}>5,582 saves ⋅ Fredrinn</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{left: 20, top: 35, flexDirection: 'row', gap: 10,}}>
            <Image
            source={require('@/assets/images/fredrinncinema.jpg')}
            style={styles.containerlogo}
            />
            <View style={styles.playlistContainer}>
                <Text style={styles.playlistText}>Chill Playlist</Text>
                <Text style={styles.subtitle}>9,201 saves ⋅ Fredrinn</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 10,
            borderWidth: 1,
            borderColor: '#6e6e6eff',
            width: '40%',
            padding: 8,
            borderRadius: 50,
            alignSelf: 'center',
            marginTop: 65,
        }}>
            <Text style={styles.loginText}>See all playlists</Text>                 
        </TouchableOpacity>                
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Spotify dark background
  },
  containerlogo: {
    width: 50,
    height: 50,
  },
    logoRow: {
      flexDirection: 'row',
      marginTop: '25%',
      alignItems: 'center',
      marginVertical: 10,
      left: 20,
      gap: 20,                 
    },
  title: {
      fontWeight: 'bold',
      color: '#fff',
      fontSize: 30,
  },
  playlistContainer: {
    flexDirection: 'column', 
    gap: 5, 
    marginLeft: 5, 
    alignContent: 'center', 
    justifyContent: 'center',
  },
  subtitle: {
    color: '#8d8d8dff',
    fontSize: 12,
  },
  playlistText: {
    color: '#fff',
    fontSize: 16,
  },
    subheading: {
    color: '#fff',
    fontSize: 20, 
    left: 20,
    fontWeight: 'bold',
    },
    counter: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
  imagePlaceholder: {
    width: 110,
    height: 110,
    resizeMode: 'contain',
    borderRadius: 60,
  },
  input: {
    width: '95%',
    backgroundColor: '#1a1a1a',
    padding: 15,
    borderRadius: 20,
    color: '#fff',
    marginBottom: 20,
  },
  greytxt: {
    color: '#525252',
  },
  Button: {
    backgroundColor: 'transparent',
    width: '17%',
    padding: 6,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#6e6e6eff',
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  orText: {
    color: '#1DB954',
    fontWeight: 'semibold',
    marginVertical: 10,
  },
  socialButton: {
    width: '100%',
    padding: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 10,
  },
  socialText: {
    color: '#fff',
    fontWeight: '600',
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  signupText: {
    color: '#1DB954',
    fontWeight: 'semibold',
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end', // push text to the right
    marginBottom: 20,       // add spacing below
  },

});
