import { createContext, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

interface ThemeColors {
  screen: string;
  card: string;
  text: string;
  secondaryText: string;
  border: string;
  accent: string;
  footerBackground: string;
  footerText: string;
}

interface AppThemeContextValue {
  isDarkMode: boolean;
  colors: ThemeColors;
  toggleTheme: () => void;
}

const lightColors: ThemeColors = {
  screen: '#F8FAFC',
  card: '#FFFFFF',
  text: '#0F172A',
  secondaryText: '#475569',
  border: '#CBD5E1',
  accent: '#4F46E5',
  footerBackground: '#4F46E5',
  footerText: '#FFFFFF',
};

const darkColors: ThemeColors = {
  screen: '#111827',
  card: '#1F2937',
  text: '#F8FAFC',
  secondaryText: '#CBD5E1',
  border: '#374151',
  accent: '#A5B4FC',
  footerBackground: '#3730A3',
  footerText: '#FFFFFF',
};

const AppThemeContext = createContext<AppThemeContextValue | undefined>(undefined);

export function AppThemeProvider({ children }: { children: ReactNode }) {
  // Comparte el tema seleccionado entre las dos pestañas de RN0.
  const [isDarkMode, setIsDarkMode] = useState(false);
  const colors = isDarkMode ? darkColors : lightColors;

  const value = useMemo(
    () => ({
      isDarkMode,
      colors,
      toggleTheme: () => setIsDarkMode((current) => !current),
    }),
    [isDarkMode, colors],
  );

  return <AppThemeContext.Provider value={value}>{children}</AppThemeContext.Provider>;
}

export function useAppTheme() {
  const context = useContext(AppThemeContext);

  if (!context) {
    throw new Error('useAppTheme debe utilizarse dentro de AppThemeProvider.');
  }

  return context;
}
