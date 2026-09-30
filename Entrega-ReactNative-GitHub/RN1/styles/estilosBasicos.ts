import { StyleSheet } from 'react-native';

// Estilos de los ejemplos de componentes básicos.
export const basicsStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  content: {
    padding: 20,
    paddingBottom: 130,
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
  title: {
    color: '#0F172A',
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 36,
  },
  subtitle: {
    color: '#475569',
    fontSize: 16,
    lineHeight: 23,
    marginTop: 10,
  },
  viewExample: {
    flexDirection: 'row',
    gap: 10,
  },
  viewBlock: {
    borderRadius: 8,
    flex: 1,
    height: 48,
  },
  textExample: {
    color: '#1E293B',
    fontSize: 20,
    fontWeight: '600',
  },
  textHighlight: {
    color: '#2563EB',
  },
  imageExample: {
    alignSelf: 'center',
    borderRadius: 18,
    height: 96,
    width: 96,
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
  resultText: {
    color: '#64748B',
    fontSize: 13,
    lineHeight: 19,
    marginTop: 10,
  },
  pressable: {
    alignItems: 'center',
    backgroundColor: '#2563EB',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  pressablePressed: {
    opacity: 0.85,
  },
  pressableText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});
