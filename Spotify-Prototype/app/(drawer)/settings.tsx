import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons as IconSymbol } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { ScrollView } from 'react-native-gesture-handler';

export default function settings() {
    const router = useRouter();
  return(
<View style={{ flex: 1, backgroundColor: '#121212' }}>
  <View style={styles.stickyHeader}>
    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
      <TouchableOpacity onPress={() => router.push('../(tabs)')}>
        <MaterialIcons name="arrow-back-ios-new" size={20} color="#ffffffc4" />
      </TouchableOpacity>

      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={[styles.text, {fontWeight: 'bold'}]}>Settings</Text>
      </View>

      <View style={{ width: 20 }} /> 
    </View>
  </View>
  <ScrollView style={{margin: 15,}}>
<TouchableOpacity onPress={() => router.push('../(tabs)/profile')}>
    <View style={{flexDirection: 'row',}}>
      <Image 
      source={require('@/assets/images/fredrinn.jpg')}
      style={styles.image}
      />
      <View style={{flexDirection: 'column', left: 15, justifyContent: 'center', gap: 5}}>
        <Text style={styles.text}>Fredrinn</Text>
        <Text style={[styles.text, {color: '#8d8d8dff' }]}>View Profile</Text>
      </View>
    </View>
</TouchableOpacity>    
    <View style={{flexDirection: 'column', gap: 30, top: 20}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.text}>Account</Text>
        <MaterialIcons name="arrow-forward-ios" size={20} color="#ffffffc4"/>        
      </View>
      
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.text}>Data-saving and offline</Text>
        <MaterialIcons name="arrow-forward-ios" size={20} color="#ffffffc4"/>        
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.text}>Playback</Text>
        <MaterialIcons name="arrow-forward-ios" size={20} color="#ffffffc4"/>        
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.text}>Content and display</Text>
        <MaterialIcons name="arrow-forward-ios" size={20} color="#ffffffc4"/>        
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.text}>Privacy and social</Text>
        <MaterialIcons name="arrow-forward-ios" size={20} color="#ffffffc4"/>        
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.text}>Media quality</Text>
        <MaterialIcons name="arrow-forward-ios" size={20} color="#ffffffc4"/>        
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.text}>Notifications</Text>
        <MaterialIcons name="arrow-forward-ios" size={20} color="#ffffffc4"/>        
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.text}>Apps and devices</Text>
        <MaterialIcons name="arrow-forward-ios" size={20} color="#ffffffc4"/>        
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.text}>About</Text>
        <MaterialIcons name="arrow-forward-ios" size={20} color="#ffffffc4"/>        
      </View>      
    </View>
    
      <TouchableOpacity style={{
            alignItems: 'center',
            borderWidth: 1,
            backgroundColor: '#fff',
            width: '40%',
            top: 30,
            padding: 15,
            borderRadius: 50,
            alignSelf: 'center',
            marginTop: 45,
        }}
        onPress={() => router.push('../../login')}>
            <Text style={[styles.text, {color: 'black', fontWeight: 'bold'}]}>Log out</Text>                 
        </TouchableOpacity>                      
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
    paddingTop: 50,
    paddingBottom: 5,    
    zIndex: 1000,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 60,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
}) 
