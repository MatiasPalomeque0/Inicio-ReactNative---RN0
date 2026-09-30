import { useFonts } from 'expo-font';
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/components/useEsquemaColores';

export {
  // Reexporta el límite de errores del router para fallos inesperados.
  ErrorBoundary,
} from 'expo-router';

// Mantiene visible la pantalla de carga hasta preparar los recursos iniciales.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // Carga la fuente antes de renderizar el árbol de navegación.
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  // El router utiliza este efecto para detectar errores del árbol de navegación.
  useEffect(() => {
    // Permite que Expo muestre los errores del layout raíz.
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    // Oculta la pantalla de carga cuando la fuente está lista.
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  // Utiliza el tema del dispositivo para la navegación de Expo Router.
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
