import { Text, View } from 'react-native';

import type { DemoItem } from '@/data/datosListas';
import { useAppTheme } from '@/components/TemaApp';
import { listsStyles } from '@/styles/estilosListas';

// Renderiza una fila con el mismo diseño en ambas listas.
export default function ListRow({ item }: { item: DemoItem }) {
  const { colors } = useAppTheme();

  return (
    <View style={[listsStyles.listRow, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <View style={[listsStyles.dot, { backgroundColor: colors.accent }]} />
      <View style={listsStyles.rowContent}>
        <Text style={[listsStyles.rowTitle, { color: colors.text }]}>{item.title}</Text>
        <Text style={[listsStyles.rowDescription, { color: colors.mutedText }]}>
          {item.description}
        </Text>
      </View>
    </View>
  );
}
