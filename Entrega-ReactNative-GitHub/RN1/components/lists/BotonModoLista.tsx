import { Pressable, Text } from 'react-native';

import { useAppTheme } from '@/components/TemaApp';
import { listsStyles } from '@/styles/estilosListas';

interface ModeButtonProps {
  active: boolean;
  label: string;
  onPress: () => void;
}

// Botón utilizado para cambiar entre los dos ejemplos de listas.
export default function ModeButton({ active, label, onPress }: ModeButtonProps) {
  const { colors } = useAppTheme();

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={[listsStyles.modeButton, { backgroundColor: active ? colors.card : 'transparent' }]}>
      <Text style={[listsStyles.modeButtonText, { color: active ? colors.accent : colors.mutedText }]}>
        {label}
      </Text>
    </Pressable>
  );
}
