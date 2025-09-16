import { Tabs } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#ffffffff',   // active icon color
        tabBarInactiveTintColor: '#a9a9a9ff', // inactive icon color
        tabBarStyle: { backgroundColor: '#121212e8', paddingTop: 5, }, // optional: dark tab bar
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FoundationIcon size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <FeatherIcon size={28} name="search" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="albums-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{ headerShown: false, tabBarItemStyle: {display: 'none'}}}
      />
      <Tabs.Screen
        name="chill_playlist"
        options={{ headerShown: false, tabBarItemStyle: {display: 'none'}}}
      />      
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: ({ color }) => (
            <AntDesign size={28} name="plus" color={color} />
          ),
        }}
      />            
    </Tabs>
  );
}
