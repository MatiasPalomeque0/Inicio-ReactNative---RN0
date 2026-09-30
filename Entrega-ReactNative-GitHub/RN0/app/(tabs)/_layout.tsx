import { SymbolView } from 'expo-symbols';
import { Tabs } from 'expo-router';

import { AppThemeProvider, useAppTheme } from '@/components/TemaApp';
import { useClientOnlyValue } from '@/components/useValorCliente';

export default function TabLayout() {
  // Comparte el modo claro u oscuro entre las pantallas de RN0.
  return (
    <AppThemeProvider>
      <ThemedTabs />
    </AppThemeProvider>
  );
}

function ThemedTabs() {
  const { colors } = useAppTheme();

  // Configura la barra inferior y sus dos pantallas.
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.secondaryText,
        tabBarStyle: {
          backgroundColor: colors.card,
          borderTopColor: colors.border,
        },
        // Evita un desajuste de hidratación web causado por el encabezado estático.
        headerShown: useClientOnlyValue(false, true),
        headerStyle: {
          backgroundColor: colors.card,
        },
        headerTintColor: colors.text,
      }}>
      <Tabs.Screen
        name="inicio"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{
                ios: 'house.fill',
                android: 'home',
                web: 'home',
              }}
              tintColor={color}
              size={28}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="estilos"
        options={{
          title: 'Estilos',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{
                ios: 'paintbrush.fill',
                android: 'palette',
                web: 'palette',
              }}
              tintColor={color}
              size={28}
            />
          ),
        }}
      />
    </Tabs>
  );
}
