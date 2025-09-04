import React, { useState } from 'react';
import { Image } from 'expo-image';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Link } from 'expo-router';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function SpotifyRegister() {
  const [checked, setChecked] = useState('first');

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 100, gap: 20,}}>
        <Image
          source={require('@/assets/images/spotify-logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Spotify</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#525252"
      />

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

    <View style={{ flexDirection: 'row', alignItems: 'center',}}>
        <Text style={styles.orText}>Date of Birth:</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <TextInput
            style={{ width: 50, textAlign: 'center', padding: 8 }}
            placeholder="MM"
            placeholderTextColor="#525252"
            keyboardType="number-pad"
            maxLength={2}
          />
          <TextInput
            style={{ width: 50, textAlign: 'center', padding: 8 }}
            placeholder="DD"
            placeholderTextColor="#525252"
            keyboardType="number-pad"
            maxLength={2}
          />
          <TextInput
            style={{ width: 60, textAlign: 'center', padding: 8 }}
            placeholder="YY"
            placeholderTextColor="#525252"
            keyboardType="number-pad"
            maxLength={4}
          />
        </View>
    </View>

    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, gap: 10, }}>
      <RadioButton
        value="Male"
        status={checked === 'first' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('first')}
      />
      <Text style={{ color: '#1DB954' }}>Male</Text>

      <View style={{ width: 30 }} /> {/* Spacer */}

      <RadioButton
        value="Female"
        status={checked === 'second' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('second')}
      />
      <Text style={{ color: '#1DB954' }}>Female</Text>
    </View>

        <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>

      <Text style={styles.orText}>Sign Up With</Text>

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

        <View style={styles.signupContainer}>
        <Text style={styles.greytxt}>Already have an account?</Text>
        <Link href="../SpotifyLogin">
            <Text style={styles.signupText}> Sign In</Text>
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
      justifyContent: 'center', // center them horizontally
      alignItems: 'center',     // align vertically
      gap: 45,                  // add space between (React Native 0.71+)
    },
  title: {
      fontWeight: 'bold',
      color: '#fff',
      fontSize: 38,
      letterSpacing: 1.5,
  },
  logo: {
    width: 55,
    height: 55,
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
