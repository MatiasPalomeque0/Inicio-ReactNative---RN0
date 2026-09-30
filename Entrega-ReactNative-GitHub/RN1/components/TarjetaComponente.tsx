import type { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useAppTheme } from '@/components/TemaApp';

interface ComponentCardProps {
  name: string;
  description: string;
  usage: string;
  children: ReactNode;
}

export default function ComponentCard({
  name,
  description,
  usage,
  children,
}: ComponentCardProps) {
  // Reutiliza la misma presentación para cada componente documentado.
  const { isDarkMode } = useAppTheme();

  return (
    <View style={[styles.card, isDarkMode && styles.cardDark]}>
      <Text style={[styles.name, isDarkMode && styles.nameDark]}>{name}</Text>
      <Text style={[styles.description, isDarkMode && styles.descriptionDark]}>
        {description}
      </Text>
      <View style={[styles.example, isDarkMode && styles.exampleDark]}>{children}</View>
      <Text style={[styles.usage, isDarkMode && styles.usageDark]}>
        <Text style={[styles.usageLabel, isDarkMode && styles.usageLabelDark]}>
          Uso principal:{' '}
        </Text>
        {usage}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E2E8F0',
    borderRadius: 18,
    borderWidth: 1,
    marginBottom: 16,
    padding: 18,
  },
  cardDark: {
    backgroundColor: '#1E293B',
    borderColor: '#334155',
  },
  name: {
    color: '#0F172A',
    fontSize: 20,
    fontWeight: '700',
  },
  nameDark: {
    color: '#F8FAFC',
  },
  description: {
    color: '#475569',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 6,
  },
  descriptionDark: {
    color: '#CBD5E1',
  },
  example: {
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    marginTop: 14,
    padding: 14,
  },
  exampleDark: {
    backgroundColor: '#0F172A',
  },
  usage: {
    color: '#64748B',
    fontSize: 13,
    lineHeight: 19,
    marginTop: 12,
  },
  usageDark: {
    color: '#94A3B8',
  },
  usageLabel: {
    color: '#334155',
    fontWeight: '700',
  },
  usageLabelDark: {
    color: '#E2E8F0',
  },
});
