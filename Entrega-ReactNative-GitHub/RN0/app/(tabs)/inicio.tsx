import { useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import type { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

import FloatingActions from '@/components/AccionesFlotantes';
import { useAppTheme } from '@/components/TemaApp';

export default function TabOneScreen() {
  const { colors, isDarkMode } = useAppTheme();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const scrollViewRef = useRef<ScrollView | null>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setShowScrollTop(event.nativeEvent.contentOffset.y > 120);
  };

  const handleScrollToTop = () => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
    setShowScrollTop(false);
  };

  // Presenta una pantalla inicial simple dentro de un desplazamiento reutilizable.
  return (
    <View style={[styles.screen, { backgroundColor: colors.screen }]}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.container}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}>
        <StatusBar style={isDarkMode ? 'light' : 'dark'} />
        <Text style={[styles.title, { color: colors.text }]}>Hola Mundo</Text>
        <Text style={[styles.subtitle, { color: colors.secondaryText }]}>
          Mi primer proyecto con React Native y Expo
        </Text>
      </ScrollView>
      <FloatingActions onScrollToTop={handleScrollToTop} showScrollTop={showScrollTop} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 12,
    textAlign: 'center',
  },
});
