import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons as IconSymbol } from '@expo/vector-icons';


export default function SpotifyProfile() {

  return (
    <View>
        <TouchableOpacity style={{ position: 'absolute', top: 55, left: 20, zIndex: 10 }}>
            <IconSymbol name="arrow-back" size={30} color="#ffffffc4" />
        </TouchableOpacity>
    <LinearGradient
        colors={['#b18888ff', '#000000ff']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={{ width: '100%', height: '35%', justifyContent: 'center', marginBottom: 30 }}
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
                    <Text style={styles.counter}> 0</Text>
                    <Text style={styles.subtitle}>followers</Text>
                    <Text style={styles.counter}>⋅</Text>
                    <Text style={styles.counter}>2</Text>
                    <Text style={styles.subtitle}>following</Text>                    
                </View>
            </View>
        </View>
    </LinearGradient>
      <TouchableOpacity style={styles.Button}>
        <Text style={styles.loginText}>Edit</Text>
      </TouchableOpacity>
      {/* Divider */}
      <Text style={styles.orText}>Be Correct with</Text>

      {/* Social Login Buttons */}
    <View style={styles.logoRow}>
      <TouchableOpacity>
        <Image
          source={require('@/assets/images/fb-logo2.png')}
          style={styles.containerlogo}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('@/assets/images/google-icon2.png')}
          style={styles.containerlogo}
        />
      </TouchableOpacity>
    </View>

      {/* Sign Up */}
      <View style={styles.signupContainer}>
        <Text style={styles.greytxt}>Don’t have an account?</Text>
        <Link href="../SpotifyRegister">
          <Text style={styles.signupText}> Sign up</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Spotify dark background
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  containerlogo: {
    width: 20,
    height: 20,
    borderRadius: 100,
  },
    logoRow: {
      flexDirection: 'row',
      marginLeft: 20,
      marginTop: '25%',
      alignItems: 'center',     // align vertically
      marginVertical: 10,
      gap: 20,                  // add space between (React Native 0.71+)
    },
  title: {
      fontWeight: 'bold',
      color: '#fff',
      fontSize: 30,
  },
  subtitle: {
    color: '#8d8d8dff',
    fontSize: 12,
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
    outline: '1px solid #1DB954',
    width: '95%',
    padding: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 5,
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
