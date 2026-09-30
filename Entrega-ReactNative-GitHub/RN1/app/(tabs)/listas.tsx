import { useRef, useState } from 'react';
import { View } from 'react-native';
import type { FlatList, NativeScrollEvent, NativeSyntheticEvent, SectionList } from 'react-native';

import { useAppTheme } from '@/components/TemaApp';
import FloatingActions from '@/components/AccionesFlotantes';
import { FlatListDemo, SectionListDemo } from '@/components/lists/ListasVirtualizadas';
import {
  type DemoItem,
  type DemoSection,
  type ListMode,
} from '@/data/datosListas';
import { listsStyles } from '@/styles/estilosListas';

export default function ListsScreen() {
  const { colors } = useAppTheme();
  // Selecciona qué lista virtualizada aparece debajo del encabezado compartido.
  const [mode, setMode] = useState<ListMode>('flat');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const flatListRef = useRef<FlatList<DemoItem> | null>(null);
  const sectionListRef = useRef<SectionList<DemoItem, DemoSection> | null>(null);

  // Muestra el botón de regreso después de desplazar la lista activa.
  const handleListScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setShowScrollTop(event.nativeEvent.contentOffset.y > 120);
  };

  const handleModeChange = (nextMode: ListMode) => {
    // Reinicia la acción flotante al cambiar de lista.
    setMode(nextMode);
    setShowScrollTop(false);
  };

  const handleScrollToTop = () => {
    // Utiliza la referencia correcta porque cada lista tiene una API distinta.
    if (mode === 'flat') {
      flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
    } else {
      sectionListRef.current?.scrollToLocation({
        animated: true,
        itemIndex: 0,
        sectionIndex: 0,
      });
    }

    setShowScrollTop(false);
  };

  // Utiliza la lista activa como desplazamiento vertical principal.
  return (
    <View style={[listsStyles.screen, { backgroundColor: colors.screen }]}>
      <View style={listsStyles.listArea}>
        {mode === 'flat' ? (
          <FlatListDemo
            key="flat"
            listRef={flatListRef}
            mode={mode}
            onModeChange={handleModeChange}
            onScroll={handleListScroll}
          />
        ) : (
          <SectionListDemo
            key="section"
            listRef={sectionListRef}
            mode={mode}
            onModeChange={handleModeChange}
            onScroll={handleListScroll}
          />
        )}
      </View>
      <FloatingActions onScrollToTop={handleScrollToTop} showScrollTop={showScrollTop} />
    </View>
  );
}
