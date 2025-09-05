import React, { useState } from 'react';
import { Image } from 'expo-image';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Link, useRouter } from 'expo-router';

export default function SpotifyRegister() {
  const [checked, setChecked] = useState('male');
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
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

      <View style={styles.dobRow}>
        <Text style={styles.label}>Date of Birth:</Text>
        <View style={styles.dobInputs}>
          <TextInput
            style={styles.dobInput}
            placeholder="MM"
            placeholderTextColor="#525252"
            keyboardType="number-pad"
            maxLength={2}
          />
          <TextInput
            style={styles.dobInput}
            placeholder="DD"
            placeholderTextColor="#525252"
            keyboardType="number-pad"
            maxLength={2}
          />
          <TextInput
            style={styles.dobInputWide}
            placeholder="YY"
            placeholderTextColor="#525252"
            keyboardType="number-pad"
            maxLength={4}
          />
        </View>
      </View>

      <View style={styles.radioRow}>
        <RadioButton
          value="male"
          status={checked === 'male' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('male')}
        />
        <Text style={styles.radioLabel}>Male</Text>
        <View style={{ width: 30 }} />
        <RadioButton
          value="female"
          status={checked === 'female' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('female')}
        />
        <Text style={styles.radioLabel}>Female</Text>
      </View>

      <TouchableOpacity style={styles.signupButton}
              onPress={() => router.push("../SpotifyProfile")}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.sectionLabel}>Sign Up With</Text>

      <View style={styles.socialRow}>
        <TouchableOpacity>
          <Image
            source={require('@/assets/images/fb-logo2.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('@/assets/images/google-icon2.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.bottomRow}>
        <Text style={styles.bottomText}>Already have an account?</Text>
        <Link href="../SpotifyLogin" asChild>
          <Text style={styles.bottomLink}>Sign In</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212' ,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 65,
    gap: 20,
  },
  logo: {
    width: 55,
    height: 55,
    resizeMode: 'contain',
    borderRadius: 60,
  },
  title: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 38,
    letterSpacing: 1.5,
  },
  input: {
    width: '95%',
    backgroundColor: '#1a1a1a',
    padding: 15,
    borderRadius: 20,
    color: '#fff',
    marginBottom: 20,
  },
  dobRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    color: '#1DB954',
    fontWeight: '600',
    marginRight: 10,
  },
  dobInputs: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  dobInput: {
    width: 50,
    textAlign: 'center',
    padding: 8,
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    color: '#fff',
  },
  dobInputWide: {
    width: 60,
    textAlign: 'center',
    padding: 8,
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    color: '#fff',
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 10,
  },
  radioLabel: {
    color: '#1DB954',
    fontWeight: '600',
  },
  signupButton: {
    backgroundColor: '#1DB954',
    width: '95%',
    padding: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 5,
  },
  signupButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sectionLabel: {
    color: '#1DB954',
    fontWeight: '600',
    marginVertical: 10,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 45,
    marginBottom: 10,
  },
  socialIcon: {
    width: 20,
    height: 20,
    borderRadius: 100,
  },
  bottomRow: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  bottomText: {
    color: '#525252',
  },
  bottomLink: {
    color: '#1DB954',
    fontWeight: '600',
    marginLeft: 5,
  },
});
