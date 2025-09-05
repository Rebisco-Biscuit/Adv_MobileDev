import React from 'react';
import { useFonts } from 'expo-font';
import { Image, ImageBackground } from 'expo-image';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function SpotifySearch() {
    const [loaded] = useFonts({
    GothamMedium: require('@/assets/fonts/gotham-medium.ttf'),
    });  
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#121212' }} showsVerticalScrollIndicator={true}>
      <View style={styles.stickyHeader}>
        <View style={[styles.headerRow, { alignItems: 'center' }]}>
          <Image
            source={require('@/assets/images/fredrinn.jpg')}
            style={styles.logo}
          />
          <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>Search</Text>
          <View style={{ flex: 1 }} />
          <Icon name="camera" size={24} color="#fff"/>
        </View>
      </View>

      <View style={{ position: 'relative', width: '95%', alignSelf: 'center' }}>
        <TextInput
          style={[styles.searchInput, { paddingLeft: 50 }]}
          placeholder="What do you want to listen to?"
          placeholderTextColor="#121212"
        />
        <Icon
          name="search"
          size={30}
          color="#121212"
          style={{ position: 'absolute', left: 25, top: 20, }}
        />
      </View>
      <Text style={styles.title}>Start Browsing</Text>

        <View style={[styles.headerRow, { justifyContent: 'space-between', paddingHorizontal: 15, }]}>
          <View style={[styles.browsingContainer, {    backgroundColor: '#e11578ff',}]}>
              <Text style={styles.browsingTitle}>Music</Text>
          </View>

          <View style={[styles.browsingContainer, {    backgroundColor: '#215b49ff',}]}>
              <Text style={styles.browsingTitle}>Podcasts</Text>
          </View>
        </View>

        <View style={[styles.headerRow, { justifyContent: 'space-between', paddingHorizontal: 15, }]}>
          <View style={[styles.browsingContainer, {    backgroundColor: '#8311e1ff',}]}>
              <Text style={styles.browsingTitle}>Live Events</Text>
          </View>

          <View style={[styles.browsingContainer, {    backgroundColor: '#417780ff',}]}>
              <Text style={styles.browsingTitle}>Hip-Hop</Text>
          </View>
        </View>

    <Text style={styles.title}>Discover something new</Text>

    <View style={{ paddingHorizontal: 20, alignItems: 'center'}}>
        <View style={styles.headerRow}>
            <View style={{ position: 'relative', width: '31%'}}>
                <Image
                    source={require('@/assets/images/cool.jpg')}
                    style={styles.reels}
                />
                <View style={{ position: 'relative', bottom: 50, left: 5,}}>
                    <Text style={styles.subtext}>Music</Text>
                    <Text style={styles.subtext}>for you</Text>
                </View>
            </View>

            <View style={{ position: 'relative', width: '31%'}}>
                <ImageBackground
                    source={require('@/assets/images/monitorhead.jpg')}
                    style={styles.reels}>
                </ImageBackground>
                <View style={{ position: 'relative', bottom: 30, left: 5,}}>
                    <Text style={styles.subtext}>#anime</Text>
                </View> 
            </View>               

            <View style={{ position: 'relative', width: '31%'}}>
                <Image
                    source={require('@/assets/images/cool2.jpg')}
                    style={styles.reels}
                />
                <View style={{ position: 'relative', bottom: 50, left: 5,}}>
                    <Text style={styles.subtext}>#japanese</Text>
                    <Text style={styles.subtext}>pop rock</Text>
                </View>                 
            </View>
            
        </View>
    </View>
        
        <Text style={[styles.title, {bottom: 30,}]}>Browse all</Text>
</ScrollView>
);
}

const styles = StyleSheet.create({
  stickyHeader: {
    backgroundColor: '#121212',
    paddingTop: 60,
    paddingBottom: 10,
    paddingHorizontal: 15,
    zIndex: 1000,
  },
  subtext: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  reels: {
    width: '100%',
    height: 185,
    marginTop: 15,
    borderRadius: 5,
  },
  browsingContainer: {
    marginTop: 15,
    paddingBottom: '10%',
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    width: '48%',
    borderRadius: 5,
  },
  browsingTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },  
  title: {
    fontWeight: 'bold',
    marginTop: 12,
    marginLeft: 15,
    color: '#fff',
    fontSize: 20,
  },
searchInput: {
    backgroundColor: '#f7f6f4ff',
    width: '95%',
    fontSize: 16,
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 10,
    padding: 14,
},  
  headerRow: {
    flexDirection: 'row',
    gap: 10,
  },
  logo: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    borderRadius: 60,
  },    
});