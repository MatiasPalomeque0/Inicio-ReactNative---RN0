import { ScrollView, Text, View } from 'react-native';

import { scrollItems, type ListMode } from '@/data/datosListas';
import { useAppTheme } from '@/components/TemaApp';
import { listsStyles } from '@/styles/estilosListas';

import ModeButton from './BotonModoLista';

interface ListsHeaderProps {
  mode: ListMode;
  onModeChange: (mode: ListMode) => void;
}

// Encabezado compartido por los ejemplos de FlatList y SectionList.
export default function ListsHeader({ mode, onModeChange }: ListsHeaderProps) {
  const { colors } = useAppTheme();

  return (
    <View>
      <View style={listsStyles.header}>
        <Text style={[listsStyles.eyebrow, { color: colors.accent }]}>REACT NATIVE</Text>
        <Text style={[listsStyles.title, { color: colors.text }]}>Listas y scroll</Text>
        <Text style={[listsStyles.subtitle, { color: colors.secondaryText }]}>
          Tres formas de recorrer contenido según la cantidad y la organización de los datos.
        </Text>
      </View>

      <Text style={[listsStyles.sectionLabel, { color: colors.text }]}>ScrollView horizontal</Text>
      <ScrollView
        horizontal
        contentContainerStyle={listsStyles.horizontalContent}
        showsHorizontalScrollIndicator={false}>
        {scrollItems.map((item) => (
          <View key={item} style={[listsStyles.scrollItem, { backgroundColor: colors.accentSoft }]}>
            <Text style={[listsStyles.scrollItemText, { color: colors.accent }]}>{item}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={[listsStyles.modeHeader, { borderTopColor: colors.border }]}>
        <View>
          <Text style={[listsStyles.sectionLabel, { color: colors.text }]}>Lista activa</Text>
          <Text style={[listsStyles.modeDescription, { color: colors.mutedText }]}>
            {mode === 'flat'
              ? 'FlatList: elementos del mismo nivel.'
              : 'SectionList: elementos agrupados por secciones.'}
          </Text>
        </View>
        <View style={[listsStyles.modeSelector, { backgroundColor: colors.border }]}>
          <ModeButton
            active={mode === 'flat'}
            label="FlatList"
            onPress={() => onModeChange('flat')}
          />
          <ModeButton
            active={mode === 'section'}
            label="SectionList"
            onPress={() => onModeChange('section')}
          />
        </View>
      </View>
    </View>
  );
}
