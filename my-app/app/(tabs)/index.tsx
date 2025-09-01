import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      //headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerBackgroundColor="transparent"
        headerImage={
        <Image
          source={require('@/assets/images/your-favourite-aizen-haedcannon-v0-31lo6l8u18ed1.jpeg.webp')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to McDonalds!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Do not Try it</ThemedText>
        <ThemedText>
          Our coke has too much <ThemedText type="defaultSemiBold">water</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'ice',
              android: 'ice',
              web: 'ice',
            })}
          </ThemedText>{' '}.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore Other Healthy Options</ThemedText>
        <ThemedText>
          {`Try Caesar salad or something idk...`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a Life</ThemedText>
        <ThemedText>
          {`When you're ready,`}
          <ThemedText type="defaultSemiBold"> run</ThemedText>{'.'}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
            <Image source={require('@/assets/images/your-favourite-aizen-haedcannon-v0-31lo6l8u18ed1.jpeg.webp')} style={styles.image} />
            <Image source={require('@/assets/images/your-favourite-aizen-haedcannon-v0-31lo6l8u18ed1.jpeg.webp')} style={styles.image} />
      </ThemedView>
    </ParallaxScrollView>
  );
}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
reactLogo: {
  height: 200,
  width: '100%',   // make the image full width
  bottom: 0,
  left: 0,
  position: 'absolute',
  //resizeMode: 'contain', // ensures the image fits inside without cropping
},
ImgContainers: {
  flexDirection: 'row',   // align children horizontally
  justifyContent: 'space-between', // optional, to space them out
  alignItems: 'center',   // vertically center if needed
  padding: 10,
},

image: {
  width: 100,    // set width for each image
  height: 100,   // set height for each image
  resizeMode: 'contain',
},


});
