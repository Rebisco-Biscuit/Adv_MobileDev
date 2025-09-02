import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SpotifyLogin() {
  return (
    <View style={styles.container}>
      {/* Spotify Logo */}
      <Image
        source={require('@/assets/images/spotify-logo.png')}
        style={styles.logo}
      />
       <Text style={styles.title}>Spotify</Text>
      {/* Login Inputs */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#525252"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#525252"
        secureTextEntry
      />
      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.greytxt}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Sign in</Text>
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
        <TouchableOpacity>
          <Text style={styles.signupText}> Sign up</Text>
        </TouchableOpacity>
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
    width: 25,
    height: 25,
    borderRadius: 100,
  },
    logoRow: {
      flexDirection: 'row',
      justifyContent: 'center', // center them horizontally
      alignItems: 'center',     // align vertically
      marginVertical: 10,
      gap: 35,                  // add space between (React Native 0.71+)
    },
  title: {
      fontWeight: 'bold',
      color: '#fff',
      fontSize: 34,
      marginBottom: 80,
  },
  logo: {
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
  loginButton: {
    backgroundColor: '#1DB954',
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
