import React, { useState, useEffect } from 'react';
import { 
  Image, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View, 
  ScrollView,
  Modal,
  Pressable
} from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MPlaylist() {
  const router = useRouter();
  const buttons = ['Add', 'Edit', 'Sort', 'Name'];

  // State for modal visibility, new song, and artist name
  const [modalVisible, setModalVisible] = useState(false);
  const [newSong, setNewSong] = useState('');
  const [artistName, setArtistName] = useState('');
  const [playlistSongs, setPlaylistSongs] = useState([]); // Array to store song and artist name

  // Load playlist data from AsyncStorage on component mount
  useEffect(() => {
    const loadPlaylist = async () => {
      try {
        const storedPlaylist = await AsyncStorage.getItem('playlist');
        if (storedPlaylist) {
          setPlaylistSongs(JSON.parse(storedPlaylist));
        }
      } catch (error) {
        console.error('Failed to load playlist:', error);
      }
    };
    loadPlaylist();
  }, []);

  // Save playlist data to AsyncStorage
  const savePlaylist = async (updatedPlaylist) => {
    try {
      await AsyncStorage.setItem('playlist', JSON.stringify(updatedPlaylist));
      setPlaylistSongs(updatedPlaylist);
    } catch (error) {
      console.error('Failed to save playlist:', error);
    }
  };

  const onAddPress = () => {
    setModalVisible(true);
  };

  const onConfirmAdd = () => {
    if (newSong.trim() !== '' && artistName.trim() !== '') {
      const newSongObj = { song: newSong.trim(), artist: artistName.trim() };
      const updatedPlaylist = [...playlistSongs, newSongObj];
      savePlaylist(updatedPlaylist);
      setNewSong('');
      setArtistName('');
      setModalVisible(false);
      console.log("Added song:", newSongObj);
    }
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
        colors={['#354e66', '#121212']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={{ width: '100%', height: '50%', justifyContent: 'center', marginBottom: 30 }}
      >
        <View style={{ flexDirection: 'column', gap: 5 }}>
          <Image
            source={require('@/assets/images/fredrinn2.jpg')}
            style={styles.playlistImage}
          />

          <View style={{ top: 15 }}>
            <Text style={styles.playlistTitle}>Maoy Playlist</Text>
            <View style={{ flexDirection: 'row', gap: 15, left: 15 }}>
              <Image
                source={require('@/assets/images/fredrinn.jpg')}
                style={styles.profile}
              />
              <Text style={[styles.smallTxt, { color: '#fff', fontWeight: 'bold' }]}>Fredrinn</Text>
            </View>
            <View style={{ flexDirection: 'row', gap: 10, left: 15, alignItems: 'center' }}>
              <MaterialIcons name="lock" size={16} color="#8d8d8dff" />
              <Text style={styles.smallTxt}>1h 43m</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', gap: 25, alignItems: 'center', margin: 15 }}>
            <Ionicons name="download-outline" size={20} color="#8d8d8dff" />
            <Ionicons name="person-add-outline" size={20} color="#8d8d8dff" />
            <Entypo name="dots-three-horizontal" size={20} color="#8d8d8dff" />

            <View style={{ flex: 1 }} />

            <Ionicons name="shuffle" size={20} color="#8d8d8dff" />
            <Ionicons name="pause-circle-sharp" size={48} color="#1DB954" />
          </View>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 10 }}>
          {buttons.map((btn, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={btn === 'Add' ? onAddPress : null}
            >
              <Text style={styles.buttonText}>{btn}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </LinearGradient>

      {/* Modal for adding song and artist */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Add a new song</Text>

            {/* Song Name Input */}
            <TextInput
              style={styles.textInput}
              placeholder="Song name"
              placeholderTextColor="#888"
              value={newSong}
              onChangeText={setNewSong}
              autoFocus={true}
            />

            {/* Artist Name Input */}
            <TextInput
              style={styles.textInput}
              placeholder="Artist name"
              placeholderTextColor="#888"
              value={artistName}
              onChangeText={setArtistName}
            />

            <View style={styles.modalButtonsRow}>
              <Pressable
                style={[styles.modalButton, { backgroundColor: '#888' }]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.modalButton, { backgroundColor: '#1DB954' }]}
                onPress={onConfirmAdd}
              >
                <Text style={styles.modalButtonText}>Add</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      {/* Display added songs with artist names */}
      <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
        {playlistSongs.length > 0 && <Text style={{ color: '#fff', fontWeight: 'bold', marginBottom: 5 }}>Songs in Playlist:</Text>}
        {playlistSongs.map((songObj, i) => (
          <Text key={i} style={{ color: '#ccc', fontSize: 16, marginBottom: 3 }}>
            {songObj.song} - {songObj.artist}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  playlistImage: {
    width: 230,
    height: 230,
    // boxShadow only works on web, for RN use shadow props if needed
    alignSelf: 'center',
    borderRadius: 5,
  },
  playlistTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1,
    left: 15,
  },
  profile: {
    width: 25,
    height: 25,
    borderRadius: 100,
  },
  smallTxt: {
    fontSize: 16,
    color: "#8d8d8dff",
  },
  button: {
    backgroundColor: '#2f2f2f', // Darker background for better contrast
    paddingHorizontal: 20,
    borderRadius: 8,
    marginRight: 12,
    elevation: 2,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: '#000000cc', // semi-transparent black
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#222',
    borderRadius: 12,
    padding: 20,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput: {
    backgroundColor: '#444',
    color: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 15,
  },
  modalButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    minWidth: 100,
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});

