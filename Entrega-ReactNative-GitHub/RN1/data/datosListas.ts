// Datos y tipos utilizados por los ejemplos de FlatList y SectionList.
export type ListMode = 'flat' | 'section';

export interface DemoItem {
  id: string;
  title: string;
  description: string;
}

export interface DemoSection {
  title: string;
  data: DemoItem[];
}

export const flatListData: DemoItem[] = [
  { id: '1', title: 'Elemento 1', description: 'Un elemento independiente.' },
  { id: '2', title: 'Elemento 2', description: 'Todos comparten la misma estructura.' },
  { id: '3', title: 'Elemento 3', description: 'FlatList los renderiza de forma eficiente.' },
  { id: '4', title: 'Elemento 4', description: 'Es una buena opción para listas largas.' },
  { id: '5', title: 'Elemento 5', description: 'Cada fila tiene una clave única.' },
];

export const sectionListData: DemoSection[] = [
  {
    title: 'Componentes de interfaz',
    data: [
      { id: 'ui-1', title: 'View', description: 'Contenedor para organizar elementos.' },
      { id: 'ui-2', title: 'Text', description: 'Componente para mostrar contenido textual.' },
    ],
  },
  {
    title: 'Componentes de interacción',
    data: [
      { id: 'interaction-1', title: 'Button', description: 'Acción nativa sencilla.' },
      { id: 'interaction-2', title: 'Pressable', description: 'Control táctil personalizable.' },
    ],
  },
];

export const scrollItems = ['Inicio', 'Componentes', 'Listas', 'Interacción', 'Resumen'];
