import { createContext, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

export interface ThemeColors {
  screen: string;
  card: string;
  example: string;
  text: string;
  secondaryText: string;
  mutedText: string;
  border: string;
  accent: string;
  accentSoft: string;
  control: string;
}

interface AppThemeContextValue {
  isDarkMode: boolean;
  colors: ThemeColors;
  toggleTheme: () => void;
}

const lightColors: ThemeColors = {
  screen: '#F1F5F9',
  card: '#FFFFFF',
  example: '#F8FAFC',
  text: '#0F172A',
  secondaryText: '#475569',
  mutedText: '#64748B',
  border: '#E2E8F0',
  accent: '#2563EB',
  accentSoft: '#DBEAFE',
  control: '#CBD5E1',
};

const darkColors: ThemeColors = {
  screen: '#0F172A',
  card: '#1E293B',
  example: '#111827',
  text: '#F8FAFC',
  secondaryText: '#CBD5E1',
  mutedText: '#94A3B8',
  border: '#334155',
  accent: '#93C5FD',
  accentSoft: '#1E3A8A',
  control: '#475569',
};

const AppThemeContext = createContext<AppThemeContextValue | undefined>(undefined);

export function AppThemeProvider({ children }: { children: ReactNode }) {
  // Mantiene la paleta seleccionada disponible en todas las pestañas.
  const [isDarkMode, setIsDarkMode] = useState(false);
  const colors = isDarkMode ? darkColors : lightColors;

  const value = useMemo(
    () => ({
      isDarkMode,
      colors,
      toggleTheme: () => setIsDarkMode((current) => !current),
    }),
    [colors, isDarkMode],
  );

  return <AppThemeContext.Provider value={value}>{children}</AppThemeContext.Provider>;
}

export function useAppTheme() {
  // Informa rápidamente si un componente está fuera del proveedor de tema.
  const context = useContext(AppThemeContext);

  if (!context) {
    throw new Error('useAppTheme debe utilizarse dentro de AppThemeProvider.');
  }

  return context;
}
