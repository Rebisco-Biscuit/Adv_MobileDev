import { ReactNode, useRef, useEffect } from 'react';
import { Animated, StyleSheet, View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

interface SlideScreenWrapperProps {
  children: ReactNode; // <--- Proper type
}

export default function SlideScreenWrapper({ children }: SlideScreenWrapperProps) {
  const router = useRouter();
  const translateX = useRef(new Animated.Value(width)).current; // start off-screen right

  useEffect(() => {
    // Slide in animation
    Animated.timing(translateX, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  const goBack = () => {
    // Slide out animation
    Animated.timing(translateX, {
      toValue: width,
      duration: 300,
      useNativeDriver: true,
    }).start(() => router.back());
  };

  return (
    <Animated.View style={[styles.container, { transform: [{ translateX }] }]}>
      {children}
      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <Text style={{ color: 'white' }}>Back</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 8,
  },
});
