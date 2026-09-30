import { SymbolView } from 'expo-symbols';
import { Tabs } from 'expo-router';

import { AppThemeProvider, useAppTheme } from '@/components/TemaApp';
import { useClientOnlyValue } from '@/components/useValorCliente';

export default function TabLayout() {
  // Comparte el tema visual seleccionado entre todas las pestañas.
  return (
    <AppThemeProvider>
      <ThemedTabs />
    </AppThemeProvider>
  );
}

function ThemedTabs() {
  const { colors } = useAppTheme();

  // Configura la barra de pestañas y sus iconos según la plataforma.
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.mutedText,
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
        name="basicos"
        options={{
          title: 'Básicos',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{
                ios: 'chevron.left.forwardslash.chevron.right',
                android: 'code',
                web: 'code',
              }}
              tintColor={color}
              size={28}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="listas"
        options={{
          title: 'Listas',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{
                ios: 'list.bullet',
                android: 'format_list_bulleted',
                web: 'list',
              }}
              tintColor={color}
              size={28}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="interaccion"
        options={{
          title: 'Interacción',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{
                ios: 'switch.2',
                android: 'tune',
                web: 'tune',
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
