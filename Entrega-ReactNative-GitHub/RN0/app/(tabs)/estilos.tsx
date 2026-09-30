import { useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import type { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

import { useAppTheme } from '@/components/TemaApp';
import FloatingActions from '@/components/AccionesFlotantes';

export default function TabTwoScreen() {
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

  // Presenta una segunda pestaña con tarjetas y una composición diferente.
  return (
    <View style={[styles.screen, { backgroundColor: colors.screen }]}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.content}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}>
        <StatusBar style={isDarkMode ? 'light' : 'dark'} />

        <View style={styles.header}>
          <Text style={[styles.eyebrow, { color: colors.accent }]}>SEGUNDA PANTALLA · ESTILOS</Text>
          <Text style={[styles.title, { color: colors.text }]}>Hola Mundo</Text>
          <Text style={[styles.description, { color: colors.secondaryText }]}>
            El mismo mensaje aparece en una pantalla independiente, con una composición
            visual diferente a Inicio.
          </Text>
        </View>

        <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Text style={[styles.cardNumber, { color: colors.accent }]}>01</Text>
          <View style={styles.cardContent}>
            <Text style={[styles.cardTitle, { color: colors.text }]}>Jerarquía visual</Text>
            <Text style={[styles.cardDescription, { color: colors.secondaryText }]}>
              Títulos, subtítulos y textos secundarios tienen tamaños y colores distintos.
            </Text>
          </View>
        </View>

        <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Text style={[styles.cardNumber, { color: colors.accent }]}>02</Text>
          <View style={styles.cardContent}>
            <Text style={[styles.cardTitle, { color: colors.text }]}>Tarjetas y espaciado</Text>
            <Text style={[styles.cardDescription, { color: colors.secondaryText }]}>
              Los bordes redondeados, el padding y la separación ayudan a ordenar la interfaz.
            </Text>
          </View>
        </View>

        <View style={[styles.footerCard, { backgroundColor: colors.footerBackground }]}>
          <Text style={[styles.footerTitle, { color: colors.footerText }]}>Una pantalla, otra identidad</Text>
          <Text style={[styles.footerText, { color: colors.footerText }]}>
            El contenido sigue siendo sencillo, pero la distribución y los estilos cambian
            completamente respecto de Inicio.
          </Text>
        </View>
      </ScrollView>
      <FloatingActions onScrollToTop={handleScrollToTop} showScrollTop={showScrollTop} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    padding: 24,
    paddingBottom: 130,
  },
  header: {
    marginBottom: 28,
    paddingTop: 24,
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginBottom: 10,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    lineHeight: 40,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 14,
  },
  card: {
    alignItems: 'flex-start',
    borderRadius: 18,
    borderWidth: 1,
    flexDirection: 'row',
    marginBottom: 14,
    padding: 18,
  },
  cardNumber: {
    fontSize: 18,
    fontWeight: '800',
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 14,
    lineHeight: 21,
  },
  footerCard: {
    borderRadius: 18,
    marginTop: 8,
    padding: 20,
  },
  footerTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  footerText: {
    fontSize: 14,
    lineHeight: 21,
  },
});
