import React from 'react';
import { useFonts } from 'expo-font';
import { Image } from 'expo-image';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

type DrawerParamList = {
  "(tabs)": undefined; 
};

export default function SpotifyLibrary() {
    const [loaded] = useFonts({
    GothamMedium: require('@/assets/fonts/gotham-medium.ttf'),
    });

    const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();
    
    return(
    <View style={{ flex: 1, backgroundColor: '#121212' }}>
      <View style={styles.stickyHeader}>
        <View style={[styles.headerRow, { alignItems: 'center' }]}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image
                    source={require('@/assets/images/fredrinn.jpg')}
                    style={styles.logo}
                />
            </TouchableOpacity>  
          <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>Your Library</Text>
          <View style={{ flex: 1, gap: 20, }} />
          <FeatherIcon name="search" size={24} color="#fff"/>
          <Ionicons name="add" size={30} color="#fff"/>
        </View>
        
        <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', gap: 10, marginTop: 15, }}>
          <Text style={{ backgroundColor: '#2f2f2fff', color: '#fff', padding: 10, width: '25%', borderRadius: 60, textAlign: 'center', fontSize: 12, }}>Playlists</Text>
          <Text style={{ backgroundColor: '#2f2f2fff', color: '#fff', padding: 10, width: '22%', borderRadius: 60, textAlign: 'center', fontSize: 12, }}>Albums</Text>
          <Text style={{ backgroundColor: '#2f2f2fff', color: '#fff', padding: 10, width: '20%', borderRadius: 60, textAlign: 'center', fontSize: 12, }}>Artists</Text>        
          <Text style={{ backgroundColor: '#2f2f2fff', color: '#fff', padding: 10, width: '32%', borderRadius: 60, textAlign: 'center', fontSize: 12, }}>Downloaded</Text>               
      </View>
      </ScrollView>
      </View>
<ScrollView showsVerticalScrollIndicator={true}>
        <View style={[styles.headerRow, { alignItems: 'center', marginTop: -5,}]}>
            <FontAwesome5 name="sort-amount-up" size={14} color="#fff" style={{ padding: 15, }} />
            <Text style={{ color: '#fff', fontSize: 14, textAlignVertical: 'center', left: -15,}}>Recents</Text>
            <View style={{ flex: 1, gap: 20, }} />
            <MaterialIcons name='grid-view' size={20} color='#fff' style={{ padding: 15, }} />
        </View>

<View style={{flexDirection: 'column', gap: 15,}}>
        <TouchableOpacity style={{left: 15, flexDirection: 'row', gap: 10,}}>
            <Image
            source={{uri: 'https://misc.scdn.co/liked-songs/liked-songs-300.jpg'}}
            style={styles.containerlogo}
            />
            <View style={styles.playlistContainer}>
                <Text style={styles.playlistText}>Liked Songs</Text>
                <View style={{flexDirection: 'row',}}>
                    <AntDesign name="pushpin" size={12} color="#1ed760" style={{marginRight: 5,}}/>
                    <Text style={styles.subtitle}>Playlist ⋅ 2,192 songs</Text>
                </View>
            </View>            
        </TouchableOpacity> 

        <TouchableOpacity style={{left: 15, flexDirection: 'row', gap: 10,}}>
            <Image
            source={require('@/assets/images/allstar2.jpg')}
            style={styles.containerlogo}
            />
            <View style={styles.playlistContainer}>
                <Text style={styles.playlistText}>All Star</Text>
                <View style={{flexDirection: 'row',}}>
                    <FontAwesome5 name="arrow-circle-down" size={14} color="#1ed760" style={{marginRight: 5, marginTop: 2,}}/>
                    <Text style={styles.subtitle}>Playlist ⋅ Fredrinn</Text>
                </View>
            </View>            
        </TouchableOpacity>

        <TouchableOpacity style={{left: 15, flexDirection: 'row', gap: 10,}}>
            <Image
            source={{uri: 'https://i.scdn.co/image/ab67616d0000b2736ed9aef791159496b286179f'}}
            style={styles.containerlogo}
            />
            <View style={styles.playlistContainer}>
                <Text style={styles.playlistText}>METRO BOOMIN PRESENTS SP...</Text>
                <Text style={styles.subtitle}>Album ⋅ Metro Boomin</Text>
            </View>            
        </TouchableOpacity>          

        <TouchableOpacity style={{left: 15, flexDirection: 'row', gap: 10,}}>
            <Image
            source={require('@/assets/images/fredrinn2.jpg')}
            style={styles.containerlogo}
            />
            <View style={styles.playlistContainer}>
                <Text style={styles.playlistText}>Maoy Playlist</Text>
                <Text style={styles.subtitle}>Playlist ⋅ Fredrinn</Text>
            </View>
        </TouchableOpacity>          

        <TouchableOpacity style={{left: 15, flexDirection: 'row', gap: 10,}}>
            <Image
            source={{uri: 'https://i.scdn.co/image/ab6761610000e5eb755b52545884873c8ebbac20'}}
            style={[styles.containerlogo, {borderRadius: 60,}]}
            />
            <View style={styles.playlistContainer}>
                <Text style={styles.playlistText}>Odetari</Text>
                <Text style={styles.subtitle}>Artist</Text>
            </View>            
        </TouchableOpacity>

        <TouchableOpacity style={{left: 15, flexDirection: 'row', gap: 10,}}>
            <Image
            source={{uri: 'https://i.scdn.co/image/ab6761610000517436e8f783dc68dcb1be1003a2'}}
            style={[styles.containerlogo, {borderRadius: 60,}]}
            />
            <View style={styles.playlistContainer}>
                <Text style={styles.playlistText}>Artemas</Text>
                <Text style={styles.subtitle}>Artist</Text>
            </View>            
        </TouchableOpacity>        

        <TouchableOpacity style={{left: 15, flexDirection: 'row', gap: 10,}}>
            <Image
            source={require('@/assets/images/fredrinncinema.jpg')}
            style={styles.containerlogo}
            />
            <View style={styles.playlistContainer}>
                <Text style={styles.playlistText}>Chill Playlist</Text>
                <Text style={styles.subtitle}>Playlist ⋅ Fredrinn</Text>
            </View>
        </TouchableOpacity>   

        <TouchableOpacity style={{left: 15, flexDirection: 'row', gap: 10,}}>
            <Image
            source={{uri: 'https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/dw/cover/en'}}
            style={styles.containerlogo}
            />
            <View style={styles.playlistContainer}>
                <Text style={styles.playlistText}>Discover Weekly</Text>
                <Text style={styles.subtitle}>Playlist ⋅ Made for Fredrinn</Text>
            </View>
        </TouchableOpacity>              

        <TouchableOpacity style={{left: 15, flexDirection: 'row', gap: 10,}}>
            <Image
            source={{uri: 'https://i.scdn.co/image/ab6761610000e5eb4a21b4760d2ecb7b0dcdc8da'}}
            style={[styles.containerlogo, {borderRadius: 60,}]}
            />
            <View style={styles.playlistContainer}>
                <Text style={styles.playlistText}>Billie Eilish</Text>
                <Text style={styles.subtitle}>Artist</Text>
            </View>            
        </TouchableOpacity>

        <TouchableOpacity style={{left: 15, flexDirection: 'row', gap: 10,}}>
            <Image
            source={{uri: 'https://i.scdn.co/image/ab67706f00000002f8b3113ff97bf94e7c8f6354'}}
            style={styles.containerlogo}
            />
            <View style={styles.playlistContainer}>
                <Text style={styles.playlistText}>Top Gaming Tracks</Text>
                <Text style={styles.subtitle}>Playlist ⋅ Made for Fredrinn</Text>
            </View>            
        </TouchableOpacity>                           
    </View>
    </ScrollView>           
</View>
);
}

const styles = StyleSheet.create({
    stickyHeader: {
        backgroundColor: '#121212',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.65,
        shadowRadius: 3.84,
        elevation: 2,        
        paddingTop: 60,
        paddingBottom: 10,
        paddingHorizontal: 15,
        zIndex: 1000,
    },
  headerRow: {
    flexDirection: 'row',
    gap: 10,
  },
  containerlogo: {
    width: 65,
    height: 65,
  },
  playlistContainer: {
    flexDirection: 'column', 
    gap: 5, 
    marginLeft: 5, 
    alignContent: 'center', 
    justifyContent: 'center',
  },
  playlistText: {
    color: '#fff',
    fontSize: 16,
  },
  subtitle: {
    color: '#8d8d8dff',
    fontSize: 14,
  },           
  logo: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    borderRadius: 60,
  },   
});