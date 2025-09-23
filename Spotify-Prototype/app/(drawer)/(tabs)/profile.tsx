import React, { useState, useEffect } from 'react';
import { Modal, TouchableOpacity, View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSharedValue, withTiming, withSequence, withRepeat, useAnimatedStyle } from 'react-native-reanimated';

export default function SpotifyProfile() {
  const router = useRouter();

  // State for modal visibility
  const [modalVisible, setModalVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  // Profile data state
  const [profileUsername, setProfileUsername] = useState('');
  const [profileEmail, setProfileEmail] = useState('');

  // Error states
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const fadeIn = useSharedValue(0);
  const shakeAnimation = useSharedValue(0);

  const profileImageOpacity = useAnimatedStyle(() => {
    return {
      opacity: withTiming(fadeIn.value, { duration: 500 }),
    };
  });

  const shakeStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: withRepeat(withSequence(withTiming(-10), withTiming(10), withTiming(-10), withTiming(10)), 2, false) }
      ]
    };
  });

  useEffect(() => {
    if (modalVisible) {
      fadeIn.value = 1;
    }
  }, [modalVisible]);

  // Fetch stored data on component mount
  useEffect(() => {
    const loadProfileData = async () => {
      const storedUsername = await AsyncStorage.getItem('username');
      const storedEmail = await AsyncStorage.getItem('email');

      // Use stored values if available, else fallback to default values
      setProfileUsername(storedUsername || 'Fredrinn');
      setProfileEmail(storedEmail || 'fredrinnvance6wapo@mail.com');
      setUsername(storedUsername || 'Fredrinn'); // Set modal username field
      setEmail(storedEmail || 'fredrinnvance6wapo@mail.com'); // Set modal email field
    };

    loadProfileData();
  }, []); // Empty dependency array, so this runs only once on mount

  // Handle form validation for username and email
  const validateForm = () => {
    let isValid = true;

    // Validate username
    if (!username.match(/^[a-zA-Z0-9_]{3,20}$/)) {
      setUsernameError('Username must be 3-20 characters, alphanumeric or underscores only.');
      isValid = false;
      shakeAnimation.value = withRepeat(withSequence(withTiming(-10), withTiming(10), withTiming(-10), withTiming(10)), 2, false); // Trigger shake
    } else {
      setUsernameError('');
    }

    // Validate email
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
      shakeAnimation.value = withRepeat(withSequence(withTiming(-10), withTiming(10), withTiming(-10), withTiming(10)), 2, false); // Trigger shake
    } else {
      setEmailError('');
    }

    return isValid;
  };

  const handleSubmit = async () => {
    console.log('Save button clicked');
    if (validateForm()) {
      console.log('Form validated');
      
      // Save to AsyncStorage
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('email', email);
      console.log('Saved username and email to AsyncStorage:', username, email);
      
      // Update state to reflect the changes in profile
      setProfileUsername(username);
      setProfileEmail(email);
      
      setModalVisible(false); // Close the modal
    } else {
      console.log('Form validation failed');
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ position: 'absolute', top: 55, left: 15, zIndex: 10 }}
        onPress={() => router.push('../(tabs)')}
      >
        <MaterialIcons name="arrow-back-ios-new" size={20} color="#ffffffc4" />
      </TouchableOpacity>

      <LinearGradient
        colors={['#9a7183ff', '#121212']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={{ width: '100%', height: '30%', justifyContent: 'center', marginBottom: 30 }}
      >
        <View style={styles.logoRow}>
          <Image source={require('@/assets/images/fredrinn.jpg')} style={styles.imagePlaceholder} />
          <View style={[profileImageOpacity]}>
            {/* Dynamically update profile name and email */}
            <Text style={styles.title}>{profileUsername}</Text>
            <Text style={styles.subtitle}>{profileEmail}</Text>
            <Text style={styles.counter}>18,910 followers ⋅ 7 following</Text>
          </View>
        </View>
      </LinearGradient>

      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 25, top: -20, left: 15 }}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.loginText}>Edit</Text>
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Edit Profile</Text>

            <TextInput
              style={[styles.input, usernameError && styles.inputError]}
              placeholder="Username"
              value={username}
              onChangeText={(text) => setUsername(text)}
              // Add shake animation style here
              animatedStyle={shakeStyle}
            />
            {usernameError && <Text style={styles.errorText}>{usernameError}</Text>}

            <TextInput
              style={[styles.input, emailError && styles.inputError]}
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              // Add shake animation style here
              animatedStyle={shakeStyle}
            />
            {emailError && <Text style={styles.errorText}>{emailError}</Text>}

            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit} // Save action
            >
              <Text style={styles.loginText}>Save</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={handleCloseModal}
            >
              <Text style={styles.loginText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#121212', // Spotify dark background 
  },
  logoRow: { 
    flexDirection: 'row', 
    marginTop: '25%', 
    alignItems: 'center', 
    marginVertical: 10, 
    left: 15, 
    gap: 20, 
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
  inputError: {
    borderColor: 'red',
    borderWidth: 1,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    alignSelf: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContainer: {
    backgroundColor: '#121212',
    padding: 30,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#1DB954',
    padding: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 15,
  },
  cancelButton: {
    backgroundColor: '#6e6e6eff',
    padding: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
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
});
