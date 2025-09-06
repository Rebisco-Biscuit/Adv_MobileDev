import React from 'react';
import { useFonts } from 'expo-font';
import { Image } from 'expo-image';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type DrawerParamList = {
  "(tabs)": undefined; 
};

export default function SpotifyHome() {
  const [loaded] = useFonts({
    GothamMedium: require('@/assets/fonts/gotham-medium.ttf'),
  });  

  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

  return (
    <View style={{ flex: 1, backgroundColor: '#121212' }}>
      <View style={styles.stickyHeader}>
        <View style={styles.headerRow}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={require('@/assets/images/fredrinn.jpg')}
            style={styles.logo}
          />
      </TouchableOpacity>          
          <Text style={{ backgroundColor: '#1DB954', color: '#121212', padding: 10, width: '18%', borderRadius: 60, textAlign: 'center' }}>All</Text>
          <Text style={{ backgroundColor: '#2f2f2fff', color: '#fff', padding: 10, width: '25%', borderRadius: 60, textAlign: 'center' }}>Music</Text>
          <Text style={{ backgroundColor: '#2f2f2fff', color: '#fff', padding: 10, width: '32%', borderRadius: 60, textAlign: 'center' }}>Podcasts</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={true}>
      <View style={[styles.headerRow, { alignItems: 'center', justifyContent: 'center' }]}>
        <View style={styles.playlistContainer}>
          <Image
            source={require('@/assets/images/fredrinncinema.jpg')}
            style={styles.playlistImage}
          />
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.playlistTitle}>Chill</Text>
            <Text style={styles.playlistTitle}>Playlist</Text>
          </View>
        </View>
          <View style={styles.playlistContainer}>
            <Image
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Tame_Impala_-_Currents.png' }}
              style={styles.playlistImage}
            />
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.playlistTitle}>Currents</Text>
            </View>
          </View>
        </View>

        <View style={[styles.headerRow, { alignItems: 'center', justifyContent: 'center', marginTop: 10 }]}>
            <View style={styles.playlistContainer}>
              <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/9/9b/After_Laughter_Paramore_album_cover.png' }}
                style={styles.playlistImage}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.playlistTitle}>After</Text>
                <Text style={styles.playlistTitle}>Laughter</Text>
              </View>            
            </View>
          <View style={styles.playlistContainer}>
            <Image
              source={require('@/assets/images/fredrinn2.jpg')}
              style={styles.playlistImage}
            />
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.playlistTitle}>Maoy</Text>
              <Text style={styles.playlistTitle}>Playlist</Text>
            </View>            
          </View>
        </View>

        <View style={[styles.headerRow, { alignItems: 'center', justifyContent: 'center', marginTop: 10 }]}>
          <View style={styles.playlistContainer}>
            <Image
              source={{ uri: 'https://i.scdn.co/image/ab67616d0000b27399cf928a0bc891cdf194efe6' }}
              style={styles.playlistImage}
            />
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.playlistTitle}>DOOR</Text>
              <Text style={styles.playlistTitle}>TO DUSK</Text>              
            </View>
          </View>
          <View style={styles.playlistContainer}>
            <Image
              source={{uri: 'https://static.wikia.nocookie.net/ladygaga/images/2/2d/BornThisWay-DeluxeEdition.jpg/revision/latest/scale-to-width-down/3500?cb=20111120030308'}}
              style={styles.playlistImage}
            />
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.playlistTitle}>Born This</Text>
              <Text style={styles.playlistTitle}>Way</Text>
            </View>
          </View>
        </View>

        <View style={[styles.headerRow, { alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 15 }]}>
          <View style={styles.playlistContainer}>
            <Image
              source={{uri: 'https://i.scdn.co/image/ab67616d0000b273401ea2c7ac7ef87bd32c990f'}}
              style={styles.playlistImage}
            />
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.playlistTitle}>Let Me</Text>
              <Text style={styles.playlistTitle}>Know</Text>
            </View>
          </View>
          <View style={styles.playlistContainer}>
            <Image
              source={require('@/assets/images/fredgwapo.jpg')}
              style={styles.playlistImage}
            />
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.playlistTitle}>Igop Fred</Text>
              <Text style={styles.playlistTitle}>Playlist</Text>
            </View>
          </View>
        </View>

        <Text style={styles.title}>Charts</Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: 'row', gap: 20, paddingBottom: 20, paddingLeft: 15, top: 15, marginBottom: 20, }}>
            <View style={{ flexDirection: 'column' }}>
              <Image
                source={require('@/assets/images/aizen1.webp')}
                style={styles.bigPlaylists}
              />
              <Text style={styles.bigPlaylistsTitle}>Aizen my GOAT,</Text>
              <Text style={styles.bigPlaylistsTitle}>amazing</Text>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <Image
                source={require('@/assets/images/rk800.jpg')}
                style={styles.bigPlaylists}
              />
              <Text style={styles.bigPlaylistsTitle}>bermonths na guys</Text>
              <Text style={styles.bigPlaylistsTitle}>tagae ko ninyog kwek2</Text>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <Image
                source={require('@/assets/images/fredsl.jpg')}
                style={styles.bigPlaylists}
              />
              <Text style={styles.bigPlaylistsTitle}>fredrinn gwapo</Text>
              <Text style={styles.bigPlaylistsTitle}>pogi omg ily</Text>
            </View>

            <View style={{ flexDirection: 'column' }}>
              <Image
                source={require('@/assets/images/aizen2.jpg')}
                style={styles.bigPlaylists}
              />
              <Text style={styles.bigPlaylistsTitle}>unsa may ibutang</Text>
              <Text style={styles.bigPlaylistsTitle}>nako anhi</Text>
            </View>

          </View>
        </ScrollView>

        
        <Text style={styles.title}>Made for Fredrinn</Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: 'row', gap: 20, paddingBottom: 20, paddingLeft: 15, top: 15, marginBottom: 20, }}>
            <View style={{ flexDirection: 'column' }}>
              <Image
                source={require('@/assets/images/allstar2.jpg')}
                style={styles.bigPlaylists}
              />
              <Text style={styles.bigPlaylistsTitle}>Estes, Melissa and</Text>
              <Text style={styles.bigPlaylistsTitle}>Fredrinn</Text>
            </View>            
            <View style={{ flexDirection: 'column' }}>
              <Image
                source={{uri: 'https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/2/ab6761610000e5eb19c2790744c792d05570bb71/en'}}
                style={styles.bigPlaylists}
              />
              <Text style={styles.bigPlaylistsTitle}>Kinsa Mani, Odetari,</Text>
              <Text style={styles.bigPlaylistsTitle}>Sia and m...</Text>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <Image
                source={{uri: 'https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/1/ab6761610000e5eb39ba6dcd4355c03de0b50918/en'}}
                style={styles.bigPlaylists}
              />
              <Text style={styles.bigPlaylistsTitle}>Who, Post Malone,</Text>
              <Text style={styles.bigPlaylistsTitle}>Diplo and m...</Text>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <Image
                source={{uri: 'https://cdn-images.dzcdn.net/images/cover/862ab860ff69c30deeb5979db6e46b62/0x1900-000000-80-0-0.jpg'}}
                style={styles.bigPlaylists}
              />
              <Text style={styles.bigPlaylistsTitle}>Metro Boomin, More,</Text>
              <Text style={styles.bigPlaylistsTitle}>Someone and m...</Text>
            </View>
          </View>
        </ScrollView>

        <View style={{ flexDirection: 'row', gap: 20,paddingLeft: 15, }}>
          <Image
            source={{uri: 'https://i.scdn.co/image/ab6761610000517436e8f783dc68dcb1be1003a2'}}
            style={{width: 55, height: 55, borderRadius: 100,}}
          />
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.bigPlaylistsTitle}>For fans of</Text>
            <Text style={[styles.title, {left: -15,}]}>Artemas</Text>
          </View>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: 'row', gap: 20, paddingBottom: 20, paddingLeft: 15, top: 15, marginBottom: 20, }}>
            <View style={{ flexDirection: 'column' }}>
              <Image
                source={{uri: 'https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO0qAhSF-default.jpg'}}
                style={styles.bigPlaylists}
              />
              <Text style={styles.bigPlaylistsTitle}>This is Artemas. The</Text>
              <Text style={styles.bigPlaylistsTitle}>essential tracks, all in...</Text>              
            </View>  
            <View style={{ flexDirection: 'column' }}>
              <Image
                source={{uri: 'https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/0PCCGZ0wGLizHt2KZ7hhA2/en'}}
                style={styles.bigPlaylists}
              />
              <Text style={styles.bigPlaylistsTitle}>The Neighbourhood,</Text>
              <Text style={styles.bigPlaylistsTitle}>Diplo, Artemas, Monte...</Text>
            </View>                      
            <View style={{ flexDirection: 'column' }}>
              <Image
                source={{uri: 'https://i.scdn.co/image/ab67706f0000000269d006c6502fcf92539e9394'}}
                style={styles.bigPlaylists}
              />
              <Text style={styles.bigPlaylistsTitle}>Sabrina Carpenter,</Text>
              <Text style={styles.bigPlaylistsTitle}>Lady Gaga, sombr, Ch...</Text>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <Image
                source={{uri: 'https://cdn-images.dzcdn.net/images/cover/862ab860ff69c30deeb5979db6e46b62/0x1900-000000-80-0-0.jpg'}}
                style={styles.bigPlaylists}
              />
              <Text style={styles.bigPlaylistsTitle}>Metro Boomin, More,</Text>
              <Text style={styles.bigPlaylistsTitle}>Someone and m...</Text>
            </View>
          </View>
        </ScrollView>

      </ScrollView>
    </View>
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
  headerRow: {
    flexDirection: 'row',
    gap: 10,
  },
  bigPlaylists: {
    width: 165,
    height: 165,
    borderRadius: 3,
  },
  bigPlaylistsTitle: {
    color: '#a5a5a5ff',
    fontSize: 14,
    marginTop: 5,
  },
  playlistContainer: {
    backgroundColor: '#2f2f2fff',
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%',
    borderRadius: 5,
  },
  playlistImage: {
    width: 55,
    height: 55,
    borderRadius: 5,
  },
  playlistTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  logo: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    borderRadius: 60,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
});