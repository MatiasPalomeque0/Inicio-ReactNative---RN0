import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useAppTheme } from '@/components/TemaApp';

interface FloatingActionsProps {
  onScrollToTop: () => void;
  showScrollTop: boolean;
}

export default function FloatingActions({ onScrollToTop, showScrollTop }: FloatingActionsProps) {
  const { isDarkMode, toggleTheme } = useAppTheme();

  // Mantiene las acciones sobre la barra de pestañas sin ocupar espacio del contenido.
  return (
    <View style={styles.container}>
      <Pressable
        accessibilityLabel={isDarkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
        accessibilityRole="button"
        onPress={toggleTheme}
        style={[styles.button, isDarkMode ? styles.lightButton : styles.darkButton]}>
        <Text style={[styles.icon, isDarkMode && styles.darkIcon]}>
          {isDarkMode ? '☀' : '☾'}
        </Text>
      </Pressable>
      {showScrollTop && (
        <Pressable
          accessibilityLabel="Volver al inicio del contenido"
          accessibilityRole="button"
          onPress={onScrollToTop}
          style={[styles.button, styles.topButton]}>
          <Text style={styles.icon}>↑</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    bottom: 24,
    elevation: 10,
    gap: 12,
    position: 'absolute',
    right: 18,
    zIndex: 10,
  },
  button: {
    alignItems: 'center',
    borderRadius: 28,
    elevation: 8,
    height: 56,
    justifyContent: 'center',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    width: 56,
  },
  darkButton: {
    backgroundColor: '#1E293B',
  },
  lightButton: {
    backgroundColor: '#F8FAFC',
  },
  topButton: {
    backgroundColor: '#2563EB',
  },
  icon: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 32,
  },
  darkIcon: {
    color: '#0F172A',
  },
});
