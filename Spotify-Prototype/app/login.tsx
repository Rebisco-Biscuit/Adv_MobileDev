import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Link, Redirect, useRouter } from 'expo-router';

export default function SpotifyLogin() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/spotify-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Spotify</Text>
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
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}
              onPress={() => router.push("../(drawer)/(tabs)")}>
          <Text style={styles.loginButtonText}>Sign In</Text>
      </TouchableOpacity>      

      <Text style={styles.sectionLabel}>Be Correct with</Text>
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
        <Text style={styles.bottomText}>Don’t have an account?</Text>
        <Link href="../signup" asChild>
          <Text style={styles.bottomLink}>Sign up</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 110,
    height: 110,
    resizeMode: 'contain',
    borderRadius: 60,
  },
  title: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 30,
    marginBottom: 65,
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
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotText: {
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
  loginButtonText: {
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
