import { Drawer } from 'expo-router/drawer';
import { ThemeProvider, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { useColorScheme } from '@/hooks/useColorScheme';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Feather from 'react-native-vector-icons/Feather'
import { Image, Text, View } from 'react-native';

export default function DrawerLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Drawer screenOptions={{drawerStyle: {backgroundColor: '#1e1e1eff'}}}>        
        <Drawer.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            title: 'Home',
            drawerItemStyle: { display: 'none' },
          }}
        />
        <Drawer.Screen
          name="profileRedirect"
          options={{
            headerShown: false,
            title: 'View Profile',
            drawerLabel: () => (
              <View style={{flexDirection: 'row', gap: 5, borderBottomColor: '#313131ff', borderBottomWidth: 1, paddingBottom: 10}}>
                <Image
                  source={require('@/assets/images/fredrinn.jpg')}
                  style={{ width: 55, height: 55, marginRight: 10, borderRadius: 100, }}
                />
                <View style={{flexDirection: 'column', gap: 5,}}>
                  <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>Fredrinn</Text>
                  <Text style={{color: '#8d8d8dff', fontSize: 14,}}>View Profile</Text>
                </View>
              </View>
            ),
            
          }}
        />
        <Drawer.Screen
          name="addAccount"
          options={{
            headerShown: false,
            title: 'Add Account',
            drawerLabel: () => (
              <View style={{flexDirection: 'row', gap: 10}}>
                <SimpleLineIcons name="plus" size={22} color="#fff"/>
                <Text style={{color: '#fff', fontSize: 16}}>Add account</Text>
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="whatsNew"
          options={{
            headerShown: false,
            title: 'Whats New',
            drawerLabel: () => (
              <View style={{flexDirection: 'row', gap: 10}}>
                <MaterialIcons name="electric-bolt" size={22} color="#fff"/>
                <Text style={{color: '#fff', fontSize: 16}}>What's New</Text>
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="recent"
          options={{
            headerShown: false,
            title: 'Recent',
            drawerLabel: () => (
              <View style={{flexDirection: 'row', gap: 10}}>
                <Octicons name="history" size={22} color="#fff"/>
                <Text style={{color: '#fff', fontSize: 16}}>Recents</Text>
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            headerShown: false,
            title: 'Settings',
            drawerLabel: () => (
              <View style={{flexDirection: 'row', gap: 10}}>
                <Feather name="settings" size={24} color="#fff"/>
                <Text style={{color: '#fff', fontSize: 16}}>Settings and privacy</Text>
              </View>
            ),
          }}
        />                                 
      </Drawer>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
