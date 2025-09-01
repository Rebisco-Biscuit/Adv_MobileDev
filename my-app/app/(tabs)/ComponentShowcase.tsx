import React, { useState } from 'react';
import { Image } from 'expo-image';
import { View, Text, StyleSheet, StatusBar, Button, Alert, Modal, TouchableOpacity } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const ComponentShowcase: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleButtonPress = () => {
    setIsModalVisible(true); // Show modal when the button is pressed
  };

  const hideModal = () => {
    setIsModalVisible(false); // Hide modal when the close button is pressed
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor="transparent"
      headerImage={
        <Image
          source={require('@/assets/images/your-favourite-aizen-haedcannon-v0-31lo6l8u18ed1.jpeg.webp')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Component Showcase</ThemedText>
      </ThemedView>

      <ThemedText style={styles.justifiedText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </ThemedText>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Employee of the Month</ThemedText>
      </ThemedView>

      <ThemedText type="subtitle">1. Aizen Sosuke</ThemedText>
      <ThemedText>More about Aizen</ThemedText>

      {/* Button that triggers modal */}
      <Button
        onPress={handleButtonPress}
        title="Click Here"
        color="#841584"
      />

      {/* Modal Popup for Images */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={hideModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <ThemedText type="subtitle" style={styles.highlightText}>Sosuke Aizen</ThemedText>
            <ThemedText style={styles.blackTxt}>Bleach character</ThemedText>
              <ThemedView style={styles.titleContainer}>
                    <Image source={require('@/assets/images/aizenmcdo1.jpeg')} style={styles.modalImage} />
              </ThemedView>
              <ThemedText style={styles.blackTxt}>あいぜん そうすけ</ThemedText>
              <ThemedText type="subtitle" style={styles.blackTxt}>藍染 惣右介</ThemedText>

                  <ThemedText style={styles.blackTxt}>Race: Soul</ThemedText>
                  <ThemedText style={styles.blackTxt}>Birthday: May 29</ThemedText>
                  <ThemedText style={styles.blackTxt}>Gender: Male</ThemedText>
                  <ThemedText style={styles.blackTxt}>Height: 186cm (6'1")</ThemedText>
                  <ThemedText style={styles.blackTxt}>Weight: 74 kg (163 lbs)</ThemedText>

            {/* Close button to hide modal */}
            <TouchableOpacity onPress={hideModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reactLogo: {
    height: 200,
    width: '100%', // make the image full width
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  image: {
    width: 100, // set width for each image
    height: 100, // set height for each image
    resizeMode: 'cover',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  justifiedText: {
    textAlign: 'justify',
  },
    blackTxt: {
    color: 'black',
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
  },
  modalContent: {
    backgroundColor: '#e8e8e8',
    color: 'black',
    padding: 20,
    borderRadius: 10,
    width: 350,
    alignItems: 'center',
  },

  modalImage: {
    width: 100,  // Larger image size in the modal
    height: 100,
    //marginBottom: 10,
  },
  closeButton: {
    backgroundColor: '#841584',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
    highlightText: {
    backgroundColor: '#c7c7c7',
    textAlign: 'center',
    width: '100%',
    color: 'black',
  },
});

export default ComponentShowcase;
