import type { RefObject } from 'react';
import { FlatList, SectionList, Text } from 'react-native';
import type { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

import { flatListData, sectionListData, type DemoItem, type DemoSection, type ListMode } from '@/data/datosListas';
import { useAppTheme } from '@/components/TemaApp';
import ListsHeader from '@/components/lists/EncabezadoListas';
import ListRow from '@/components/lists/FilaLista';
import { listsStyles } from '@/styles/estilosListas';

export type ScrollHandler = (event: NativeSyntheticEvent<NativeScrollEvent>) => void;

interface ListDemoProps {
  mode: ListMode;
  onModeChange: (mode: ListMode) => void;
  onScroll: ScrollHandler;
}

interface FlatListDemoProps extends ListDemoProps {
  listRef: RefObject<FlatList<DemoItem> | null>;
}

interface SectionListDemoProps extends ListDemoProps {
  listRef: RefObject<SectionList<DemoItem, DemoSection> | null>;
}

// Separa el renderizado de las listas del estado y el diseño de la pantalla.
export function FlatListDemo({ listRef, mode, onModeChange, onScroll }: FlatListDemoProps) {
  return (
    <FlatList
      ref={listRef}
      data={flatListData}
      keyExtractor={(item) => item.id}
      onScroll={onScroll}
      scrollEventThrottle={16}
      renderItem={({ item }) => <ListRow item={item} />}
      ListHeaderComponent={<ListsHeader mode={mode} onModeChange={onModeChange} />}
      style={listsStyles.virtualizedList}
      contentContainerStyle={listsStyles.listContent}
      showsVerticalScrollIndicator={false}
    />
  );
}

export function SectionListDemo({
  listRef,
  mode,
  onModeChange,
  onScroll,
}: SectionListDemoProps) {
  const { colors } = useAppTheme();

  return (
    <SectionList<DemoItem, DemoSection>
      ref={listRef}
      sections={sectionListData}
      keyExtractor={(item) => item.id}
      onScroll={onScroll}
      renderItem={({ item }) => <ListRow item={item} />}
      renderSectionHeader={({ section }) => (
        <Text style={[listsStyles.sectionHeader, { backgroundColor: colors.screen, color: colors.accent }]}>
          {section.title}
        </Text>
      )}
      ListHeaderComponent={<ListsHeader mode={mode} onModeChange={onModeChange} />}
      style={listsStyles.virtualizedList}
      contentContainerStyle={listsStyles.listContent}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      stickySectionHeadersEnabled
    />
  );
}
