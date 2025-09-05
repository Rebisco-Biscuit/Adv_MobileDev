import { Drawer } from 'expo-router/drawer';
import { ThemeProvider, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    GothamMedium: require('../assets/fonts/gotham-medium.ttf'),
  });

  if (!loaded) return null;

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Drawer>
        <Drawer.Screen name="(tabs)" options={{ headerShown: false, title: 'Home' }} />
        
        <Drawer.Screen name="profileRedirect" options={{ headerShown: false, title: 'Profile' }} />
      </Drawer>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
