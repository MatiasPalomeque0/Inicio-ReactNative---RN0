import { StyleSheet } from 'react-native';

// Estilos compartidos por el encabezado, las filas y las listas virtualizadas.
export const listsStyles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    paddingTop: 24,
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.4,
    marginBottom: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 36,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 23,
    marginTop: 10,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '700',
    marginTop: 20,
  },
  horizontalContent: {
    gap: 10,
    paddingVertical: 12,
  },
  scrollItem: {
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  scrollItemText: {
    fontSize: 14,
    fontWeight: '600',
  },
  modeHeader: {
    alignItems: 'flex-start',
    borderTopWidth: 1,
    flexDirection: 'column',
    marginTop: 8,
    paddingTop: 16,
  },
  modeDescription: {
    fontSize: 12,
    marginTop: 4,
  },
  modeSelector: {
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: 12,
    padding: 3,
  },
  modeButton: {
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 7,
  },
  modeButtonText: {
    fontSize: 11,
    fontWeight: '600',
  },
  listArea: {
    flex: 1,
    minHeight: 0,
    marginTop: 8,
  },
  virtualizedList: {
    flex: 1,
  },
  listContent: {
    gap: 10,
    paddingBottom: 130,
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  listRow: {
    alignItems: 'flex-start',
    borderRadius: 14,
    borderWidth: 1,
    flexDirection: 'row',
    padding: 16,
  },
  dot: {
    borderRadius: 6,
    height: 12,
    marginRight: 12,
    marginTop: 4,
    width: 12,
  },
  rowContent: {
    flex: 1,
  },
  rowTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  rowDescription: {
    fontSize: 13,
    lineHeight: 19,
    marginTop: 4,
  },
  sectionHeader: {
    fontSize: 13,
    fontWeight: '700',
    paddingBottom: 8,
    paddingTop: 4,
  },
});
