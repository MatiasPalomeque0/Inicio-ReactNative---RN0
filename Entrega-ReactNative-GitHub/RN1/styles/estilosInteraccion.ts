import { StyleSheet } from 'react-native';

// Estilos de los ejemplos de componentes interactivos.
export const interactionStyles = StyleSheet.create({
  screen: {
    backgroundColor: '#F1F5F9',
    flex: 1,
  },
  screenDark: {
    backgroundColor: '#0F172A',
  },
  content: {
    padding: 20,
    paddingBottom: 230,
  },
  header: {
    marginBottom: 20,
    paddingTop: 12,
  },
  eyebrow: {
    color: '#2563EB',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.4,
    marginBottom: 8,
  },
  eyebrowDark: {
    color: '#93C5FD',
  },
  title: {
    color: '#0F172A',
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 36,
  },
  titleDark: {
    color: '#F8FAFC',
  },
  subtitle: {
    color: '#475569',
    fontSize: 16,
    lineHeight: 23,
    marginTop: 10,
  },
  subtitleDark: {
    color: '#CBD5E1',
  },
  switchRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  controlLabel: {
    color: '#334155',
    flex: 1,
    fontSize: 15,
    marginRight: 12,
  },
  controlLabelDark: {
    color: '#E2E8F0',
  },
  loadingExample: {
    alignItems: 'center',
    gap: 14,
  },
  statusExample: {
    color: '#334155',
    fontSize: 15,
    lineHeight: 22,
  },
  statusExampleDark: {
    color: '#E2E8F0',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderColor: '#CBD5E1',
    borderRadius: 10,
    borderWidth: 1,
    color: '#0F172A',
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  inputDark: {
    backgroundColor: '#1E293B',
    borderColor: '#475569',
    color: '#F8FAFC',
  },
  inputResult: {
    color: '#64748B',
    fontSize: 13,
    lineHeight: 19,
    marginTop: 10,
  },
  inputResultDark: {
    color: '#94A3B8',
  },
  modalBackdrop: {
    alignItems: 'center',
    backgroundColor: 'rgba(15, 23, 42, 0.55)',
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    width: '100%',
  },
  modalContentDark: {
    backgroundColor: '#1E293B',
  },
  modalTitle: {
    color: '#0F172A',
    fontSize: 21,
    fontWeight: '700',
  },
  modalTitleDark: {
    color: '#F8FAFC',
  },
  modalText: {
    color: '#475569',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8,
  },
  modalTextDark: {
    color: '#CBD5E1',
  },
  modalButton: {
    alignItems: 'center',
    backgroundColor: '#2563EB',
    borderRadius: 10,
    marginTop: 20,
    paddingVertical: 12,
  },
  modalButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});
